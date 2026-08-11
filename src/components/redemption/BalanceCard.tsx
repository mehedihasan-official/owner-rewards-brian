"use client";

import { Coins } from "lucide-react";
import { useRewards } from "@/lib/rewards-store";
import { clubToIhg, clubToUsd, num, usd } from "@/lib/rewards";

export default function BalanceCard({ pending = 0 }: { pending?: number }) {
  const { balance } = useRewards();
  const remaining = Math.max(0, balance - pending);

  return (
    <div className="rounded-xl border border-ink-100 bg-white p-5 sm:p-6 shadow-sm">
      <div className="flex items-center gap-2 text-brand-900">
        <Coins className="h-5 w-5 text-brand-700" />
        <div className="text-xs font-bold uppercase tracking-widest text-ink-500">
          Your points
        </div>
      </div>

      <dl className="mt-4 divide-y divide-ink-100">
        <Row label="Club Points" value={num(balance)} />
        <Row label="IHG Rewards" value={num(clubToIhg(balance))} />
        <Row label="Available value" value={usd(clubToUsd(balance))} />
      </dl>

      {pending > 0 && (
        <div className="mt-4 rounded-md bg-brand-50 px-3 py-2 text-xs text-brand-900">
          After this redemption:{" "}
          <b className="tabular-nums">{num(remaining)}</b> Club Points remaining
        </div>
      )}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 py-2.5">
      <dt className="text-[11px] font-semibold uppercase tracking-widest text-ink-500">
        {label}
      </dt>
      <dd className="text-lg sm:text-xl font-bold text-brand-900 tabular-nums">
        {value}
      </dd>
    </div>
  );
}
