import PlaceholderPage from "@/components/common/PlaceholderPage";
import { BedDouble } from "lucide-react";

export const metadata = { title: "My Stays · Owner Rewards" };

export default function Page() {
  return (
    <PlaceholderPage
      icon={BedDouble}
      eyebrow="My Stays"
      title="Your upcoming and past stays"
      description="Manage reservations and view your stay history."
      bullets={[
        "Upcoming reservations",
        "Past stays and receipts",
        "Modification and cancellation",
      ]}
    />
  );
}
