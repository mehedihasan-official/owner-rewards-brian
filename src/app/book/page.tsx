import PlaceholderPage from "@/components/common/PlaceholderPage";
import { CalendarCheck } from "lucide-react";

export const metadata = { title: "Book Now · Owner Rewards" };

export default function Page() {
  return (
    <PlaceholderPage
      icon={CalendarCheck}
      eyebrow="Book Now"
      title="Plan your next stay"
      description="Owner booking flow — destination search, dates, and availability."
      bullets={[
        "Destination and date picker",
        "Owner-priority availability",
        "Points + cash combined booking",
      ]}
    />
  );
}
