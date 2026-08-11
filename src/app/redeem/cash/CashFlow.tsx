"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CreditCard, Landmark, Mail } from "lucide-react";
import PageHeader from "@/components/redemption/PageHeader";
import BalanceCard from "@/components/redemption/BalanceCard";
import Confirmation from "@/components/redemption/Confirmation";
import { useRewards } from "@/lib/rewards-store";
import {
  clubToUsd,
  num,
  OWNER_EMAIL,
  OWNER_NAME,
  usd,
  usdToClub,
} from "@/lib/rewards";
import type { Activity } from "@/lib/rewards";

type Tab = "visa" | "deposit";

const VISA_MIN = 25;
const DEPOSIT_MIN = 50;

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
          tab === "visa" ? "Visa digital reward" : "Direct bank deposit"
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
  const [amount, setAmount] = useState<number | "">(100);
  const [email, setEmail] = useState(OWNER_EMAIL);

  const usdAmount = typeof amount === "number" ? amount : 0;
  const points = usdToClub(usdAmount);
  const belowMin = usdAmount > 0 && usdAmount < VISA_MIN;
  const overBalance = points > balance;
  const canSubmit =
    ready && usdAmount >= VISA_MIN && !overBalance && !!email.trim();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    const entry = redeem({
      kind: "visa",
      title: `Visa reward ${usd(usdAmount)}`,
      detail: `A ${usd(
        usdAmount
      )} virtual Visa card was sent to ${email}. It's usable anywhere Visa is accepted.`,
      pointsSpent: points,
      usdValue: usdAmount,
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
        <AmountInput
          value={amount}
          onChange={setAmount}
          min={VISA_MIN}
          balance={balance}
          helper={`Minimum ${usd(VISA_MIN)}. Your balance covers up to ${usd(
            clubToUsd(balance)
          )}.`}
          belowMin={belowMin}
          overBalance={overBalance}
        />
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

      <Summary points={points} amount={usdAmount} />

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
  const [amount, setAmount] = useState<number | "">(250);
  const [routing, setRouting] = useState("");
  const [account, setAccount] = useState("");
  const [name, setName] = useState(OWNER_NAME);

  const usdAmount = typeof amount === "number" ? amount : 0;
  const points = usdToClub(usdAmount);
  const belowMin = usdAmount > 0 && usdAmount < DEPOSIT_MIN;
  const overBalance = points > balance;

  const validRouting = /^\d{9}$/.test(routing);
  const validAccount = /^\d{5,17}$/.test(account);
  const canSubmit =
    ready &&
    usdAmount >= DEPOSIT_MIN &&
    !overBalance &&
    validRouting &&
    validAccount &&
    !!name.trim();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    const last4 = account.slice(-4);
    const entry = redeem({
      kind: "deposit",
      title: `Bank deposit ${usd(usdAmount)}`,
      detail: `A deposit of ${usd(
        usdAmount
      )} to the account ending in ${last4} for ${name} was submitted. Deposits typically settle in 3–5 business days.`,
      pointsSpent: points,
      usdValue: usdAmount,
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
        <AmountInput
          value={amount}
          onChange={setAmount}
          min={DEPOSIT_MIN}
          balance={balance}
          helper={`Minimum ${usd(DEPOSIT_MIN)}. Your balance covers up to ${usd(
            clubToUsd(balance)
          )}.`}
          belowMin={belowMin}
          overBalance={overBalance}
        />
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
            placeholder={OWNER_NAME}
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

      <Summary points={points} amount={usdAmount} />

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

function AmountInput({
  value,
  onChange,
  min,
  balance,
  helper,
  belowMin,
  overBalance,
}: {
  value: number | "";
  onChange: (v: number | "") => void;
  min: number;
  balance: number;
  helper: string;
  belowMin: boolean;
  overBalance: boolean;
}) {
  const points = typeof value === "number" ? usdToClub(value) : 0;
  const errored = belowMin || overBalance;

  function handleChange(raw: string) {
    if (raw === "") return onChange("");
    // Allow only digits and a single decimal point, keep two decimal places.
    const cleaned = raw.replace(/[^\d.]/g, "");
    const parts = cleaned.split(".");
    const normalized =
      parts.length > 1
        ? `${parts[0]}.${parts.slice(1).join("").slice(0, 2)}`
        : parts[0];
    const n = Number(normalized);
    if (Number.isNaN(n)) return;
    onChange(n);
  }

  return (
    <div className="mt-3">
      <div
        className={`flex items-center rounded-lg border-2 bg-white transition ${
          errored
            ? "border-red-400 focus-within:border-red-500"
            : "border-ink-100 focus-within:border-brand-700"
        }`}
      >
        <span className="pl-4 pr-1 text-2xl font-bold text-ink-500">$</span>
        <input
          type="text"
          inputMode="decimal"
          autoComplete="off"
          value={value === "" ? "" : String(value)}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="0.00"
          aria-label="Amount in US dollars"
          className="w-full bg-transparent py-3 pr-4 text-2xl font-bold text-brand-900 outline-none"
        />
        <div className="hidden sm:block border-l border-ink-100 px-4 py-2 text-right">
          <div className="text-[10px] font-bold uppercase tracking-widest text-ink-500">
            Points needed
          </div>
          <div className="text-sm font-bold text-brand-900">
            {num(points)} pts
          </div>
        </div>
      </div>
      <div className="sm:hidden mt-2 text-xs text-ink-500">
        <b className="text-brand-900">{num(points)}</b> Club Points needed
      </div>
      <p className="mt-2 text-xs text-ink-500">{helper}</p>
      {belowMin && (
        <p className="mt-2 text-xs font-semibold text-red-600">
          Enter at least {usd(min)}.
        </p>
      )}
      {overBalance && (
        <p className="mt-2 text-xs font-semibold text-red-600">
          That's more than your balance covers — max redeemable is{" "}
          {usd(clubToUsd(balance))}.
        </p>
      )}
    </div>
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

function Summary({ points, amount }: { points: number; amount: number }) {
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
    </div>
  );
}
