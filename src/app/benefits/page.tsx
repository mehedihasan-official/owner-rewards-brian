import Link from "next/link";
import {
  Award,
  CheckCircle2,
  Coins,
  Gift,
  Headphones,
  Percent,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import PageHeader from "@/components/redemption/PageHeader";

export const metadata = { title: "Benefits · Owner Rewards" };

const perks = [
  { icon: Coins, title: "5:4 Point Conversion", desc: "Convert Club Points into IHG One Rewards at an enhanced owner rate." },
  { icon: Percent, title: "No Blackout Dates", desc: "Redeem your points any day of the year with no restrictions." },
  { icon: Gift, title: "Thousands of Gift Cards", desc: "Access to 500+ gift card partners across dining, retail, and travel." },
  { icon: ShieldCheck, title: "Free Cancellation", desc: "Change or cancel a redemption up to 24 hours before delivery." },
  { icon: Headphones, title: "Owner Concierge", desc: "Priority phone and live-chat support from a dedicated owner team." },
  { icon: Sparkles, title: "Exclusive Offers", desc: "Bonus redemptions and seasonal boosters reserved for owners." },
];

const tiers = [
  { name: "Standard", color: "bg-ink-100 text-brand-900" },
  { name: "Silver", color: "bg-slate-300 text-slate-900" },
  { name: "Gold", color: "bg-amber-300 text-amber-950" },
  { name: "Platinum", color: "bg-brand-900 text-white" },
];

const rows: { label: string; values: (boolean | string)[] }[] = [
  { label: "Base conversion rate", values: ["5:4", "5:4", "5:4.5", "5:5"] },
  { label: "Priority concierge", values: [false, true, true, true] },
  { label: "Bonus offer eligibility", values: [true, true, true, true] },
  { label: "Free maintenance credit", values: [false, false, true, true] },
  { label: "Annual reward multiplier", values: ["—", "1.1×", "1.25×", "1.5×"] },
  { label: "Complimentary Visa reward", values: [false, false, false, "$100 / yr"] },
];

export default function Page() {
  return (
    <>
      <PageHeader
        icon={Award}
        eyebrow="Benefits"
        title="Your ownership benefits"
        description="A closer look at what comes with your Holiday Inn Club Vacations ownership."
      />

      <section className="container-page py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {perks.map((p) => (
            <div
              key={p.title}
              className="rounded-lg border border-ink-100 bg-white p-6 shadow-sm"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-50 text-brand-700">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-brand-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-ink-700">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink-50 py-12 sm:py-16">
        <div className="container-page">
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-widest text-accent-500">
              Ownership tiers
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-brand-900">
              Compare tier benefits
            </h2>
            <p className="mt-2 text-ink-700 max-w-2xl mx-auto text-sm sm:text-base">
              Your tier is determined by your ownership level and annual point
              earnings. Enjoy more perks as you move up.
            </p>
          </div>

          <div className="mt-8 overflow-x-auto rounded-lg border border-ink-100 bg-white">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-ink-100">
                  <th className="p-4 text-left font-bold text-brand-900">
                    Benefit
                  </th>
                  {tiers.map((t) => (
                    <th key={t.name} className="p-4 text-center">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest ${t.color}`}
                      >
                        <Star className="h-3 w-3" />
                        {t.name}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-white" : "bg-ink-50/60"}
                  >
                    <td className="p-4 text-brand-900 font-semibold">
                      {row.label}
                    </td>
                    {row.values.map((v, j) => (
                      <td key={j} className="p-4 text-center">
                        {typeof v === "boolean" ? (
                          v ? (
                            <CheckCircle2 className="mx-auto h-5 w-5 text-emerald-600" />
                          ) : (
                            <X className="mx-auto h-5 w-5 text-ink-300" />
                          )
                        ) : (
                          <span className="text-sm font-semibold text-brand-900">
                            {v}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/help"
              className="inline-flex h-11 items-center rounded-md bg-accent-500 px-6 text-sm font-bold uppercase tracking-wide text-white hover:bg-accent-600"
            >
              Have questions?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
