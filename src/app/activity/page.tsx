import PlaceholderPage from "@/components/common/PlaceholderPage";
import { Activity } from "lucide-react";

export const metadata = { title: "Activity · Owner Rewards" };

export default function Page() {
  return (
    <PlaceholderPage
      icon={Activity}
      eyebrow="Activity"
      title="Your account activity"
      description="A full history of your point conversions, redemptions and confirmations."
      bullets={[
        "Point conversion history",
        "Redemption receipts",
        "Downloadable statements",
      ]}
    />
  );
}
