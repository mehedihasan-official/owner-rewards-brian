import Image from "next/image";
import Link from "next/link";
import { Compass, Sparkles } from "lucide-react";
import PageHeader from "@/components/redemption/PageHeader";
import Calculator from "./Calculator";

export const metadata = { title: "Explore · Owner Rewards" };

const ideas = [
  {
    tag: "Family",
    title: "Plan a 5-night Orlando escape",
    desc: "Book Orange Lake Resort with points and cover meals with dining eGifts.",
    image: "https://images.unsplash.com/photo-1580654712603-eb43273aff33?auto=format&fit=crop&w=1200&q=80",
    href: "/destinations",
  },
  {
    tag: "Getaway",
    title: "Weekend in Vegas",
    desc: "Redeem Desert Club Resort + a Visa reward for the ultimate weekend.",
    image: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?auto=format&fit=crop&w=1200&q=80",
    href: "/destinations",
  },
  {
    tag: "Everyday",
    title: "Turn points into weekly essentials",
    desc: "Cover grocery runs with Amazon, Walmart or Target eGifts.",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1200&q=80",
    href: "/gift-cards?category=retail",
  },
  {
    tag: "Smart move",
    title: "Cover your annual maintenance fee",
    desc: "Apply points as a credit toward your next invoice — worry-free.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    href: "/redeem/maintenance",
  },
];

export default function Page() {
  return (
    <>
      <PageHeader
        icon={Compass}
        eyebrow="Explore"
        title="Ideas for using your points"
        description="Discover new ways to spend your Owner Rewards — from getaways to everyday essentials."
      />

      <section className="container-page py-12 sm:py-16 grid gap-8 lg:grid-cols-[1fr_360px]">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent-500">
            <Sparkles className="h-4 w-4" /> Inspiration
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-brand-900">
            Popular ways to redeem
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {ideas.map((i) => (
              <Link
                key={i.title}
                href={i.href}
                className="group flex flex-col overflow-hidden rounded-lg border border-ink-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={i.image}
                    alt={i.title}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded bg-white/90 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-900">
                    {i.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-brand-900">
                    {i.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-700">{i.desc}</p>
                  <div className="mt-3 text-xs font-bold uppercase tracking-wider text-accent-500 group-hover:text-accent-600">
                    Explore →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <Calculator />
        </aside>
      </section>
    </>
  );
}
