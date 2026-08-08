import Link from "next/link";
import { Sparkles } from "lucide-react";
import { footerLegal, mainNav } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ink-100 bg-brand-900 text-white">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-white/10">
              <Sparkles className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold">
                Holiday Inn Club Vacations
              </div>
              <div className="text-xs uppercase tracking-wider text-white/60">
                Owner Rewards Redemption Center
              </div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-white/70">
            Convert your Club Points into IHG One Rewards points and redeem
            them for maintenance credit, gift cards, Visa digital rewards, or a
            bank deposit — all in one place.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold text-white">Explore</div>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {mainNav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-white">Legal</div>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {footerLegal.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 py-5 text-xs text-white/60">
          <div>
            © {new Date().getFullYear()} Owner Rewards Redemption Center. All
            rights reserved.
          </div>
          <div>
            Simulated experience for demonstration purposes only — not a real
            financial product.
          </div>
        </div>
      </div>
    </footer>
  );
}
