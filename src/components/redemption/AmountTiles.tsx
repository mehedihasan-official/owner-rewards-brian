"use client";

import { usd, usdToClub, num } from "@/lib/rewards";

type Props = {
  amounts: number[]; // USD amounts
  value: number;
  onChange: (v: number) => void;
};

export default function AmountTiles({ amounts, value, onChange }: Props) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3">
      {amounts.map((a) => {
        const active = a === value;
        return (
          <button
            key={a}
            type="button"
            onClick={() => onChange(a)}
            className={`rounded-lg border p-3 text-left transition ${
              active
                ? "border-brand-700 bg-brand-50 ring-2 ring-brand-700"
                : "border-ink-100 bg-white hover:border-brand-500"
            }`}
          >
            <div className="text-lg font-bold text-brand-900">{usd(a)}</div>
            <div className="mt-1 text-[11px] text-ink-500">
              {num(usdToClub(a))} pts
            </div>
          </button>
        );
      })}
    </div>
  );
}
