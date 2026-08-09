import Link from "next/link";

const columns = [
  {
    title: "Top gift card brands",
    items: [
      "Amazon",
      "Walmart",
      "Target",
      "Best Buy",
      "Home Depot",
      "Macy's",
      "Starbucks",
    ],
  },
  {
    title: "Travel & experiences",
    items: [
      "Delta",
      "Southwest",
      "United",
      "Marriott",
      "Uber",
      "Airbnb",
      "Cruise lines",
    ],
  },
  {
    title: "Cash-back options",
    items: [
      "Visa digital reward",
      "Bank deposit",
      "Maintenance fee credit",
      "PayPal transfer",
      "Prepaid card",
      "Charity donation",
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
              <div className="flex items-center justify-between text-brand-900">
                <div className="text-sm font-bold">{col.title}</div>
                <span aria-hidden className="text-ink-500">
                  ›
                </span>
              </div>
              <ul className="mt-4 space-y-2">
                {col.items.map((it) => (
                  <li key={it}>
                    <Link
                      href="/gift-cards"
                      className="text-sm text-accent-500 hover:text-accent-400"
                    >
                      {it}
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
