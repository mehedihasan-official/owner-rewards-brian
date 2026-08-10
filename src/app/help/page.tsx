import { HelpCircle } from "lucide-react";
import PageHeader from "@/components/redemption/PageHeader";
import HelpCenter from "./HelpCenter";

export const metadata = { title: "Help · Owner Rewards" };

export default function Page() {
  return (
    <>
      <PageHeader
        icon={HelpCircle}
        eyebrow="Help center"
        title="How can we help?"
        description="Search FAQs, browse guides, or connect with Owner Services."
      />
      <HelpCenter />
    </>
  );
}
