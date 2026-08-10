import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const perks = [
  "Enhanced 5:4 conversion to IHG One Rewards",
  "No blackout dates on point redemptions",
  "Priority owner customer service",
  "Access to owner-only redemption offers",
  "Free maintenance credit applications",
];

export default function MemberBanner() {
  return (
    <section className="relative bg-brand-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=2000&q=80"
          alt="Ocean at sunset"
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/80 to-transparent" />
      </div>

      <div className="relative container-page py-16 sm:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="hidden md:block" />
        <div className="rounded-lg bg-brand-900/60 backdrop-blur border border-white/10 p-6 sm:p-8">
          <div className="text-xs font-bold uppercase tracking-widest text-accent-400">
            It's better to be an owner
          </div>
          <h3 className="mt-2 text-2xl sm:text-3xl font-bold">
            Ownership perks that pay you back
          </h3>
          <ul className="mt-5 space-y-3">
            {perks.map((p) => (
              <li
                key={p}
                className="flex items-start gap-2 text-sm text-white/90"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-400" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/benefits"
            className="mt-6 inline-flex h-11 items-center rounded-md bg-accent-500 px-6 text-sm font-bold uppercase tracking-wide text-white hover:bg-accent-600"
          >
            View benefits
          </Link>
        </div>
      </div>
    </section>
  );
}
