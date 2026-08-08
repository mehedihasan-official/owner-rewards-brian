import Hero from "@/components/home/Hero";
import RewardsSummary from "@/components/home/RewardsSummary";
import CategoryTiles from "@/components/home/CategoryTiles";
import WhyRedeem from "@/components/home/WhyRedeem";
import ComingSoonNote from "@/components/home/ComingSoonNote";

export default function Home() {
  return (
    <>
      <Hero />
      <RewardsSummary />
      <CategoryTiles />
      <WhyRedeem />
      <ComingSoonNote />
    </>
  );
}
