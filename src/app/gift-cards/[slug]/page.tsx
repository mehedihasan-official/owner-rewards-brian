import { notFound } from "next/navigation";
import { findGiftCard, giftCards } from "@/lib/gift-cards";
import GiftCardDetail from "./GiftCardDetail";

export function generateStaticParams() {
  return giftCards.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const card = findGiftCard(slug);
  return {
    title: card
      ? `${card.brand} eGift Card · Owner Rewards`
      : "Gift Card · Owner Rewards",
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const card = findGiftCard(slug);
  if (!card) notFound();
  return <GiftCardDetail card={card} />;
}
