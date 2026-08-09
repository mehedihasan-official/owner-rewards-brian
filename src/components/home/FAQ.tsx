"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is Owner Rewards?",
    a: "Owner Rewards is our redemption program that lets Holiday Inn Club Vacations owners convert Club Points into IHG One Rewards, then redeem them for maintenance credit, gift cards, Visa digital rewards, or a bank deposit.",
  },
  {
    q: "How do I earn and redeem Owner Rewards points?",
    a: "You earn points through your ownership and eligible spending. Redeem them any time from your dashboard using the redemption widget or from any category page.",
  },
  {
    q: "What is the conversion rate?",
    a: "Club Points convert to IHG One Rewards at a 5:4 rate — so 125,000 Club Points become 100,000 IHG points, worth approximately $4,000 at $0.04 per point.",
  },
  {
    q: "How long do redemptions take?",
    a: "Digital rewards (gift cards, Visa reward) are delivered instantly. Bank deposits typically settle within 3–5 business days. Maintenance credit is applied to your next invoice.",
  },
  {
    q: "Does Owner Rewards have a mobile app?",
    a: "Yes — download the app from the App Store or Google Play to track points, redeem on the go, and manage your account.",
  },
  {
    q: "How do I contact Owner Services?",
    a: "You can reach us by phone at 1-800-000-0000, via live chat in the top bar, or through our Contact page.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="container-page py-14 sm:py-20">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-900 text-center">
        Owner Rewards FAQs
      </h2>

      <div className="mt-8 max-w-3xl mx-auto divide-y divide-ink-100 border-y border-ink-100">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 py-4 sm:py-5 text-left"
              >
                <span className="text-sm sm:text-base font-semibold text-brand-900">
                  {f.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-ink-500 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="pb-5 text-sm text-ink-700">{f.a}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
