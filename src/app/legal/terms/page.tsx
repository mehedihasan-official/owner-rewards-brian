import { FileText } from "lucide-react";
import LegalDocument from "@/components/common/LegalDocument";

export const metadata = { title: "Terms of Use · Owner Rewards" };

export default function Page() {
  return (
    <LegalDocument
      icon={FileText}
      eyebrow="Legal"
      title="Terms of Use"
      description="Please read these terms carefully before using the Owner Rewards Redemption Center."
      lastUpdated="August 1, 2026"
      sections={[
        {
          id: "acceptance",
          title: "1. Acceptance of terms",
          body: "By accessing or using the Owner Rewards Redemption Center, you agree to be bound by these Terms of Use, our Privacy Policy, and any additional program rules referenced herein. If you do not agree, do not use the service.",
        },
        {
          id: "eligibility",
          title: "2. Eligibility",
          body: "Owner Rewards is available exclusively to active Holiday Inn Club Vacations owners in good standing. Your eligibility may be suspended or revoked at any time for violation of these terms.",
        },
        {
          id: "account",
          title: "3. Your account",
          body: "You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. Notify Owner Services immediately of any unauthorized use.",
        },
        {
          id: "points",
          title: "4. Points and redemption",
          body: "Club Points have no cash value and are not transferable except as expressly permitted. Points may be forfeited if your ownership becomes inactive. Conversion and redemption rates are set forth in the Program Rules and may change with notice.",
        },
        {
          id: "prohibited",
          title: "5. Prohibited conduct",
          body: "You agree not to use the service for any unlawful purpose or in any way that could damage, disable, or impair the service. You may not attempt to gain unauthorized access to any portion of the service or any related systems.",
        },
        {
          id: "termination",
          title: "6. Termination",
          body: "We may suspend or terminate your access at any time, with or without cause. Upon termination, unredeemed points may be forfeited.",
        },
        {
          id: "changes",
          title: "7. Changes to these terms",
          body: "We may update these terms from time to time. Material changes will be communicated by email or via notice on this site. Continued use after changes constitutes acceptance.",
        },
      ]}
    />
  );
}
