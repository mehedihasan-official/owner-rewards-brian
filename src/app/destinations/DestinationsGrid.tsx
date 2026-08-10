"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Search } from "lucide-react";
import { resorts, regions, type Region } from "@/lib/destinations";
import { num } from "@/lib/rewards";

export default function DestinationsGrid() {
  const [region, setRegion] = useState<Region | "All">("All");
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    let list = resorts.slice();
    if (region !== "All") list = list.filter((r) => r.region === region);
    if (q.trim()) {
      const s = q.trim().toLowerCase();
      list = list.filter(
        (r) =>
          r.name.toLowerCase().includes(s) ||
          r.location.toLowerCase().includes(s)
      );
    }
    return list;
  }, [region, q]);

  return (
    <div className="container-page py-10 sm:py-14">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-ink-500">
            Destinations
          </div>
          <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-brand-900">
            {results.length} resort{results.length === 1 ? "" : "s"} to explore
          </h2>
        </div>
        <label className="flex items-center rounded-md border border-ink-100 bg-white focus-within:border-brand-500 sm:w-72">
          <Search className="ml-3 h-4 w-4 text-ink-500" />
          <input
            type="search"
            placeholder="Search by resort or city…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="w-full bg-transparent px-3 py-3 text-sm text-brand-900 outline-none"
          />
        </label>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {(["All", ...regions] as const).map((r) => {
          const active = region === r;
          return (
            <button
              key={r}
              type="button"
              onClick={() => setRegion(r)}
              className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition ${
                active
                  ? "bg-brand-900 text-white"
                  : "bg-white text-ink-700 border border-ink-100 hover:border-brand-500"
              }`}
            >
              {r}
            </button>
          );
        })}
      </div>

      {results.length === 0 ? (
        <div className="mt-10 rounded-xl border border-dashed border-ink-100 bg-ink-50 p-10 text-center text-ink-500">
          No resorts match your search.
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {results.map((r) => (
            <article
              key={r.slug}
              className="group flex flex-col overflow-hidden rounded-lg border border-ink-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={r.image}
                  alt={r.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition group-hover:scale-105"
                />
                {r.tag && (
                  <span className="absolute left-3 top-3 rounded bg-accent-500 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    {r.tag}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-1 text-xs text-ink-500">
                  <MapPin className="h-3.5 w-3.5" />
                  {r.location}
                </div>
                <h3 className="mt-1 text-lg font-bold text-brand-900">
                  {r.name}
                </h3>
                <p className="mt-2 flex-1 text-sm text-ink-700">
                  {r.description}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-ink-100 pt-3">
                  <div className="text-xs text-ink-500">
                    <b className="text-brand-900">
                      From {num(r.pointsPerNight)}
                    </b>{" "}
                    pts/night
                  </div>
                  <Link
                    href="/book"
                    className="text-xs font-bold uppercase tracking-wider text-accent-500 hover:text-accent-600"
                  >
                    Book →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
