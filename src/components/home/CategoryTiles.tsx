import Link from "next/link";
import {
  Wrench,
  UtensilsCrossed,
  ShoppingBag,
  Store,
  Plane,
  CreditCard,
  Gift,
  ArrowRight,
} from "lucide-react";

const tiles = [
  {
    icon: Wrench,
    title: "Maintenance Credit",
    desc: "Apply points toward your annual maintenance fee.",
    href: "/redeem/maintenance",
    tint: "from-brand-700 to-brand-900",
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Dining",
    desc: "Gift cards for restaurants, coffee, and delivery.",
    href: "/gift-cards?category=dining",
    tint: "from-brand-600 to-brand-800",
  },
  {
    icon: ShoppingBag,
    title: "Online Shopping",
    desc: "Amazon, Walmart, Target and more.",
    href: "/gift-cards?category=online",
    tint: "from-brand-600 to-brand-800",
  },
  {
    icon: Store,
    title: "Retail Stores",
    desc: "Home Depot, Best Buy, Macy's, and top retailers.",
    href: "/gift-cards?category=retail",
    tint: "from-brand-600 to-brand-800",
  },
  {
    icon: Plane,
    title: "Travel",
    desc: "Airlines, hotels, cruises and ride-share.",
    href: "/gift-cards?category=travel",
    tint: "from-brand-600 to-brand-800",
  },
  {
    icon: CreditCard,
    title: "Visa & Bank Deposit",
    desc: "Digital Visa reward or direct deposit to your bank.",
    href: "/redeem/cash",
    tint: "from-brand-700 to-brand-900",
  },
  {
    icon: Gift,
    title: "All Gift Cards",
    desc: "Browse thousands of brand options.",
    href: "/gift-cards",
    tint: "from-brand-700 to-brand-900",
  },
];

export default function CategoryTiles() {
  return (
    <section className="container-page mt-16 sm:mt-20">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-900">
            Choose how to redeem
          </h2>
          <p className="mt-2 text-ink-500">
            Pick a category to see live point values and available options.
          </p>
        </div>
        <Link
          href="/gift-cards"
          className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-900"
        >
          Browse all <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {tiles.map(({ icon: Icon, title, desc, href, tint }) => (
          <Link
            key={title}
            href={href}
            className="group relative overflow-hidden rounded-xl border border-ink-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div
              className={`grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br ${tint} text-white`}
            >
              <Icon className="h-5 w-5" />
            </div>
            <div className="mt-4 text-base font-semibold text-brand-900">
              {title}
            </div>
            <p className="mt-1 text-sm text-ink-500">{desc}</p>
            <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
              Explore
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
