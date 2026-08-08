import PlaceholderPage from "@/components/common/PlaceholderPage";
import { User } from "lucide-react";

export const metadata = { title: "Account · Owner Rewards" };

export default function Page() {
  return (
    <PlaceholderPage
      icon={User}
      eyebrow="Account"
      title="Your account"
      description="Profile, preferences, and connected accounts."
      bullets={[
        "Profile and contact info",
        "Preferences and notifications",
        "Linked IHG One Rewards account",
      ]}
    />
  );
}
