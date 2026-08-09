"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import BalanceCard from "@/components/redemption/BalanceCard";
import Confirmation from "@/components/redemption/Confirmation";
import AmountTiles from "@/components/redemption/AmountTiles";
import { useRewards } from "@/lib/rewards-store";
import { num, usd, usdToClub } from "@/lib/rewards";
import type { GiftCard } from "@/lib/gift-cards";
import { categoryLabels } from "@/lib/gift-cards";
import type { Activity } from "@/lib/rewards";

export default function GiftCardDetail({ card }: { card: GiftCard }) {
  const { balance, redeem, ready } = useRewards();
  const [amount, setAmount] = useState(card.amounts[0]);
  const [email, setEmail] = useState("owner@example.com");
  const [confirmed, setConfirmed] = useState<Activity | null>(null);

  const pointsCost = usdToClub(amount);
  const canSubmit = ready && pointsCost <= balance && !!email;

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    const entry = redeem({
      kind: "gift-card",
      title: `${card.brand} ${usd(amount)} eGift`,
      detail: `Your ${card.brand} eGift card for ${usd(
        amount
      )} was sent to ${email}. Check your inbox — delivery is usually instant.`,
      pointsSpent: pointsCost,
      usdValue: amount,
      status: "Completed",
    });
    if (entry) setConfirmed(entry);
  }

  if (confirmed) {
    return (
      <Confirmation
        entry={confirmed}
        primaryHref="/gift-cards"
        primaryLabel="Browse more gift cards"
      />
    );
  }

  return (
    <div className="container-page py-10 sm:py-14">
      <Link
        href="/gift-cards"
        className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-900"
      >
        <ArrowLeft className="h-4 w-4" /> All gift cards
      </Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-[420px_1fr]">
        <div>
          <div
            className={`aspect-[16/10] w-full rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center p-6 shadow-lg`}
          >
            <div className="text-white text-3xl font-bold text-center drop-shadow">
              {card.brand}
            </div>
          </div>
          <div className="mt-4 text-xs font-semibold uppercase tracking-widest text-ink-500">
            {categoryLabels[card.category]} · {card.format}
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-brand-900">
              {card.brand} eGift Card
            </h1>
            <p className="mt-2 text-sm text-ink-700">
              Redeem your Club Points for a {card.brand} eGift. Delivered
              instantly to your inbox — no expiration.
            </p>
          </div>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-ink-500">
              1. Select amount
            </h2>
            <div className="mt-3">
              <AmountTiles
                amounts={card.amounts}
                value={amount}
                onChange={setAmount}
              />
            </div>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-ink-500">
              2. Delivery email
            </h2>
            <label className="mt-3 flex items-center rounded-md border border-ink-100 bg-white focus-within:border-brand-500">
              <Mail className="ml-3 h-4 w-4 text-ink-500" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent px-3 py-3 text-sm text-brand-900 outline-none"
              />
            </label>
          </section>

          <div className="rounded-xl border border-ink-100 bg-ink-50 p-5">
            <div className="flex items-center justify-between">
              <div className="text-sm text-ink-500">You'll pay</div>
              <div className="text-xl font-bold text-brand-900">
                {num(pointsCost)} pts
              </div>
            </div>
            <div className="mt-1 flex items-center justify-between">
              <div className="text-sm text-ink-500">You'll receive</div>
              <div className="text-xl font-bold text-brand-900">
                {usd(amount)}
              </div>
            </div>
            {pointsCost > balance && (
              <div className="mt-3 rounded-md bg-red-50 px-3 py-2 text-xs text-red-700">
                Not enough points — you need {num(pointsCost - balance)} more.
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={!canSubmit}
            className="inline-flex h-12 items-center rounded-md bg-accent-500 px-8 text-sm font-bold uppercase tracking-wide text-brand-900 hover:bg-accent-400 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Confirm & redeem
          </button>

          <div className="lg:hidden">
            <BalanceCard pending={pointsCost} />
          </div>
        </form>
      </div>

      <div className="mt-8 hidden lg:block max-w-md">
        <BalanceCard pending={pointsCost} />
      </div>
    </div>
  );
}
