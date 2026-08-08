import PlaceholderPage from "@/components/common/PlaceholderPage";
import { PhoneCall } from "lucide-react";

export const metadata = { title: "Contact Us · Owner Rewards" };

export default function Page() {
  return (
    <PlaceholderPage
      icon={PhoneCall}
      eyebrow="Contact"
      title="Contact Owner Services"
      description="Get in touch by phone, live chat, or a full contact form — arriving in an upcoming step."
      bullets={[
        "Phone and live chat support",
        "Contact form with topic routing",
        "Response-time expectations",
      ]}
    />
  );
}
