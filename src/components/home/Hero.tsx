import { ArrowRightLeft, Gift, PartyPopper, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: ArrowRightLeft,
    title: "Convert",
    desc: "Turn Club Points into IHG One Rewards at a 5:4 rate.",
  },
  {
    icon: Gift,
    title: "Redeem",
    desc: "Choose maintenance credit, gift cards, Visa, or bank deposit.",
  },
  {
    icon: PartyPopper,
    title: "Enjoy",
    desc: "Get your reward instantly — simulated confirmation on redeem.",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white">
      <div className="container-page py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/80">
            Owner Rewards
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Your Points. <span className="text-accent-400">Your Choice.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base sm:text-lg text-white/80">
            Redeem your Club Points for maintenance fee credit, thousands of
            gift cards, a Visa digital reward, or a direct bank deposit — all
            through a single, simple experience.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#redeem"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-accent-500 px-5 text-sm font-semibold text-brand-900 shadow-sm hover:bg-accent-400"
            >
              Start Redeeming <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/benefits"
              className="inline-flex h-11 items-center rounded-md border border-white/20 bg-white/5 px-5 text-sm font-semibold text-white hover:bg-white/10"
            >
              View Benefits
            </Link>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-md bg-white/10 text-accent-400">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="text-xs font-semibold uppercase tracking-wider text-white/60">
                  Step {i + 1}
                </div>
              </div>
              <div className="mt-3 text-lg font-semibold">{title}</div>
              <p className="mt-1 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
