import Image from "next/image";
import Link from "next/link";

const offers = [
  {
    tag: "Maintenance",
    title: "Cover your fee",
    desc: "Apply points as a direct credit toward your annual maintenance invoice.",
    href: "/redeem/maintenance",
    cta: "Learn more",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    tag: "Gift Cards",
    title: "Redeem with rewards",
    desc: "Choose from thousands of brands — dining, shopping, retail, and travel.",
    href: "/gift-cards",
    cta: "Discover more",
    img: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    tag: "Cash Rewards",
    title: "Ready to cash in?",
    desc: "Turn your points into a Visa digital reward or a direct deposit to your bank.",
    href: "/redeem/cash",
    cta: "Learn more",
    img: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function OffersRow() {
  return (
    <section id="offers" className="bg-ink-50 py-14 sm:py-20">
      <div className="container-page">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-900">
          Offers for every way you redeem
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((o) => (
            <article
              key={o.title}
              className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm border border-ink-100"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={o.img}
                  alt={o.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="text-xs font-bold uppercase tracking-widest text-accent-500">
                  {o.tag}
                </div>
                <h3 className="mt-2 text-xl font-bold text-brand-900">
                  {o.title}
                </h3>
                <p className="mt-2 text-sm text-ink-700 flex-1">{o.desc}</p>
                <Link
                  href={o.href}
                  className="mt-4 inline-flex items-center text-sm font-bold text-accent-500 hover:text-accent-400"
                >
                  {o.cta} <span aria-hidden className="ml-1">›</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/offers"
            className="inline-flex h-11 items-center rounded-md bg-accent-500 px-8 text-sm font-bold uppercase tracking-wide text-white hover:bg-accent-600"
          >
            View all offers
          </Link>
        </div>
      </div>
    </section>
  );
}
