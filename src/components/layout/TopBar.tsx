"use client";

import Link from "next/link";
import { Phone, MessageCircle, Globe, BedDouble, User } from "lucide-react";
import { useRewards } from "@/lib/rewards-store";
import { num } from "@/lib/rewards";

export default function TopBar() {
  const { balance } = useRewards();
  return (
    <div className="w-full bg-brand-900 text-white text-xs sm:text-sm">
      <div className="container-page flex h-10 items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <a
            href="tel:1-800-000-0000"
            className="hidden sm:inline-flex items-center gap-1.5 opacity-90 hover:opacity-100"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>1-800-000-0000</span>
          </a>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 opacity-90 hover:opacity-100"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Live Chat</span>
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 opacity-90 hover:opacity-100"
          >
            <Globe className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">English</span>
          </button>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/my-stays"
            className="inline-flex items-center gap-1.5 opacity-90 hover:opacity-100"
          >
            <BedDouble className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">My Stays</span>
          </Link>
          <Link
            href="/account"
            className="inline-flex items-center gap-1.5 opacity-90 hover:opacity-100"
          >
            <User className="h-3.5 w-3.5" />
            <span className="hidden md:inline">Hi, Owner · {num(balance)} pts</span>
            <span className="md:hidden">Account</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
