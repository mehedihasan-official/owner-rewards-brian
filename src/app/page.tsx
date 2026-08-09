import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import OffersRow from "@/components/home/OffersRow";
import Showcase from "@/components/home/Showcase";
import AppDownload from "@/components/home/AppDownload";
import MemberBanner from "@/components/home/MemberBanner";
import DestinationsColumns from "@/components/home/DestinationsColumns";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <OffersRow />
      <Showcase />
      <AppDownload />
      <MemberBanner />
      <DestinationsColumns />
      <FAQ />
    </>
  );
}
