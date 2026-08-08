import { Construction } from "lucide-react";

export default function ComingSoonNote() {
  return (
    <section id="redeem" className="container-page mt-20 sm:mt-24">
      <div className="rounded-2xl border border-dashed border-brand-200/60 bg-brand-50 p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-700 text-white">
            <Construction className="h-5 w-5" />
          </span>
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-brand-700">
              Preview build
            </div>
            <h3 className="mt-1 text-xl sm:text-2xl font-bold text-brand-900">
              Redemption flows land in the next step
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-ink-700">
              This is the foundation build — design system, layout, navigation
              and homepage structure. Interactive maintenance-fee redemption,
              the expanded gift card catalog with search/filter/sort, Visa &
              bank deposit flows, and confirmation states arrive in the
              upcoming steps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
