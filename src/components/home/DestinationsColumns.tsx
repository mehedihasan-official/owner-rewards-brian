import Link from "next/link";

type Item = { label: string; href: string };

const columns: { title: string; href: string; items: Item[] }[] = [
  {
    title: "Top gift card brands",
    href: "/gift-cards",
    items: [
      { label: "Amazon", href: "/gift-cards/amazon" },
      { label: "Walmart", href: "/gift-cards/walmart" },
      { label: "Target", href: "/gift-cards/target" },
      { label: "Best Buy", href: "/gift-cards/best-buy" },
      { label: "Home Depot", href: "/gift-cards/home-depot" },
      { label: "Macy's", href: "/gift-cards/macys" },
      { label: "Starbucks", href: "/gift-cards/starbucks" },
    ],
  },
  {
    title: "Travel & experiences",
    href: "/destinations",
    items: [
      { label: "Delta", href: "/gift-cards/delta" },
      { label: "Southwest", href: "/gift-cards/southwest" },
      { label: "United", href: "/gift-cards/united" },
      { label: "Marriott", href: "/gift-cards/marriott" },
      { label: "Uber", href: "/gift-cards/uber" },
      { label: "Airbnb", href: "/gift-cards/airbnb" },
      { label: "Explore destinations", href: "/destinations" },
    ],
  },
  {
    title: "Cash-back options",
    href: "/redeem/cash",
    items: [
      { label: "Visa digital reward", href: "/redeem/cash?tab=visa" },
      { label: "Bank deposit", href: "/redeem/cash?tab=deposit" },
      { label: "Maintenance fee credit", href: "/redeem/maintenance" },
    ],
  },
];

export default function DestinationsColumns() {
  return (
    <section className="bg-ink-50 py-14 sm:py-20">
      <div className="container-page">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-900">
            Wherever you want to redeem, we've got you
          </h2>
          <p className="mt-3 text-ink-700 max-w-2xl mx-auto">
            Explore the full catalog by category — from everyday essentials to
            once-in-a-lifetime experiences.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {columns.map((col) => (
            <div
              key={col.title}
              className="rounded-lg bg-white p-6 border border-ink-100"
            >
              <Link
                href={col.href}
                className="flex items-center justify-between text-brand-900 hover:text-brand-700"
              >
                <div className="text-sm font-bold">{col.title}</div>
                <span aria-hidden className="text-ink-500">
                  ›
                </span>
              </Link>
              <ul className="mt-4 space-y-2">
                {col.items.map((it) => (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      className="text-sm text-accent-500 hover:text-accent-400"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
