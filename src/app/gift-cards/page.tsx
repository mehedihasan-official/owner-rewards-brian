import { Gift } from "lucide-react";
import PageHeader from "@/components/redemption/PageHeader";
import GiftCardsCatalog from "./GiftCardsCatalog";

export const metadata = { title: "Gift Cards · Owner Rewards" };

export default function Page() {
  return (
    <>
      <PageHeader
        icon={Gift}
        eyebrow="Gift Cards"
        title="Choose from thousands of brands"
        description="Search, filter and sort — then redeem instantly. Delivered by email as eGifts."
      />
      <GiftCardsCatalog />
    </>
  );
}
