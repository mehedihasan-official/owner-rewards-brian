"use client";

import Link from "next/link";
import {
  Wrench,
  Gift,
  CreditCard,
  Landmark,
  Inbox,
  RotateCcw,
  type LucideIcon,
} from "lucide-react";
import { useRewards } from "@/lib/rewards-store";
import { num, usd, type RedemptionKind } from "@/lib/rewards";

const icons: Record<RedemptionKind, LucideIcon> = {
  maintenance: Wrench,
  "gift-card": Gift,
  visa: CreditCard,
  deposit: Landmark,
};

const labels: Record<RedemptionKind, string> = {
  maintenance: "Maintenance",
  "gift-card": "Gift card",
  visa: "Visa reward",
  deposit: "Bank deposit",
};

export default function ActivityList() {
  const { activity, reset, ready } = useRewards();

  const totalSpent = activity.reduce((s, a) => s + a.pointsSpent, 0);
  const totalValue = activity.reduce((s, a) => s + a.usdValue, 0);

  return (
    <div className="container-page py-10 sm:py-14">
      <div className="grid gap-4 sm:grid-cols-3">
        <Stat label="Redemptions" value={num(activity.length)} />
        <Stat label="Points spent (all time)" value={num(totalSpent)} />
        <Stat label="Value redeemed" value={usd(totalValue)} />
      </div>

      <div className="mt-8 flex items-center justify-between">
        <h2 className="text-lg sm:text-xl font-bold text-brand-900">
          Redemption history
        </h2>
        {ready && activity.length > 0 && (
          <button
            type="button"
            onClick={() => {
              if (
                confirm(
                  "Reset your points balance and clear redemption history? This is only for demo purposes."
                )
              )
                reset();
            }}
            className="inline-flex items-center gap-1 text-xs font-semibold text-ink-500 hover:text-brand-900"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Reset demo
          </button>
        )}
      </div>

      {!ready ? (
        <div className="mt-4 rounded-xl border border-ink-100 bg-white p-10 text-center text-ink-500">
          Loading…
        </div>
      ) : activity.length === 0 ? (
        <div className="mt-4 rounded-xl border border-dashed border-ink-100 bg-ink-50 p-10 text-center">
          <Inbox className="mx-auto h-8 w-8 text-ink-500" />
          <div className="mt-2 text-sm font-semibold text-brand-900">
            No redemptions yet
          </div>
          <p className="mt-1 text-sm text-ink-500">
            When you redeem points, your receipts will appear here.
          </p>
          <Link
            href="/gift-cards"
            className="mt-4 inline-flex h-10 items-center rounded-md bg-accent-500 px-5 text-sm font-bold uppercase tracking-wide text-brand-900 hover:bg-accent-400"
          >
            Start redeeming
          </Link>
        </div>
      ) : (
        <ul className="mt-4 divide-y divide-ink-100 border-y border-ink-100">
          {activity.map((a) => {
            const Icon = icons[a.kind];
            return (
              <li
                key={a.id}
                className="flex flex-col sm:flex-row sm:items-center gap-3 py-4"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-brand-900 truncate">
                    {a.title}
                  </div>
                  <div className="text-xs text-ink-500 truncate">
                    {labels[a.kind]} ·{" "}
                    {new Date(a.date).toLocaleString("en-US", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}{" "}
                    · <span className="font-mono">{a.id}</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 sm:pl-4">
                  <div className="text-right">
                    <div className="text-sm font-bold text-brand-900">
                      −{num(a.pointsSpent)} pts
                    </div>
                    <div className="text-xs text-ink-500">
                      {usd(a.usdValue)}
                    </div>
                  </div>
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded ${
                      a.status === "Completed"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {a.status}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-ink-100 bg-white p-5 shadow-sm">
      <div className="text-xs font-bold uppercase tracking-widest text-ink-500">
        {label}
      </div>
      <div className="mt-2 text-2xl font-bold text-brand-900">{value}</div>
    </div>
  );
}
