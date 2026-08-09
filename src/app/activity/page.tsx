import { Activity as ActivityIcon } from "lucide-react";
import PageHeader from "@/components/redemption/PageHeader";
import ActivityList from "./ActivityList";

export const metadata = { title: "Activity · Owner Rewards" };

export default function Page() {
  return (
    <>
      <PageHeader
        icon={ActivityIcon}
        eyebrow="Activity"
        title="Your redemption history"
        description="A full record of every redemption from your Owner Rewards account."
      />
      <ActivityList />
    </>
  );
}
