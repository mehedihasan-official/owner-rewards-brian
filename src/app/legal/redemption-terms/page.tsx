import { ScrollText } from "lucide-react";
import LegalDocument from "@/components/common/LegalDocument";

export const metadata = { title: "Redemption Terms · Owner Rewards" };

export default function Page() {
  return (
    <LegalDocument
      icon={ScrollText}
      eyebrow="Legal"
      title="Redemption Terms"
      description="Terms governing point redemption across Owner Rewards categories."
      lastUpdated="August 1, 2026"
      sections={[
        {
          id: "rates",
          title: "1. Conversion and value",
          body: "Club Points convert to IHG One Rewards at a 5:4 rate. IHG points are valued at approximately $0.04 for redemption purposes. Rates may be adjusted with 30 days' notice.",
        },
        {
          id: "delivery",
          title: "2. Delivery timelines",
          body: "eGift cards and Visa digital rewards are delivered by email within minutes of confirmation. Bank deposits typically settle within 3–5 business days. Maintenance credits are applied to your next invoice.",
        },
        {
          id: "minimums",
          title: "3. Minimum redemption amounts",
          body: "Gift cards: minimum $10. Visa digital reward: minimum $25. Bank deposit: minimum $50. Maintenance credit: no minimum, subject to point tier availability.",
        },
        {
          id: "cancellations",
          title: "4. Cancellations and reversals",
          body: "You may cancel a pending redemption within 24 hours of submission. Delivered eGifts and Visa rewards cannot be reversed. Bank deposits may be recalled only if not yet settled at your financial institution.",
        },
        {
          id: "expiration",
          title: "5. Reward expiration",
          body: "Delivered gift cards and Visa rewards are subject to the terms of the issuing merchant or card network. Owner Rewards is not responsible for merchant expiration policies.",
        },
        {
          id: "limits",
          title: "6. Redemption limits",
          body: "Individual redemptions may be capped based on your point balance and ownership tier. Certain promotional offers may have per-owner limits or blackout periods.",
        },
      ]}
    />
  );
}
