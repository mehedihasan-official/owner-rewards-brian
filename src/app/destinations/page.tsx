import { MapPin } from "lucide-react";
import PageHeader from "@/components/redemption/PageHeader";
import DestinationsGrid from "./DestinationsGrid";

export const metadata = { title: "Destinations · Owner Rewards" };

export default function Page() {
  return (
    <>
      <PageHeader
        icon={MapPin}
        eyebrow="Destinations"
        title="Discover your next getaway"
        description="Browse Holiday Inn Club Vacations resorts across the country and book with your points."
      />
      <DestinationsGrid />
    </>
  );
}
