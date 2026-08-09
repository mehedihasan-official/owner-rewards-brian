import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHeader({
  icon: Icon,
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white">
      <div className="container-page py-10 sm:py-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/85">
          <Icon className="h-3.5 w-3.5" />
          {eyebrow}
        </span>
        <h1 className="mt-3 text-2xl sm:text-4xl font-bold tracking-tight">
          {title}
        </h1>
        <p className="mt-2 max-w-2xl text-sm sm:text-base text-white/80">
          {description}
        </p>
      </div>
    </section>
  );
}
