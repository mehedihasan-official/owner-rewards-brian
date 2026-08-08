import PlaceholderPage from "@/components/common/PlaceholderPage";
import { MapPin } from "lucide-react";

export const metadata = { title: "Destinations · Owner Rewards" };

export default function Page() {
  return (
    <PlaceholderPage
      icon={MapPin}
      eyebrow="Destinations"
      title="Discover your next getaway"
      description="Browse curated Holiday Inn Club Vacations destinations across the country."
      bullets={[
        "Featured resort collections",
        "Location-based search",
        "Seasonal availability highlights",
      ]}
    />
  );
}
