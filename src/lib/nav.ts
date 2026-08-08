import type { LucideIcon } from "lucide-react";
import {
  MapPin,
  Tags,
  Compass,
  Activity,
  Award,
  HelpCircle,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const mainNav: NavItem[] = [
  { label: "Destinations", href: "/destinations", icon: MapPin },
  { label: "Offers", href: "/offers", icon: Tags },
  { label: "Explore", href: "/explore", icon: Compass },
  { label: "Activity", href: "/activity", icon: Activity },
  { label: "Benefits", href: "/benefits", icon: Award },
  { label: "Help", href: "/help", icon: HelpCircle },
];

export const footerLegal = [
  { label: "Terms of Use", href: "/legal/terms" },
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Redemption Terms", href: "/legal/redemption-terms" },
  { label: "Program Rules", href: "/legal/program-rules" },
  { label: "Contact Us", href: "/contact" },
];
