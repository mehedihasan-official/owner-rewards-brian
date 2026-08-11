"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CreditCard, Landmark, Mail } from "lucide-react";
import PageHeader from "@/components/redemption/PageHeader";
import BalanceCard from "@/components/redemption/BalanceCard";
import Confirmation from "@/components/redemption/Confirmation";
import AmountTiles from "@/components/redemption/AmountTiles";
import { useRewards } from "@/lib/rewards-store";
import { num, usd, usdToClub } from "@/lib/rewards";
import type { Activity } from "@/lib/rewards";

type Tab = "visa" | "deposit";
const AMOUNTS = [25, 50, 100, 250, 500];

export default function CashFlow() {
  const params = useSearchParams();
  const initial = (params.get("tab") === "deposit" ? "deposit" : "visa") as Tab;
  const [tab, setTab] = useState<Tab>(initial);
  const [confirmed, setConfirmed] = useState<Activity | null>(null);

  useEffect(() => setTab(initial), [initial]);

  if (confirmed) {
    return (
      <Confirmation
        entry={confirmed}
        primaryHref="/redeem/cash"
        primaryLabel="Redeem again"
      />
    );
  }

  return (
    <>
      <PageHeader
        icon={tab === "visa" ? CreditCard : Landmark}
        eyebrow="Redeem · Cash rewards"
        title={
          tab === "visa"
            ? "Visa digital reward"
            : "Direct bank deposit"
        }
        description={
          tab === "visa"
            ? "Get a virtual Visa card delivered to your inbox — usable anywhere Visa is accepted."
            : "Deposit the cash value of your points directly to your bank account."
        }
      />

      <div className="container-page py-10 sm:py-14">
        <div className="inline-flex rounded-md border border-ink-100 bg-white p-1">
          {(["visa", "deposit"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`px-4 py-2 text-sm font-semibold rounded ${
                tab === t
                  ? "bg-brand-700 text-white"
                  : "text-ink-700 hover:bg-ink-50"
              }`}
            >
              {t === "visa" ? "Visa reward" : "Bank deposit"}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_360px]">
          {tab === "visa" ? (
            <VisaForm onDone={setConfirmed} />
          ) : (
            <DepositForm onDone={setConfirmed} />
          )}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <BalanceCard />
          </aside>
        </div>
      </div>
    </>
  );
}

function VisaForm({ onDone }: { onDone: (a: Activity) => void }) {
  const { balance, redeem, ready } = useRewards();
  const [amount, setAmount] = useState(AMOUNTS[2]);
  const [email, setEmail] = useState("owner@example.com");
  const points = usdToClub(amount);
  const canSubmit = ready && points <= balance && !!email;

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    const entry = redeem({
      kind: "visa",
      title: `Visa reward ${usd(amount)}`,
      detail: `A ${usd(
        amount
      )} virtual Visa card was sent to ${email}. It's usable anywhere Visa is accepted.`,
      pointsSpent: points,
      usdValue: amount,
      status: "Completed",
    });
    if (entry) onDone(entry);
  }

  return (
    <form onSubmit={submit} className="space-y-6">
      <section>
        <h2 className="text-sm font-bold uppercase tracking-widest text-ink-500">
          1. Reward amount
        </h2>
        <div className="mt-3">
          <AmountTiles amounts={AMOUNTS} value={amount} onChange={setAmount} />
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

      <Summary points={points} amount={amount} tooLow={points > balance} />

      <button
        type="submit"
        disabled={!canSubmit}
        className="inline-flex h-12 items-center rounded-md bg-accent-500 px-8 text-sm font-bold uppercase tracking-wide text-white hover:bg-accent-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send my Visa reward
      </button>
    </form>
  );
}

function DepositForm({ onDone }: { onDone: (a: Activity) => void }) {
  const { balance, redeem, ready } = useRewards();
  const [amount, setAmount] = useState(AMOUNTS[3]);
  const [routing, setRouting] = useState("");
  const [account, setAccount] = useState("");
  const [name, setName] = useState("");
  const points = usdToClub(amount);

  const validRouting = /^\d{9}$/.test(routing);
  const validAccount = /^\d{5,17}$/.test(account);
  const canSubmit =
    ready && points <= balance && validRouting && validAccount && !!name.trim();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    const last4 = account.slice(-4);
    const entry = redeem({
      kind: "deposit",
      title: `Bank deposit ${usd(amount)}`,
      detail: `A deposit of ${usd(
        amount
      )} to the account ending in ${last4} for ${name} was submitted. Deposits typically settle in 3–5 business days.`,
      pointsSpent: points,
      usdValue: amount,
      status: "Processing",
    });
    if (entry) onDone(entry);
  }

  return (
    <form onSubmit={submit} className="space-y-6">
      <section>
        <h2 className="text-sm font-bold uppercase tracking-widest text-ink-500">
          1. Deposit amount
        </h2>
        <div className="mt-3">
          <AmountTiles amounts={AMOUNTS} value={amount} onChange={setAmount} />
        </div>
      </section>

      <section>
        <h2 className="text-sm font-bold uppercase tracking-widest text-ink-500">
          2. Bank details
        </h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <TextField
            label="Account holder name"
            value={name}
            onChange={setName}
            placeholder="Brian Caceres"
            className="sm:col-span-2"
          />
          <TextField
            label="Routing number"
            value={routing}
            onChange={(v) => setRouting(v.replace(/\D/g, "").slice(0, 9))}
            placeholder="9 digits"
            error={routing.length > 0 && !validRouting ? "Must be 9 digits" : ""}
          />
          <TextField
            label="Account number"
            value={account}
            onChange={(v) => setAccount(v.replace(/\D/g, "").slice(0, 17))}
            placeholder="5–17 digits"
            error={
              account.length > 0 && !validAccount ? "5–17 digits required" : ""
            }
          />
        </div>
      </section>

      <Summary points={points} amount={amount} tooLow={points > balance} />

      <button
        type="submit"
        disabled={!canSubmit}
        className="inline-flex h-12 items-center rounded-md bg-accent-500 px-8 text-sm font-bold uppercase tracking-wide text-white hover:bg-accent-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Submit deposit
      </button>
    </form>
  );
}

function TextField({
  label,
  value,
  onChange,
  placeholder,
  error,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  error?: string;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs font-semibold uppercase tracking-widest text-ink-500">
        {label}
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`mt-1 w-full rounded-md border bg-white px-3 py-3 text-sm text-brand-900 outline-none focus:border-brand-500 ${
          error ? "border-red-400" : "border-ink-100"
        }`}
      />
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  );
}

function Summary({
  points,
  amount,
  tooLow,
}: {
  points: number;
  amount: number;
  tooLow: boolean;
}) {
  return (
    <div className="rounded-xl border border-ink-100 bg-ink-50 p-5">
      <div className="flex items-center justify-between">
        <div className="text-sm text-ink-500">You'll pay</div>
        <div className="text-xl font-bold text-brand-900">
          {num(points)} pts
        </div>
      </div>
      <div className="mt-1 flex items-center justify-between">
        <div className="text-sm text-ink-500">You'll receive</div>
        <div className="text-xl font-bold text-brand-900">{usd(amount)}</div>
      </div>
      {tooLow && (
        <div className="mt-3 rounded-md bg-red-50 px-3 py-2 text-xs text-red-700">
          Not enough points for this amount.
        </div>
      )}
    </div>
  );
}
