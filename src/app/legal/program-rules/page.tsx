import { BookOpenCheck } from "lucide-react";
import LegalDocument from "@/components/common/LegalDocument";

export const metadata = { title: "Program Rules · Owner Rewards" };

export default function Page() {
  return (
    <LegalDocument
      icon={BookOpenCheck}
      eyebrow="Legal"
      title="Program Rules"
      description="The official rules governing the Owner Rewards program."
      lastUpdated="August 1, 2026"
      sections={[
        {
          id: "membership",
          title: "1. Program membership",
          body: "Owner Rewards is offered to active Holiday Inn Club Vacations owners. Membership begins when your ownership is activated and ends when your ownership is terminated or transferred.",
        },
        {
          id: "earning",
          title: "2. Earning points",
          body: "Owners earn Club Points annually based on their ownership level. Additional points may be earned through eligible spending, promotional offers, and referral bonuses.",
        },
        {
          id: "tiers",
          title: "3. Ownership tiers",
          body: "The program includes four tiers: Standard, Silver, Gold, and Platinum. Tier placement is determined by ownership level and total annual earnings. Benefits scale with tier — see the Benefits page for a full comparison.",
        },
        {
          id: "combining",
          title: "4. Combining accounts",
          body: "Two owners in the same household may link their accounts to pool points and share benefits. Contact Owner Services to request account linking.",
        },
        {
          id: "fraud",
          title: "5. Fraud and misuse",
          body: "Any attempt to fraudulently obtain or redeem points may result in forfeiture of points, suspension of program membership, and legal action.",
        },
        {
          id: "changes",
          title: "6. Program changes",
          body: "We may modify or terminate the program at any time. Material changes will be communicated in advance. Existing points will honor the rules in effect at the time they were earned unless a change materially benefits the owner.",
        },
      ]}
    />
  );
}
