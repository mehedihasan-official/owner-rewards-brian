"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Tag } from "lucide-react";

type Category = "Redemption bonus" | "Travel" | "Retail" | "Dining";

type Offer = {
  slug: string;
  category: Category;
  eyebrow: string;
  title: string;
  desc: string;
  ends: string;
  image: string;
  href: string;
  cta: string;
};

const offers: Offer[] = [
  {
    slug: "bonus-25",
    category: "Redemption bonus",
    eyebrow: "Limited time",
    title: "25% bonus on maintenance fee redemptions",
    desc: "Apply points to your next maintenance fee and receive an extra 25% credit — no cap.",
    ends: "Ends Sep 30, 2026",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
    href: "/redeem/maintenance",
    cta: "Redeem now",
  },
  {
    slug: "double-gift",
    category: "Retail",
    eyebrow: "New this month",
    title: "Double points on Home Depot & Best Buy gift cards",
    desc: "Get twice the value when you redeem for select home & tech retailers.",
    ends: "Ends Aug 31, 2026",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1400&q=80",
    href: "/gift-cards?category=retail",
    cta: "Shop retail",
  },
  {
    slug: "delta-boost",
    category: "Travel",
    eyebrow: "Featured",
    title: "Boosted Delta Air Lines eGifts",
    desc: "Redeem for Delta gift cards at a discounted point rate — good for domestic and international.",
    ends: "Ends Oct 15, 2026",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80",
    href: "/gift-cards/delta",
    cta: "Redeem",
  },
  {
    slug: "dining-week",
    category: "Dining",
    eyebrow: "This week",
    title: "Dining week: 15% off select restaurant brands",
    desc: "DoorDash, Chipotle, Cheesecake Factory and more at a discounted rate.",
    ends: "Ends Aug 17, 2026",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80",
    href: "/gift-cards?category=dining",
    cta: "Redeem",
  },
  {
    slug: "visa-500",
    category: "Redemption bonus",
    eyebrow: "Flash offer",
    title: "Visa reward: extra $25 on $500 redemptions",
    desc: "Redeem a $500 Visa digital reward and we'll add another $25 on us.",
    ends: "Ends Aug 20, 2026",
    image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=1400&q=80",
    href: "/redeem/cash?tab=visa",
    cta: "Redeem Visa",
  },
  {
    slug: "airbnb-summer",
    category: "Travel",
    eyebrow: "Summer",
    title: "Airbnb summer boost",
    desc: "Redeem for Airbnb gift cards at 10% better value — plan your next stay for less.",
    ends: "Ends Sep 5, 2026",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1400&q=80",
    href: "/gift-cards/airbnb",
    cta: "Redeem",
  },
];

const cats: ("All" | Category)[] = [
  "All",
  "Redemption bonus",
  "Travel",
  "Retail",
  "Dining",
];

export default function OffersGrid() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");

  const results = useMemo(() => {
    if (cat === "All") return offers;
    return offers.filter((o) => o.category === cat);
  }, [cat]);

  return (
    <div className="container-page py-10 sm:py-14">
      <div className="flex flex-wrap gap-2">
        {cats.map((c) => {
          const active = cat === c;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition ${
                active
                  ? "bg-brand-900 text-white"
                  : "bg-white text-ink-700 border border-ink-100 hover:border-brand-500"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {results.map((o) => (
          <article
            key={o.slug}
            className="flex flex-col overflow-hidden rounded-lg border border-ink-100 bg-white shadow-sm"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={o.image}
                alt={o.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded bg-white/90 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-900">
                <Tag className="h-3 w-3" />
                {o.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="text-xs font-bold uppercase tracking-widest text-accent-500">
                {o.eyebrow}
              </div>
              <h3 className="mt-1 text-lg font-bold text-brand-900">
                {o.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-ink-700">{o.desc}</p>
              <div className="mt-4 flex items-center justify-between border-t border-ink-100 pt-3">
                <div className="flex items-center gap-1 text-xs text-ink-500">
                  <Clock className="h-3.5 w-3.5" />
                  {o.ends}
                </div>
                <Link
                  href={o.href}
                  className="text-xs font-bold uppercase tracking-wider text-accent-500 hover:text-accent-600"
                >
                  {o.cta} →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
