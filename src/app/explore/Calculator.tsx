"use client";

import { useState } from "react";
import { clubToIhg, clubToUsd, num, usd } from "@/lib/rewards";

export default function Calculator() {
  const [points, setPoints] = useState(50000);

  return (
    <div className="rounded-2xl border border-ink-100 bg-white p-6 sm:p-8 shadow-sm">
      <div className="text-xs font-bold uppercase tracking-widest text-accent-500">
        Points calculator
      </div>
      <h3 className="mt-1 text-xl sm:text-2xl font-bold text-brand-900">
        See what your points are worth
      </h3>

      <label className="mt-6 block">
        <span className="text-xs font-bold uppercase tracking-widest text-ink-500">
          Club Points
        </span>
        <input
          type="number"
          min={0}
          step={1000}
          value={points}
          onChange={(e) => setPoints(Math.max(0, Number(e.target.value) || 0))}
          className="mt-1 w-full rounded-md border border-ink-100 bg-white px-3 py-3 text-lg font-bold text-brand-900 outline-none focus:border-brand-500"
        />
        <input
          type="range"
          min={0}
          max={500000}
          step={5000}
          value={points}
          onChange={(e) => setPoints(Number(e.target.value))}
          className="mt-3 w-full accent-brand-700"
        />
      </label>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <Metric label="IHG points" value={num(clubToIhg(points))} />
        <Metric label="Approx. value" value={usd(clubToUsd(points))} accent />
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-lg bg-ink-50 p-4">
      <div className="text-[11px] font-bold uppercase tracking-widest text-ink-500">
        {label}
      </div>
      <div
        className={`mt-1 text-2xl font-bold ${
          accent ? "text-accent-500" : "text-brand-900"
        }`}
      >
        {value}
      </div>
    </div>
  );
}
