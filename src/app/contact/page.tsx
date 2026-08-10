import { PhoneCall } from "lucide-react";
import PageHeader from "@/components/redemption/PageHeader";
import ContactForm, { ContactSidebar } from "./ContactForm";

export const metadata = { title: "Contact Us · Owner Rewards" };

export default function Page() {
  return (
    <>
      <PageHeader
        icon={PhoneCall}
        eyebrow="Contact"
        title="We're here to help"
        description="Send a message and we'll get back to you within 24 hours — or reach us right now by phone or chat."
      />
      <div className="container-page py-10 sm:py-14 grid gap-8 lg:grid-cols-[1fr_320px]">
        <ContactForm />
        <ContactSidebar />
      </div>
    </>
  );
}
