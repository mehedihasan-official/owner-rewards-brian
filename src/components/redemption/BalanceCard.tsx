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
      <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-4">
        <Cell label="Club Points" value={num(balance)} />
        <Cell label="IHG Rewards" value={num(clubToIhg(balance))} />
        <Cell
          label="Available value"
          value={usd(clubToUsd(balance))}
          className="col-span-2 sm:col-span-1"
        />
      </div>
      {pending > 0 && (
        <div className="mt-4 rounded-md bg-brand-50 px-3 py-2 text-xs text-brand-900">
          After this redemption: <b>{num(remaining)}</b> Club Points remaining
        </div>
      )}
    </div>
  );
}

function Cell({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="text-[11px] font-semibold uppercase tracking-widest text-ink-500">
        {label}
      </div>
      <div className="mt-1 text-xl sm:text-2xl font-bold text-brand-900">
        {value}
      </div>
    </div>
  );
}
