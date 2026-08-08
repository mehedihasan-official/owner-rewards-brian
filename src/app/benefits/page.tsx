import PlaceholderPage from "@/components/common/PlaceholderPage";
import { Award } from "lucide-react";

export const metadata = { title: "Benefits · Owner Rewards" };

export default function Page() {
  return (
    <PlaceholderPage
      icon={Award}
      eyebrow="Benefits"
      title="Your ownership benefits"
      description="Everything included with your Holiday Inn Club Vacations ownership."
      bullets={[
        "IHG One Rewards status matching",
        "Exclusive owner rates",
        "Priority customer service",
      ]}
    />
  );
}
