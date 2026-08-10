"use client";

import { useMemo, useState } from "react";
import { Wrench, AlertCircle } from "lucide-react";
import PageHeader from "@/components/redemption/PageHeader";
import BalanceCard from "@/components/redemption/BalanceCard";
import Confirmation from "@/components/redemption/Confirmation";
import { useRewards } from "@/lib/rewards-store";
import { clubToUsd, num, usd } from "@/lib/rewards";
import type { Activity } from "@/lib/rewards";

const TIERS = [25_000, 50_000, 75_000, 100_000];

export default function MaintenanceFlow() {
  const { balance, redeem, ready } = useRewards();
  const [fee, setFee] = useState(1200);
  const [tier, setTier] = useState<number | "max">(25_000);
  const [confirmed, setConfirmed] = useState<Activity | null>(null);

  const pointsToSpend = useMemo(() => {
    if (tier === "max") return balance;
    return Math.min(tier, balance);
  }, [tier, balance]);

  const credit = useMemo(
    () => Math.min(fee, clubToUsd(pointsToSpend)),
    [fee, pointsToSpend]
  );
  const balanceOwed = Math.max(0, fee - credit);

  const canSubmit = ready && pointsToSpend > 0 && fee > 0;

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    const entry = redeem({
      kind: "maintenance",
      title: "Maintenance credit applied",
      detail: `Credit of ${usd(
        credit
      )} applied to your next maintenance invoice (fee ${usd(
        fee
      )}). Remaining balance owed: ${usd(balanceOwed)}.`,
      pointsSpent: pointsToSpend,
      usdValue: credit,
      status: "Processing",
    });
    if (entry) setConfirmed(entry);
  }

  if (confirmed) {
    return (
      <Confirmation
        entry={confirmed}
        primaryHref="/redeem/maintenance"
        primaryLabel="Redeem again"
      />
    );
  }

  return (
    <>
      <PageHeader
        icon={Wrench}
        eyebrow="Redeem · Maintenance credit"
        title="Apply points to your maintenance fee"
        description="Enter your fee, pick a point tier, and confirm. We'll apply the credit to your next invoice."
      />

      <div className="container-page py-10 sm:py-14 grid gap-8 lg:grid-cols-[1fr_360px]">
        <form onSubmit={onSubmit} className="space-y-8">
          <section>
            <h2 className="text-lg font-bold text-brand-900">
              1. Your maintenance fee
            </h2>
            <label className="mt-3 block">
              <span className="text-xs font-semibold uppercase tracking-widest text-ink-500">
                Fee amount (USD)
              </span>
              <div className="mt-2 flex items-center rounded-md border border-ink-100 bg-white focus-within:border-brand-500">
                <span className="pl-4 text-ink-500">$</span>
                <input
                  type="number"
                  min={0}
                  step={1}
                  value={fee}
                  onChange={(e) => setFee(Number(e.target.value) || 0)}
                  className="w-full bg-transparent px-2 py-3 text-lg font-bold text-brand-900 outline-none"
                />
              </div>
            </label>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-900">
              2. How many points do you want to use?
            </h2>
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              {TIERS.map((t) => {
                const active = tier === t;
                const disabled = t > balance;
                return (
                  <button
                    key={t}
                    type="button"
                    disabled={disabled}
                    onClick={() => setTier(t)}
                    className={`rounded-lg border p-3 text-left transition ${
                      active
                        ? "border-brand-700 bg-brand-50 ring-2 ring-brand-700"
                        : "border-ink-100 bg-white hover:border-brand-500"
                    } ${
                      disabled ? "opacity-40 cursor-not-allowed" : ""
                    }`}
                  >
                    <div className="text-base font-bold text-brand-900">
                      {num(t)} pts
                    </div>
                    <div className="mt-0.5 text-[11px] text-ink-500">
                      ≈ {usd(clubToUsd(t))}
                    </div>
                  </button>
                );
              })}
              <button
                type="button"
                onClick={() => setTier("max")}
                className={`rounded-lg border p-3 text-left transition ${
                  tier === "max"
                    ? "border-brand-700 bg-brand-50 ring-2 ring-brand-700"
                    : "border-ink-100 bg-white hover:border-brand-500"
                }`}
              >
                <div className="text-base font-bold text-brand-900">
                  All points
                </div>
                <div className="mt-0.5 text-[11px] text-ink-500">
                  {num(balance)} pts · ≈ {usd(clubToUsd(balance))}
                </div>
              </button>
            </div>
          </section>

          <section className="rounded-xl border border-ink-100 bg-ink-50 p-5">
            <h2 className="text-lg font-bold text-brand-900">3. Summary</h2>
            <dl className="mt-3 divide-y divide-ink-100 text-sm">
              <SummaryRow label="Fee amount" value={usd(fee)} />
              <SummaryRow
                label="Points to apply"
                value={`${num(pointsToSpend)} Club Points`}
              />
              <SummaryRow label="Credit value" value={usd(credit)} strong />
              <SummaryRow
                label="Balance owed after credit"
                value={usd(balanceOwed)}
              />
            </dl>
            {balanceOwed > 0 && (
              <div className="mt-3 flex items-start gap-2 rounded-md bg-amber-50 p-3 text-xs text-amber-800">
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                <span>
                  Points don't fully cover your fee. You'll receive an invoice
                  for the remaining {usd(balanceOwed)}.
                </span>
              </div>
            )}
          </section>

          <button
            type="submit"
            disabled={!canSubmit}
            className="inline-flex h-12 items-center rounded-md bg-accent-500 px-8 text-sm font-bold uppercase tracking-wide text-white hover:bg-accent-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Confirm redemption
          </button>
        </form>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <BalanceCard pending={pointsToSpend} />
        </aside>
      </div>
    </>
  );
}

function SummaryRow({
  label,
  value,
  strong = false,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-2">
      <dt className="text-ink-500">{label}</dt>
      <dd
        className={
          strong ? "font-bold text-brand-900" : "text-brand-900 font-semibold"
        }
      >
        {value}
      </dd>
    </div>
  );
}
