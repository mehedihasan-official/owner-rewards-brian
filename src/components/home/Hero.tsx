"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Search } from "lucide-react";

const rewardTypes = [
  "Maintenance credit",
  "Gift cards",
  "Visa digital reward",
  "Bank deposit",
];
const amounts = ["$25", "$50", "$100", "$250", "$500"];

export default function Hero() {
  const [reward, setReward] = useState(rewardTypes[0]);
  const [amount, setAmount] = useState(amounts[2]);

  return (
    <section className="relative">
      {/* Booking-widget row (IHG-style) */}
      <div className="bg-brand-900">
        <div className="container-page py-3 sm:py-4">
          <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_auto] gap-2 sm:gap-3">
            <Field label="I want to redeem">
              <select
                value={reward}
                onChange={(e) => setReward(e.target.value)}
                className="w-full appearance-none bg-transparent text-sm font-semibold text-brand-900 outline-none"
              >
                {rewardTypes.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </Field>
            <Field label="Value">
              <select
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full appearance-none bg-transparent text-sm font-semibold text-brand-900 outline-none"
              >
                {amounts.map((a) => (
                  <option key={a}>{a}</option>
                ))}
              </select>
            </Field>
            <Field label="Preference">
              <select
                defaultValue="Best value"
                className="w-full appearance-none bg-transparent text-sm font-semibold text-brand-900 outline-none"
              >
                <option>Best value</option>
                <option>Fastest delivery</option>
                <option>Owner-exclusive</option>
              </select>
            </Field>
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent-500 px-6 text-sm font-bold uppercase tracking-wide text-brand-900 hover:bg-accent-400"
            >
              <Search className="h-4 w-4" />
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative h-[420px] sm:h-[520px] lg:h-[580px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"
          alt="Ocean view resort"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />

        <div className="relative z-10 container-page h-full flex items-center">
          <div className="max-w-lg rounded-lg bg-white/95 backdrop-blur p-6 sm:p-8 shadow-xl">
            <div className="text-xs font-bold uppercase tracking-wider text-accent-500">
              Owner Rewards
            </div>
            <h1 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-900">
              125,000 points, endless choices.
            </h1>
            <p className="mt-3 text-sm sm:text-base text-ink-700">
              Turn your Club Points into maintenance credit, thousands of gift
              cards, a Visa digital reward, or a direct bank deposit.
            </p>
            <Link
              href="#offers"
              className="mt-5 inline-flex h-11 items-center rounded-md bg-accent-500 px-6 text-sm font-bold uppercase tracking-wide text-brand-900 hover:bg-accent-400"
            >
              Redeem now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="relative flex flex-col justify-center rounded-md bg-white px-3 py-2 min-h-12">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-500">
        {label}
      </span>
      <div className="flex items-center justify-between gap-2">
        {children}
        <ChevronDown className="h-4 w-4 text-ink-500 shrink-0" />
      </div>
    </label>
  );
}
