import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { RewardsProvider } from "@/lib/rewards-store";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Owner Rewards Redemption Center",
  description:
    "Convert your Club Points into IHG One Rewards and redeem them for maintenance credit, gift cards, Visa rewards, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-ink-900 antialiased">
        <RewardsProvider>
          <TopBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </RewardsProvider>
      </body>
    </html>
  );
}
