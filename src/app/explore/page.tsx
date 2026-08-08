import PlaceholderPage from "@/components/common/PlaceholderPage";
import { Compass } from "lucide-react";

export const metadata = { title: "Explore · Owner Rewards" };

export default function Page() {
  return (
    <PlaceholderPage
      icon={Compass}
      eyebrow="Explore"
      title="Explore ways to use your points"
      description="Ideas, guides, and inspiration for making the most of your Club Points."
      bullets={[
        "Points redemption ideas",
        "Owner community stories",
        "Best-value redemption guides",
      ]}
    />
  );
}
