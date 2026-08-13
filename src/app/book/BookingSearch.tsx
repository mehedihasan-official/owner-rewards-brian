"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { CalendarCheck, CheckCircle2, MapPin, Search, Users } from "lucide-react";
import { resorts } from "@/lib/destinations";
import { num } from "@/lib/rewards";

export default function BookingSearch() {
  const [dest, setDest] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [searched, setSearched] = useState(false);
  const [requested, setRequested] = useState<Set<string>>(new Set());

  const results = useMemo(() => {
    if (!searched) return [];
    if (!dest.trim()) return resorts.slice(0, 6);
    const s = dest.trim().toLowerCase();
    return resorts.filter(
      (r) =>
        r.name.toLowerCase().includes(s) ||
        r.location.toLowerCase().includes(s) ||
        r.region.toLowerCase().includes(s)
    );
  }, [dest, searched]);

  return (
    <>
      {/* Search widget row */}
      <div className="bg-brand-900">
        <div className="container-page py-4 sm:py-5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSearched(true);
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_auto_auto] gap-2 sm:gap-3"
          >
            <Field label="Destination">
              <MapPin className="h-4 w-4 text-ink-500" />
              <input
                value={dest}
                onChange={(e) => setDest(e.target.value)}
                placeholder="City, resort or region"
                className="w-full bg-transparent text-sm font-semibold text-brand-900 outline-none placeholder:text-ink-500"
              />
            </Field>
            <Field label="Check in">
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-brand-900 outline-none"
              />
            </Field>
            <Field label="Check out">
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-brand-900 outline-none"
              />
            </Field>
            <Field label="Guests">
              <Users className="h-4 w-4 text-ink-500" />
              <input
                type="number"
                min={1}
                max={12}
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value) || 1)}
                className="w-16 bg-transparent text-sm font-semibold text-brand-900 outline-none"
              />
            </Field>
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent-500 px-6 text-sm font-bold uppercase tracking-wide text-white hover:bg-accent-600"
            >
              <Search className="h-4 w-4" />
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="container-page py-10 sm:py-14">
        {!searched ? (
          <div className="rounded-2xl border border-dashed border-ink-100 bg-ink-50 p-10 text-center">
            <CalendarCheck className="mx-auto h-8 w-8 text-brand-700" />
            <div className="mt-2 text-lg font-bold text-brand-900">
              Search for your next stay
            </div>
            <p className="mt-1 text-sm text-ink-500 max-w-md mx-auto">
              Enter a destination and dates above to see available resorts.
            </p>
          </div>
        ) : results.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-ink-100 bg-ink-50 p-10 text-center text-ink-500">
            No resorts match — try a different city or region.
          </div>
        ) : (
          <>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-900">
              {results.length} available{" "}
              {results.length === 1 ? "resort" : "resorts"}
              {checkIn && checkOut && (
                <span className="ml-2 text-sm font-normal text-ink-500">
                  {checkIn} → {checkOut} · {guests}{" "}
                  {guests === 1 ? "guest" : "guests"}
                </span>
              )}
            </h2>
            <div className="mt-6 space-y-4">
              {results.map((r) => (
                <article
                  key={r.slug}
                  className="grid grid-cols-1 sm:grid-cols-[240px_1fr_auto] overflow-hidden rounded-lg border border-ink-100 bg-white shadow-sm"
                >
                  <div className="relative aspect-[16/10] sm:aspect-auto sm:h-full min-h-[160px]">
                    <Image
                      src={r.image}
                      alt={r.name}
                      fill
                      sizes="(min-width: 640px) 240px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-1 text-xs text-ink-500">
                      <MapPin className="h-3.5 w-3.5" /> {r.location}
                    </div>
                    <h3 className="mt-1 text-lg font-bold text-brand-900">
                      {r.name}
                    </h3>
                    <p className="mt-1 text-sm text-ink-700">
                      {r.description}
                    </p>
                  </div>
                  <div className="p-5 sm:p-6 sm:text-right border-t sm:border-t-0 sm:border-l border-ink-100 flex flex-col justify-between gap-3">
                    <div>
                      <div className="text-xs text-ink-500">Starting at</div>
                      <div className="text-xl font-bold text-brand-900">
                        {num(r.pointsPerNight)}
                      </div>
                      <div className="text-xs text-ink-500">pts / night</div>
                    </div>
                    {requested.has(r.slug) ? (
                      <div className="inline-flex h-11 items-center justify-center gap-1 rounded-md bg-emerald-50 px-4 text-xs font-bold uppercase tracking-wide text-emerald-700">
                        <CheckCircle2 className="h-4 w-4" /> Requested
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() =>
                          setRequested(
                            (prev) => new Set([...prev, r.slug])
                          )
                        }
                        className="inline-flex h-11 items-center justify-center rounded-md bg-accent-500 px-5 text-xs font-bold uppercase tracking-wide text-white hover:bg-accent-600"
                      >
                        Select
                      </button>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </>
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
    <label className="flex flex-col justify-center rounded-md bg-white px-3 py-2 min-h-12">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-500">
        {label}
      </span>
      <div className="flex items-center gap-2">{children}</div>
    </label>
  );
}
