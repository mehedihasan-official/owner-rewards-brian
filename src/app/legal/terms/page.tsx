import PlaceholderPage from "@/components/common/PlaceholderPage";
import { FileText } from "lucide-react";

export const metadata = { title: "Terms of Use · Owner Rewards" };

export default function Page() {
  return (
    <PlaceholderPage
      icon={FileText}
      eyebrow="Legal"
      title="Terms of Use"
      description="Full terms of use will be populated with final copy in an upcoming step."
    />
  );
}
