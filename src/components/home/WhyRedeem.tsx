import { ShieldCheck, Zap, Sparkles } from "lucide-react";

const items = [
  {
    icon: Zap,
    title: "Instant Redemption",
    desc: "See point values update live and receive simulated confirmation the moment you redeem.",
  },
  {
    icon: ShieldCheck,
    title: "Flexible & Secure",
    desc: "Choose the reward that fits your lifestyle — with clear steps and no surprises.",
  },
  {
    icon: Sparkles,
    title: "Owner-Exclusive Value",
    desc: "Enhanced conversion rates and thousands of gift card partners, curated for owners.",
  },
];

export default function WhyRedeem() {
  return (
    <section className="container-page mt-20 sm:mt-24">
      <div className="max-w-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-900">
          Why redeem with us?
        </h2>
        <p className="mt-2 text-ink-500">
          A single, streamlined experience for turning your ownership points
          into real value.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-xl border border-ink-100 bg-white p-6 shadow-sm"
          >
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-50 text-brand-700">
              <Icon className="h-5 w-5" />
            </span>
            <div className="mt-4 text-lg font-semibold text-brand-900">
              {title}
            </div>
            <p className="mt-2 text-sm text-ink-500">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
