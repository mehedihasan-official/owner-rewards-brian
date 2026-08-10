"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { mainNav } from "@/lib/nav";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-ink-100 bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-brand-700 text-white">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[13px] font-semibold text-brand-900">
              Holiday Inn Club Vacations
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-ink-500">
              Owner Rewards · IHG One Rewards
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {mainNav.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-ink-700 hover:bg-brand-50 hover:text-brand-800"
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/book"
            className="hidden sm:inline-flex h-10 items-center rounded-md bg-accent-500 px-4 text-sm font-bold uppercase tracking-wide text-white shadow-sm hover:bg-accent-600"
          >
            Book Now
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink-100 text-ink-700 hover:bg-ink-50"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink-100 bg-white">
          <nav className="container-page flex flex-col py-2">
            {mainNav.map(({ label, href, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-md px-2 py-3 text-sm font-medium text-ink-700 hover:bg-brand-50 hover:text-brand-800"
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-md bg-accent-500 px-4 text-sm font-bold uppercase tracking-wide text-white"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
