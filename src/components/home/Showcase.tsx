import Image from "next/image";
import Link from "next/link";

export default function Showcase() {
  return (
    <section className="container-page py-14 sm:py-20">
      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-900">
        A world of choice for every reward
      </h2>

      <div className="mt-10 overflow-hidden rounded-lg shadow-sm border border-ink-100">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=80"
            alt="Featured redemption category"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded text-sm font-bold text-brand-900">
            Holiday Inn Club Vacations
          </div>
        </div>
        <div className="bg-white p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-brand-900">
            Owner-exclusive experiences
          </h3>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-ink-700">
            Enhanced conversion rates, seasonal bonus points, and priority
            access to redemption offers — reserved just for owners.
          </p>
          <Link
            href="/benefits"
            className="mt-4 inline-flex items-center text-sm font-bold text-accent-500 hover:text-accent-400"
          >
            Explore <span aria-hidden className="ml-1">›</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
