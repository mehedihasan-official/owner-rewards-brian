"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { INITIAL_CLUB_POINTS, type Activity } from "./rewards";

const STORAGE_KEY = "owner-rewards-state-v2";

type State = {
  balance: number;
  activity: Activity[];
};

type Ctx = State & {
  ready: boolean;
  redeem: (entry: Omit<Activity, "id" | "date">) => Activity | null;
  reset: () => void;
};

const RewardsContext = createContext<Ctx | null>(null);

const initial: State = { balance: INITIAL_CLUB_POINTS, activity: [] };

export function RewardsProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<State>(initial);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as State;
        if (
          typeof parsed?.balance === "number" &&
          Array.isArray(parsed.activity)
        ) {
          setState(parsed);
        }
      }
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }, [state, ready]);

  const redeem = useCallback<Ctx["redeem"]>((entry) => {
    let created: Activity | null = null;
    setState((s) => {
      if (entry.pointsSpent > s.balance) return s;
      created = {
        ...entry,
        id: `RDM-${Date.now().toString(36).toUpperCase()}-${Math.floor(
          Math.random() * 9999
        )
          .toString(36)
          .toUpperCase()}`,
        date: new Date().toISOString(),
      };
      return {
        balance: s.balance - entry.pointsSpent,
        activity: [created, ...s.activity],
      };
    });
    return created;
  }, []);

  const reset = useCallback(() => setState(initial), []);

  return (
    <RewardsContext.Provider value={{ ...state, ready, redeem, reset }}>
      {children}
    </RewardsContext.Provider>
  );
}

export function useRewards() {
  const ctx = useContext(RewardsContext);
  if (!ctx)
    throw new Error("useRewards must be used inside <RewardsProvider>");
  return ctx;
}
