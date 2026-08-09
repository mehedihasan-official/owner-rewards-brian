export type GiftCardCategory =
  | "dining"
  | "online"
  | "retail"
  | "travel"
  | "entertainment";

export const categoryLabels: Record<GiftCardCategory, string> = {
  dining: "Dining",
  online: "Online",
  retail: "Retail",
  travel: "Travel",
  entertainment: "Entertainment",
};

export type GiftCard = {
  slug: string;
  brand: string;
  category: GiftCardCategory;
  amounts: number[];
  format: "eGift" | "Physical";
  color: string; // tailwind gradient classes
};

export const giftCards: GiftCard[] = [
  { slug: "amazon", brand: "Amazon", category: "online", amounts: [25, 50, 100, 250, 500], format: "eGift", color: "from-amber-400 to-orange-500" },
  { slug: "walmart", brand: "Walmart", category: "retail", amounts: [25, 50, 100, 250], format: "eGift", color: "from-sky-500 to-blue-700" },
  { slug: "target", brand: "Target", category: "retail", amounts: [25, 50, 100, 250], format: "eGift", color: "from-red-500 to-rose-700" },
  { slug: "best-buy", brand: "Best Buy", category: "retail", amounts: [25, 50, 100, 250, 500], format: "eGift", color: "from-blue-500 to-yellow-500" },
  { slug: "home-depot", brand: "The Home Depot", category: "retail", amounts: [25, 50, 100, 250], format: "eGift", color: "from-orange-500 to-orange-700" },
  { slug: "macys", brand: "Macy's", category: "retail", amounts: [25, 50, 100], format: "eGift", color: "from-red-600 to-red-900" },
  { slug: "starbucks", brand: "Starbucks", category: "dining", amounts: [10, 25, 50, 100], format: "eGift", color: "from-emerald-600 to-emerald-900" },
  { slug: "chipotle", brand: "Chipotle", category: "dining", amounts: [25, 50, 100], format: "eGift", color: "from-red-700 to-yellow-700" },
  { slug: "olive-garden", brand: "Olive Garden", category: "dining", amounts: [25, 50, 100], format: "eGift", color: "from-green-700 to-emerald-900" },
  { slug: "doordash", brand: "DoorDash", category: "dining", amounts: [25, 50, 100], format: "eGift", color: "from-red-500 to-red-700" },
  { slug: "grubhub", brand: "Grubhub", category: "dining", amounts: [25, 50, 100], format: "eGift", color: "from-orange-500 to-red-600" },
  { slug: "cheesecake-factory", brand: "The Cheesecake Factory", category: "dining", amounts: [25, 50, 100], format: "eGift", color: "from-amber-600 to-yellow-800" },
  { slug: "apple", brand: "Apple", category: "online", amounts: [25, 50, 100, 250, 500], format: "eGift", color: "from-slate-700 to-slate-900" },
  { slug: "google-play", brand: "Google Play", category: "online", amounts: [15, 25, 50, 100], format: "eGift", color: "from-green-500 to-cyan-600" },
  { slug: "netflix", brand: "Netflix", category: "entertainment", amounts: [25, 50, 100], format: "eGift", color: "from-red-600 to-black" },
  { slug: "spotify", brand: "Spotify", category: "entertainment", amounts: [30, 60, 99], format: "eGift", color: "from-green-500 to-emerald-800" },
  { slug: "amc", brand: "AMC Theatres", category: "entertainment", amounts: [25, 50], format: "eGift", color: "from-red-700 to-black" },
  { slug: "xbox", brand: "Xbox", category: "entertainment", amounts: [25, 50, 100], format: "eGift", color: "from-emerald-600 to-emerald-900" },
  { slug: "delta", brand: "Delta Air Lines", category: "travel", amounts: [50, 100, 250, 500], format: "eGift", color: "from-red-700 to-blue-800" },
  { slug: "southwest", brand: "Southwest Airlines", category: "travel", amounts: [50, 100, 250], format: "eGift", color: "from-blue-700 to-red-600" },
  { slug: "united", brand: "United Airlines", category: "travel", amounts: [50, 100, 250, 500], format: "eGift", color: "from-blue-500 to-blue-900" },
  { slug: "marriott", brand: "Marriott", category: "travel", amounts: [50, 100, 250, 500], format: "eGift", color: "from-orange-600 to-rose-800" },
  { slug: "uber", brand: "Uber", category: "travel", amounts: [25, 50, 100], format: "eGift", color: "from-slate-800 to-black" },
  { slug: "airbnb", brand: "Airbnb", category: "travel", amounts: [50, 100, 250, 500], format: "eGift", color: "from-rose-500 to-pink-700" },
];

export function findGiftCard(slug: string) {
  return giftCards.find((c) => c.slug === slug);
}
