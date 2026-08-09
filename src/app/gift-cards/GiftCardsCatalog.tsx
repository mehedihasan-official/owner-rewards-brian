"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, SlidersHorizontal } from "lucide-react";
import { giftCards, categoryLabels, type GiftCardCategory } from "@/lib/gift-cards";
import { num, usdToClub } from "@/lib/rewards";

type Sort = "featured" | "az" | "za" | "value-asc" | "value-desc";

const categories: (GiftCardCategory | "all")[] = [
  "all",
  "dining",
  "online",
  "retail",
  "travel",
  "entertainment",
];

export default function GiftCardsCatalog() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<GiftCardCategory | "all">("all");
  const [sort, setSort] = useState<Sort>("featured");

  const results = useMemo(() => {
    let list = giftCards.slice();
    if (cat !== "all") list = list.filter((c) => c.category === cat);
    if (q.trim()) {
      const s = q.trim().toLowerCase();
      list = list.filter((c) => c.brand.toLowerCase().includes(s));
    }
    switch (sort) {
      case "az":
        list.sort((a, b) => a.brand.localeCompare(b.brand));
        break;
      case "za":
        list.sort((a, b) => b.brand.localeCompare(a.brand));
        break;
      case "value-asc":
        list.sort((a, b) => a.amounts[0] - b.amounts[0]);
        break;
      case "value-desc":
        list.sort(
          (a, b) =>
            b.amounts[b.amounts.length - 1] - a.amounts[a.amounts.length - 1]
        );
        break;
    }
    return list;
  }, [q, cat, sort]);

  return (
    <div className="container-page py-10 sm:py-14">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-ink-500">
            Gift Cards
          </div>
          <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-brand-900">
            Browse the catalog
          </h2>
        </div>
        <div className="text-sm text-ink-500">
          Showing <b className="text-brand-900">{results.length}</b> of{" "}
          {giftCards.length} brands
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto_auto]">
        <label className="flex items-center rounded-md border border-ink-100 bg-white focus-within:border-brand-500">
          <Search className="ml-3 h-4 w-4 text-ink-500" />
          <input
            type="search"
            placeholder="Search brands…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="w-full bg-transparent px-3 py-3 text-sm text-brand-900 outline-none"
          />
        </label>

        <label className="flex items-center gap-2 rounded-md border border-ink-100 bg-white px-3">
          <SlidersHorizontal className="h-4 w-4 text-ink-500" />
          <select
            value={cat}
            onChange={(e) => setCat(e.target.value as typeof cat)}
            className="bg-transparent py-3 text-sm font-semibold text-brand-900 outline-none"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c === "all" ? "All categories" : categoryLabels[c]}
              </option>
            ))}
          </select>
        </label>

        <label className="flex items-center gap-2 rounded-md border border-ink-100 bg-white px-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-ink-500">
            Sort
          </span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="bg-transparent py-3 text-sm font-semibold text-brand-900 outline-none"
          >
            <option value="featured">Featured</option>
            <option value="az">Name A–Z</option>
            <option value="za">Name Z–A</option>
            <option value="value-asc">Lowest value</option>
            <option value="value-desc">Highest value</option>
          </select>
        </label>
      </div>

      {results.length === 0 ? (
        <div className="mt-10 rounded-xl border border-dashed border-ink-100 bg-ink-50 p-10 text-center text-ink-500">
          No brands match your search.
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {results.map((c) => {
            const min = c.amounts[0];
            const max = c.amounts[c.amounts.length - 1];
            return (
              <Link
                key={c.slug}
                href={`/gift-cards/${c.slug}`}
                className="group overflow-hidden rounded-lg border border-ink-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div
                  className={`aspect-[16/10] w-full bg-gradient-to-br ${c.color} flex items-center justify-center p-4`}
                >
                  <div className="text-white text-lg sm:text-xl font-bold text-center drop-shadow">
                    {c.brand}
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <div className="text-xs font-semibold uppercase tracking-widest text-ink-500">
                    {categoryLabels[c.category]} · {c.format}
                  </div>
                  <div className="mt-1 text-sm font-bold text-brand-900">
                    ${min} – ${max}
                  </div>
                  <div className="text-[11px] text-ink-500">
                    from {num(usdToClub(min))} pts
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
