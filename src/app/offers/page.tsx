import PlaceholderPage from "@/components/common/PlaceholderPage";
import { Tags } from "lucide-react";

export const metadata = { title: "Offers · Owner Rewards" };

export default function Page() {
  return (
    <PlaceholderPage
      icon={Tags}
      eyebrow="Offers"
      title="Owner-exclusive offers"
      description="Enhanced conversion rates, seasonal bonuses, and limited-time redemption promotions."
      bullets={[
        "Bonus IHG Points redemption windows",
        "Gift card partner promotions",
        "Owner-only travel discounts",
      ]}
    />
  );
}
