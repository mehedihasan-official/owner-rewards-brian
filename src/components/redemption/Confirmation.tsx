import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import type { Activity } from "@/lib/rewards";
import { num, usd } from "@/lib/rewards";

type Props = {
  entry: Activity;
  primaryHref?: string;
  primaryLabel?: string;
};

export default function Confirmation({
  entry,
  primaryHref = "/",
  primaryLabel = "Back to home",
}: Props) {
  const dt = new Date(entry.date).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <div className="container-page py-10 sm:py-14">
      <div className="max-w-2xl mx-auto rounded-2xl border border-ink-100 bg-white shadow-sm overflow-hidden">
        <div className="bg-brand-900 text-white p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-accent-500 text-brand-900">
              <CheckCircle2 className="h-6 w-6" />
            </span>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/70">
                {entry.status === "Completed"
                  ? "Redemption confirmed"
                  : "Redemption submitted"}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">{entry.title}</h2>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <p className="text-sm text-ink-700">{entry.detail}</p>

          <dl className="mt-6 divide-y divide-ink-100 text-sm">
            <Row label="Confirmation number">
              <span className="font-mono text-brand-900">{entry.id}</span>
            </Row>
            <Row label="Date">{dt}</Row>
            <Row label="Points spent">
              <b className="text-brand-900">{num(entry.pointsSpent)}</b> Club
              Points
            </Row>
            <Row label="Reward value">
              <b className="text-brand-900">{usd(entry.usdValue)}</b>
            </Row>
            <Row label="Status">
              <span
                className={
                  entry.status === "Completed"
                    ? "text-emerald-600 font-semibold"
                    : "text-amber-600 font-semibold"
                }
              >
                {entry.status}
              </span>
            </Row>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={primaryHref}
              className="inline-flex h-11 items-center rounded-md bg-accent-500 px-6 text-sm font-bold uppercase tracking-wide text-brand-900 hover:bg-accent-400"
            >
              {primaryLabel}
            </Link>
            <Link
              href="/activity"
              className="inline-flex h-11 items-center rounded-md border border-ink-100 px-6 text-sm font-semibold text-brand-900 hover:bg-ink-50"
            >
              View activity
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <dt className="text-ink-500">{label}</dt>
      <dd className="text-right">{children}</dd>
    </div>
  );
}
