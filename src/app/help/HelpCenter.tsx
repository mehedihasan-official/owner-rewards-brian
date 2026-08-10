"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Search,
  Phone,
  MessageCircle,
  Mail,
} from "lucide-react";

type Category = "All" | "Points" | "Redemption" | "Account" | "Billing";

type Item = { q: string; a: string; category: Exclude<Category, "All"> };

const items: Item[] = [
  { category: "Points", q: "What is the conversion rate?", a: "Club Points convert to IHG One Rewards at a 5:4 rate. 125,000 Club Points become 100,000 IHG points, worth approximately $4,000 at $0.04 per point." },
  { category: "Points", q: "Do my points expire?", a: "Owner points do not expire as long as your ownership is active. Bonus points may have shorter expiration dates — check individual offers." },
  { category: "Points", q: "Can I combine points with a spouse or family member?", a: "Yes — linked ownership accounts can pool points. Contact Owner Services to link accounts." },
  { category: "Redemption", q: "How long do redemptions take?", a: "Digital rewards (gift cards, Visa reward) are delivered instantly. Bank deposits typically settle within 3–5 business days. Maintenance credit is applied to your next invoice." },
  { category: "Redemption", q: "Can I cancel a redemption?", a: "You can cancel a pending redemption within 24 hours of submission. Delivered eGifts and Visa rewards can't be reversed." },
  { category: "Redemption", q: "Is there a minimum redemption amount?", a: "Yes — minimum $10 for gift cards, $25 for Visa rewards, and $50 for bank deposits." },
  { category: "Account", q: "How do I update my profile?", a: "Go to Account from the top-right menu to update your name, email, address, and communication preferences." },
  { category: "Account", q: "How do I link my IHG One Rewards account?", a: "In your Account page, choose 'Linked accounts' and follow the IHG sign-in flow. Linking is required to receive converted IHG points." },
  { category: "Billing", q: "How does maintenance fee credit work?", a: "Redeem points for a credit that's applied automatically to your next annual maintenance invoice. Any unused credit rolls forward." },
  { category: "Billing", q: "How do I contact Owner Services?", a: "Reach us at 1-800-000-0000, via live chat from the top bar, or through the Contact page." },
];

const categories: Category[] = ["All", "Points", "Redemption", "Account", "Billing"];

const supportOptions = [
  {
    icon: Phone,
    title: "Call Owner Services",
    detail: "1-800-000-0000",
    hint: "Mon–Sun · 7am–11pm ET",
  },
  {
    icon: MessageCircle,
    title: "Live chat",
    detail: "Start a conversation",
    hint: "Typical wait: under 2 minutes",
  },
  {
    icon: Mail,
    title: "Email us",
    detail: "owner-services@example.com",
    hint: "Response within 24 hours",
  },
];

export default function HelpCenter() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<Category>("All");
  const [open, setOpen] = useState<number | null>(0);

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    return items.filter((it) => {
      if (cat !== "All" && it.category !== cat) return false;
      if (!s) return true;
      return (
        it.q.toLowerCase().includes(s) || it.a.toLowerCase().includes(s)
      );
    });
  }, [q, cat]);

  return (
    <div className="container-page py-10 sm:py-14">
      <label className="flex items-center rounded-md border border-ink-100 bg-white focus-within:border-brand-500">
        <Search className="ml-4 h-5 w-5 text-ink-500" />
        <input
          type="search"
          placeholder="Search help articles…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="w-full bg-transparent px-3 py-4 text-base text-brand-900 outline-none"
        />
      </label>

      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCat(c)}
            className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition ${
              cat === c
                ? "bg-brand-900 text-white"
                : "bg-white text-ink-700 border border-ink-100 hover:border-brand-500"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          {results.length === 0 ? (
            <div className="rounded-xl border border-dashed border-ink-100 bg-ink-50 p-10 text-center text-ink-500">
              No articles match your search.
            </div>
          ) : (
            <div className="divide-y divide-ink-100 border-y border-ink-100">
              {results.map((it, i) => {
                const isOpen = open === i;
                return (
                  <div key={it.q}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 py-4 sm:py-5 text-left"
                    >
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-accent-500">
                          {it.category}
                        </div>
                        <div className="mt-1 text-sm sm:text-base font-semibold text-brand-900">
                          {it.q}
                        </div>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-ink-500 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="pb-5 text-sm text-ink-700">{it.a}</div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-ink-500">
            Still need help?
          </div>
          {supportOptions.map((s) => (
            <div
              key={s.title}
              className="rounded-lg border border-ink-100 bg-white p-4"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-md bg-brand-50 text-brand-700">
                  <s.icon className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-sm font-bold text-brand-900">
                    {s.title}
                  </div>
                  <div className="text-xs text-ink-500">{s.detail}</div>
                </div>
              </div>
              <div className="mt-2 text-[11px] text-ink-500">{s.hint}</div>
            </div>
          ))}
          <Link
            href="/contact"
            className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-md bg-accent-500 px-6 text-sm font-bold uppercase tracking-wide text-white hover:bg-accent-600"
          >
            Contact us
          </Link>
        </aside>
      </div>
    </div>
  );
}
