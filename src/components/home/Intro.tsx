import Link from "next/link";

export default function Intro() {
  return (
    <section className="container-page py-14 sm:py-20 text-center">
      <div className="text-xs font-bold uppercase tracking-widest text-ink-500">
        Welcome to Owner Rewards
      </div>
      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900 leading-tight">
        4 reward categories.
        <br className="hidden sm:inline" /> Thousands of ways to redeem.
      </h2>
      <p className="mt-5 max-w-2xl mx-auto text-ink-700 text-base sm:text-lg">
        Redeem your Club Points for what matters most to you — pay down your
        maintenance fee, treat yourself with a gift card, or turn points into
        real cash with a Visa reward or bank deposit.
      </p>
      <Link
        href="#offers"
        className="mt-8 inline-flex h-12 items-center rounded-md bg-accent-500 px-8 text-sm font-bold uppercase tracking-wide text-white hover:bg-accent-600"
      >
        Explore now
      </Link>
    </section>
  );
}
