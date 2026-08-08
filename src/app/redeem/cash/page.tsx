import PlaceholderPage from "@/components/common/PlaceholderPage";
import { CreditCard } from "lucide-react";

export const metadata = { title: "Visa & Bank Deposit · Owner Rewards" };

export default function Page() {
  return (
    <PlaceholderPage
      icon={CreditCard}
      eyebrow="Redeem · Visa & Bank Deposit"
      title="Visa digital reward or bank deposit"
      description="Simulated Visa reward and bank deposit flows — final confirmation screens land in the next step."
      bullets={[
        "Visa digital reward amount selector",
        "Bank deposit form (simulated verification)",
        "Confirmation and receipt state",
      ]}
    />
  );
}
