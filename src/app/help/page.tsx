import PlaceholderPage from "@/components/common/PlaceholderPage";
import { HelpCircle } from "lucide-react";

export const metadata = { title: "Help · Owner Rewards" };

export default function Page() {
  return (
    <PlaceholderPage
      icon={HelpCircle}
      eyebrow="Help Center"
      title="How can we help?"
      description="FAQs, guides, and step-by-step walkthroughs of redemption flows."
      bullets={[
        "Conversion and redemption FAQs",
        "Troubleshooting common issues",
        "Direct link to Owner Services",
      ]}
    />
  );
}
