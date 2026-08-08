import PlaceholderPage from "@/components/common/PlaceholderPage";
import { Wrench } from "lucide-react";

export const metadata = { title: "Maintenance Credit · Owner Rewards" };

export default function Page() {
  return (
    <PlaceholderPage
      icon={Wrench}
      eyebrow="Redeem · Maintenance Credit"
      title="Apply points to your maintenance fee"
      description="Enter your maintenance fee, pick a point tier, and confirm. Full interactive flow arrives in the next step."
      bullets={[
        "Editable maintenance fee input",
        "Live point tier selection (25k / 50k / 75k / 100k)",
        "Simulated confirmation screen",
      ]}
    />
  );
}
