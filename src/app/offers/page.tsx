import { Tags } from "lucide-react";
import PageHeader from "@/components/redemption/PageHeader";
import OffersGrid from "./OffersGrid";

export const metadata = { title: "Offers · Owner Rewards" };

export default function Page() {
  return (
    <>
      <PageHeader
        icon={Tags}
        eyebrow="Offers"
        title="Owner-exclusive offers"
        description="Enhanced conversion rates, bonuses, and limited-time redemption promotions."
      />
      <OffersGrid />
    </>
  );
}
