"use client";

import { useState } from "react";
import { CheckCircle2, Mail, Phone, MessageCircle } from "lucide-react";
import {
  OWNER_EMAIL,
  OWNER_NAME,
  SUPPORT_EMAIL,
  SUPPORT_PHONE_DISPLAY,
} from "@/lib/rewards";

const topics = [
  "Points & conversion",
  "Redemption help",
  "Maintenance fee",
  "Account or profile",
  "Booking a stay",
  "Something else",
];

export default function ContactForm() {
  const [done, setDone] = useState(false);
  const [state, setState] = useState({
    name: "",
    email: OWNER_EMAIL,
    topic: topics[0],
    message: "",
  });

  function set<K extends keyof typeof state>(k: K, v: (typeof state)[K]) {
    setState((s) => ({ ...s, [k]: v }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setDone(true);
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-ink-100 bg-white p-8 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-accent-500 text-white">
            <CheckCircle2 className="h-6 w-6" />
          </span>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-ink-500">
              Message received
            </div>
            <h2 className="text-2xl font-bold text-brand-900">
              Thanks — we'll be in touch.
            </h2>
          </div>
        </div>
        <p className="mt-4 text-sm text-ink-700">
          A member of Owner Services will reply to <b>{state.email}</b> within
          24 hours. Reference: <span className="font-mono">MSG-{Date.now().toString(36).toUpperCase()}</span>
        </p>
        <button
          type="button"
          onClick={() => {
            setDone(false);
            setState({
              name: "",
              email: OWNER_EMAIL,
              topic: topics[0],
              message: "",
            });
          }}
          className="mt-6 inline-flex h-11 items-center rounded-md border border-ink-100 px-6 text-sm font-semibold text-brand-900 hover:bg-ink-50"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-2xl border border-ink-100 bg-white p-6 sm:p-8 shadow-sm space-y-5"
    >
      <div>
        <div className="text-xs font-bold uppercase tracking-widest text-ink-500">
          Send a message
        </div>
        <h2 className="mt-1 text-xl sm:text-2xl font-bold text-brand-900">
          Contact Owner Services
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name">
          <input
            required
            value={state.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder={OWNER_NAME}
            className="w-full bg-transparent px-3 py-3 text-sm text-brand-900 outline-none"
          />
        </Field>
        <Field label="Email">
          <input
            required
            type="email"
            value={state.email}
            onChange={(e) => set("email", e.target.value)}
            className="w-full bg-transparent px-3 py-3 text-sm text-brand-900 outline-none"
          />
        </Field>
      </div>

      <Field label="Topic">
        <select
          value={state.topic}
          onChange={(e) => set("topic", e.target.value)}
          className="w-full appearance-none bg-transparent px-3 py-3 text-sm font-semibold text-brand-900 outline-none"
        >
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </Field>

      <Field label="Message">
        <textarea
          required
          rows={5}
          value={state.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="How can we help?"
          className="w-full bg-transparent px-3 py-3 text-sm text-brand-900 outline-none resize-y"
        />
      </Field>

      <button
        type="submit"
        className="inline-flex h-12 items-center rounded-md bg-accent-500 px-8 text-sm font-bold uppercase tracking-wide text-white hover:bg-accent-600"
      >
        Send message
      </button>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-widest text-ink-500">
        {label}
      </span>
      <div className="mt-1 rounded-md border border-ink-100 bg-white focus-within:border-brand-500">
        {children}
      </div>
    </label>
  );
}

export function ContactSidebar() {
  const items = [
    {
      icon: Phone,
      title: "Owner Services",
      value: SUPPORT_PHONE_DISPLAY,
      hint: "Mon–Sun · 7am–11pm ET",
    },
    {
      icon: MessageCircle,
      title: "Live chat",
      value: "Available now",
      hint: "Typical wait: under 2 min",
    },
    {
      icon: Mail,
      title: "Email",
      value: SUPPORT_EMAIL,
      hint: "Reply within 24 hours",
    },
  ];
  return (
    <aside className="space-y-3">
      <div className="text-xs font-bold uppercase tracking-widest text-ink-500">
        Reach us directly
      </div>
      {items.map((i) => (
        <div
          key={i.title}
          className="rounded-lg border border-ink-100 bg-white p-4"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-brand-50 text-brand-700">
              <i.icon className="h-4 w-4" />
            </span>
            <div>
              <div className="text-sm font-bold text-brand-900">{i.title}</div>
              <div className="text-xs text-ink-700">{i.value}</div>
            </div>
          </div>
          <div className="mt-2 text-[11px] text-ink-500">{i.hint}</div>
        </div>
      ))}
    </aside>
  );
}
