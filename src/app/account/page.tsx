import { User } from "lucide-react";
import PageHeader from "@/components/redemption/PageHeader";
import AccountForm from "./AccountForm";

export const metadata = { title: "Account · Owner Rewards" };

export default function Page() {
  return (
    <>
      <PageHeader
        icon={User}
        eyebrow="Account"
        title="Your account"
        description="Update your profile, notification preferences, and connected accounts."
      />
      <div className="container-page py-10 sm:py-14">
        <AccountForm />
      </div>
    </>
  );
}
