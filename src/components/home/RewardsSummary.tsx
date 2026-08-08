import { Coins, Gem, DollarSign } from "lucide-react";

const clubPoints = 125_000;
const ihgPoints = Math.floor((clubPoints * 4) / 5);
const availableValue = ihgPoints * 0.04;

const usd = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD" });

const cards = [
  {
    icon: Coins,
    label: "Club Points Balance",
    value: clubPoints.toLocaleString("en-US"),
    hint: "Available to convert",
  },
  {
    icon: Gem,
    label: "IHG One Rewards Points",
    value: ihgPoints.toLocaleString("en-US"),
    hint: "After 5:4 conversion",
  },
  {
    icon: DollarSign,
    label: "Available Value",
    value: usd(availableValue),
    hint: "At $0.04 per point",
  },
];

export default function RewardsSummary() {
  return (
    <section className="container-page -mt-10 sm:-mt-14 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-2xl border border-ink-100 bg-white p-4 sm:p-6 shadow-lg">
        {cards.map(({ icon: Icon, label, value, hint }) => (
          <div
            key={label}
            className="rounded-xl bg-ink-50 p-5"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-brand-700 text-white">
                <Icon className="h-5 w-5" />
              </span>
              <div className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                {label}
              </div>
            </div>
            <div className="mt-3 text-3xl font-bold text-brand-900">
              {value}
            </div>
            <div className="mt-1 text-xs text-ink-500">{hint}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
