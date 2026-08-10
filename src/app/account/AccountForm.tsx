"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function AccountForm() {
  const [saved, setSaved] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "Jane",
    lastName: "Owner",
    email: "owner@example.com",
    phone: "555-000-1000",
    address: "123 Palm Drive",
    city: "Orlando",
    state: "FL",
    zip: "32801",
  });
  const [prefs, setPrefs] = useState({
    email: true,
    sms: false,
    offers: true,
    newsletter: true,
  });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <form onSubmit={submit} className="space-y-8">
      <section className="rounded-xl border border-ink-100 bg-white p-6 sm:p-8 shadow-sm">
        <h2 className="text-lg font-bold text-brand-900">Profile</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <TextField
            label="First name"
            value={profile.firstName}
            onChange={(v) => setProfile({ ...profile, firstName: v })}
          />
          <TextField
            label="Last name"
            value={profile.lastName}
            onChange={(v) => setProfile({ ...profile, lastName: v })}
          />
          <TextField
            label="Email"
            type="email"
            value={profile.email}
            onChange={(v) => setProfile({ ...profile, email: v })}
          />
          <TextField
            label="Phone"
            value={profile.phone}
            onChange={(v) => setProfile({ ...profile, phone: v })}
          />
          <TextField
            label="Street address"
            value={profile.address}
            onChange={(v) => setProfile({ ...profile, address: v })}
            className="sm:col-span-2"
          />
          <TextField
            label="City"
            value={profile.city}
            onChange={(v) => setProfile({ ...profile, city: v })}
          />
          <div className="grid grid-cols-2 gap-4">
            <TextField
              label="State"
              value={profile.state}
              onChange={(v) => setProfile({ ...profile, state: v })}
            />
            <TextField
              label="ZIP"
              value={profile.zip}
              onChange={(v) => setProfile({ ...profile, zip: v })}
            />
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-ink-100 bg-white p-6 sm:p-8 shadow-sm">
        <h2 className="text-lg font-bold text-brand-900">Communications</h2>
        <div className="mt-4 divide-y divide-ink-100">
          {[
            { key: "email", label: "Email notifications", desc: "Redemption receipts and account activity." },
            { key: "sms", label: "SMS alerts", desc: "Text updates for important account events." },
            { key: "offers", label: "Owner offers", desc: "Bonus point promotions and limited-time deals." },
            { key: "newsletter", label: "Monthly newsletter", desc: "News, tips, and travel inspiration." },
          ].map((p) => (
            <label
              key={p.key}
              className="flex items-start justify-between gap-4 py-3 cursor-pointer"
            >
              <div>
                <div className="text-sm font-semibold text-brand-900">
                  {p.label}
                </div>
                <div className="text-xs text-ink-500">{p.desc}</div>
              </div>
              <input
                type="checkbox"
                checked={prefs[p.key as keyof typeof prefs]}
                onChange={(e) =>
                  setPrefs({ ...prefs, [p.key]: e.target.checked })
                }
                className="mt-1 h-5 w-5 accent-brand-700"
              />
            </label>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="inline-flex h-12 items-center rounded-md bg-accent-500 px-8 text-sm font-bold uppercase tracking-wide text-white hover:bg-accent-600"
        >
          Save changes
        </button>
        {saved && (
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-700">
            <CheckCircle2 className="h-4 w-4" /> Saved
          </span>
        )}
      </div>
    </form>
  );
}

function TextField({
  label,
  value,
  onChange,
  type = "text",
  className = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs font-bold uppercase tracking-widest text-ink-500">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-md border border-ink-100 bg-white px-3 py-3 text-sm text-brand-900 outline-none focus:border-brand-500"
      />
    </label>
  );
}
