import PlaceholderPage from "@/components/common/PlaceholderPage";
import { Gift } from "lucide-react";

export const metadata = { title: "Gift Cards · Owner Rewards" };

export default function Page() {
  return (
    <PlaceholderPage
      icon={Gift}
      eyebrow="Gift Cards"
      title="Browse thousands of gift cards"
      description="The full catalog with search, filters, and sort is coming in an upcoming step of the project."
      bullets={[
        "Search across all brands",
        "Category and format filters (eGift / Physical)",
        "Sort by popularity, name and value",
      ]}
    />
  );
}
