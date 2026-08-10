"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BedDouble, CalendarDays, MapPin, Download } from "lucide-react";

type Stay = {
  id: string;
  resort: string;
  location: string;
  image: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  status: "Confirmed" | "Completed" | "Cancelled";
  pointsUsed: number;
};

const upcoming: Stay[] = [
  {
    id: "RES-8842",
    resort: "Orange Lake Resort",
    location: "Orlando, FL",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
    checkIn: "Sep 12, 2026",
    checkOut: "Sep 17, 2026",
    guests: 4,
    status: "Confirmed",
    pointsUsed: 160000,
  },
  {
    id: "RES-9021",
    resort: "Desert Club Resort",
    location: "Las Vegas, NV",
    image: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?auto=format&fit=crop&w=1200&q=80",
    checkIn: "Dec 3, 2026",
    checkOut: "Dec 6, 2026",
    guests: 2,
    status: "Confirmed",
    pointsUsed: 90000,
  },
];

const past: Stay[] = [
  {
    id: "RES-7112",
    resort: "Cape Canaveral Beach Resort",
    location: "Cape Canaveral, FL",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80",
    checkIn: "Mar 4, 2026",
    checkOut: "Mar 9, 2026",
    guests: 4,
    status: "Completed",
    pointsUsed: 120000,
  },
  {
    id: "RES-6540",
    resort: "Smoky Mountain Resort",
    location: "Gatlinburg, TN",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    checkIn: "Nov 18, 2025",
    checkOut: "Nov 22, 2025",
    guests: 3,
    status: "Completed",
    pointsUsed: 90000,
  },
];

export default function MyStays() {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const list = tab === "upcoming" ? upcoming : past;

  return (
    <div className="container-page py-10 sm:py-14">
      <div className="inline-flex rounded-md border border-ink-100 bg-white p-1">
        {(["upcoming", "past"] as const).map((t) => (
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
            {t === "upcoming" ? "Upcoming" : "Past stays"}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-ink-100 bg-ink-50 p-10 text-center">
          <BedDouble className="mx-auto h-8 w-8 text-ink-500" />
          <div className="mt-2 text-sm font-bold text-brand-900">
            No {tab} stays
          </div>
          <p className="mt-1 text-sm text-ink-500">
            Ready to plan your next getaway?
          </p>
          <Link
            href="/book"
            className="mt-4 inline-flex h-10 items-center rounded-md bg-accent-500 px-5 text-sm font-bold uppercase tracking-wide text-white hover:bg-accent-600"
          >
            Book a stay
          </Link>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {list.map((s) => (
            <article
              key={s.id}
              className="grid grid-cols-1 sm:grid-cols-[240px_1fr_auto] overflow-hidden rounded-lg border border-ink-100 bg-white shadow-sm"
            >
              <div className="relative aspect-[16/10] sm:aspect-auto sm:h-full min-h-[160px]">
                <Image
                  src={s.image}
                  alt={s.resort}
                  fill
                  sizes="(min-width: 640px) 240px, 100vw"
                  className="object-cover"
                />
                <span
                  className={`absolute left-3 top-3 rounded px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white ${
                    s.status === "Confirmed"
                      ? "bg-emerald-600"
                      : s.status === "Completed"
                      ? "bg-brand-700"
                      : "bg-red-600"
                  }`}
                >
                  {s.status}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-1 text-xs text-ink-500">
                  <MapPin className="h-3.5 w-3.5" /> {s.location}
                </div>
                <h3 className="mt-1 text-lg font-bold text-brand-900">
                  {s.resort}
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-700">
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="h-4 w-4 text-ink-500" />
                    {s.checkIn} → {s.checkOut}
                  </span>
                  <span>
                    {s.guests} {s.guests === 1 ? "guest" : "guests"}
                  </span>
                  <span className="font-mono text-xs text-ink-500">
                    {s.id}
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-6 border-t sm:border-t-0 sm:border-l border-ink-100 flex flex-col sm:text-right justify-between gap-3">
                <div>
                  <div className="text-xs text-ink-500">Points used</div>
                  <div className="text-xl font-bold text-brand-900">
                    {s.pointsUsed.toLocaleString("en-US")}
                  </div>
                </div>
                <button
                  type="button"
                  className="inline-flex h-10 items-center justify-center gap-1 rounded-md border border-ink-100 px-4 text-xs font-bold uppercase tracking-wider text-brand-900 hover:bg-ink-50"
                >
                  <Download className="h-3.5 w-3.5" /> Receipt
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
