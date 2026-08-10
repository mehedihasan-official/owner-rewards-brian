import { BedDouble } from "lucide-react";
import PageHeader from "@/components/redemption/PageHeader";
import MyStays from "./MyStays";

export const metadata = { title: "My Stays · Owner Rewards" };

export default function Page() {
  return (
    <>
      <PageHeader
        icon={BedDouble}
        eyebrow="My stays"
        title="Your upcoming and past stays"
        description="Manage reservations, download receipts, and plan your next getaway."
      />
      <MyStays />
    </>
  );
}
