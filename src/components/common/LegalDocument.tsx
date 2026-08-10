import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import PageHeader from "@/components/redemption/PageHeader";

export type Section = { id: string; title: string; body: string };

type Props = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated: string;
  sections: Section[];
};

export default function LegalDocument({
  icon,
  eyebrow,
  title,
  description,
  lastUpdated,
  sections,
}: Props) {
  return (
    <>
      <PageHeader
        icon={icon}
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <div className="container-page py-10 sm:py-14 grid gap-8 lg:grid-cols-[240px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="text-xs font-bold uppercase tracking-widest text-ink-500">
            On this page
          </div>
          <nav className="mt-2 flex flex-col gap-1">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-sm text-ink-700 hover:text-accent-500"
              >
                {s.title}
              </a>
            ))}
          </nav>
          <div className="mt-6 text-xs text-ink-500">
            Last updated: {lastUpdated}
          </div>
        </aside>

        <div className="prose-legal max-w-none">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-24 border-b border-ink-100 pb-6 mb-6 last:border-0">
              <h2 className="text-xl font-bold text-brand-900">{s.title}</h2>
              <p className="mt-3 text-sm text-ink-700 whitespace-pre-line leading-relaxed">
                {s.body}
              </p>
            </section>
          ))}

          <div className="mt-8 rounded-lg border border-ink-100 bg-ink-50 p-5 text-sm text-ink-700">
            Questions about this document?{" "}
            <Link href="/contact" className="font-semibold text-accent-500 hover:text-accent-600">
              Contact Owner Services
            </Link>
            .
          </div>
        </div>
      </div>
    </>
  );
}
