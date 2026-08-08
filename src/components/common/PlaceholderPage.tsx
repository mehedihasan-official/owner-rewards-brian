import Link from "next/link";
import { ArrowRight, Clock, type LucideIcon } from "lucide-react";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  bullets?: string[];
};

export default function PlaceholderPage({
  eyebrow,
  title,
  description,
  icon: Icon,
  bullets = [],
}: Props) {
  return (
    <div>
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white">
        <div className="container-page py-14 sm:py-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/80">
            <Icon className="h-3.5 w-3.5" />
            {eyebrow}
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">{description}</p>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 rounded-2xl border border-ink-100 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-brand-50 text-brand-700">
                <Clock className="h-5 w-5" />
              </span>
              <div className="text-sm font-semibold uppercase tracking-wider text-brand-700">
                Coming in the next step
              </div>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-brand-900">
              This section is under construction
            </h2>
            <p className="mt-2 text-ink-500">
              This page is intentionally a placeholder in the current preview
              build. The full experience for this section is scheduled for an
              upcoming step of the project.
            </p>
            {bullets.length > 0 && (
              <ul className="mt-6 space-y-2 text-sm text-ink-700">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-700" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-md bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-800"
              >
                Back to home <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <aside className="rounded-2xl border border-ink-100 bg-ink-50 p-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-500">
              Need help?
            </div>
            <div className="mt-2 text-lg font-semibold text-brand-900">
              We're here for you
            </div>
            <p className="mt-2 text-sm text-ink-700">
              Reach out to Owner Services any time — via phone, live chat, or
              our contact page.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-900"
            >
              Contact us <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </section>
    </div>
  );
}
