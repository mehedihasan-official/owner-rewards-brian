export type GiftCardCategory =
  | "dining"
  | "online"
  | "retail"
  | "travel"
  | "entertainment";

export const categoryLabels: Record<GiftCardCategory, string> = {
  dining: "Food & Drink",
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
  // Food & Drink — coffee & bakery
  { slug: "starbucks", brand: "Starbucks", category: "dining", amounts: [10, 25, 50, 100], format: "eGift", color: "from-emerald-600 to-emerald-900" },
  { slug: "dunkin", brand: "Dunkin'", category: "dining", amounts: [10, 25, 50, 100], format: "eGift", color: "from-pink-500 to-orange-500" },
  { slug: "panera", brand: "Panera Bread", category: "dining", amounts: [10, 25, 50, 100], format: "eGift", color: "from-lime-500 to-emerald-700" },
  { slug: "krispy-kreme", brand: "Krispy Kreme", category: "dining", amounts: [10, 25, 50], format: "eGift", color: "from-rose-500 to-red-700" },

  // Food & Drink — fast food
  { slug: "mcdonalds", brand: "McDonald's", category: "dining", amounts: [10, 25, 50, 100], format: "eGift", color: "from-yellow-400 to-red-600" },
  { slug: "burger-king", brand: "Burger King", category: "dining", amounts: [10, 25, 50], format: "eGift", color: "from-orange-500 to-red-700" },
  { slug: "wendys", brand: "Wendy's", category: "dining", amounts: [10, 25, 50], format: "eGift", color: "from-red-500 to-red-800" },
  { slug: "taco-bell", brand: "Taco Bell", category: "dining", amounts: [10, 25, 50], format: "eGift", color: "from-fuchsia-600 to-purple-800" },
  { slug: "subway", brand: "Subway", category: "dining", amounts: [10, 25, 50, 100], format: "eGift", color: "from-yellow-500 to-green-700" },
  { slug: "chick-fil-a", brand: "Chick-fil-A", category: "dining", amounts: [10, 25, 50, 100], format: "eGift", color: "from-red-600 to-rose-900" },
  { slug: "kfc", brand: "KFC", category: "dining", amounts: [10, 25, 50], format: "eGift", color: "from-red-600 to-red-900" },
  { slug: "popeyes", brand: "Popeyes", category: "dining", amounts: [10, 25, 50], format: "eGift", color: "from-orange-500 to-orange-800" },
  { slug: "arbys", brand: "Arby's", category: "dining", amounts: [10, 25, 50], format: "eGift", color: "from-red-600 to-amber-700" },
  { slug: "chipotle", brand: "Chipotle", category: "dining", amounts: [25, 50, 100], format: "eGift", color: "from-red-700 to-yellow-700" },
  { slug: "panda-express", brand: "Panda Express", category: "dining", amounts: [10, 25, 50], format: "eGift", color: "from-red-600 to-orange-800" },
  { slug: "five-guys", brand: "Five Guys", category: "dining", amounts: [25, 50, 100], format: "eGift", color: "from-red-500 to-red-900" },
  { slug: "shake-shack", brand: "Shake Shack", category: "dining", amounts: [25, 50, 100], format: "eGift", color: "from-emerald-500 to-emerald-800" },

  // Food & Drink — pizza
  { slug: "dominos", brand: "Domino's Pizza", category: "dining", amounts: [10, 25, 50, 100], format: "eGift", color: "from-blue-600 to-red-600" },
  { slug: "pizza-hut", brand: "Pizza Hut", category: "dining", amounts: [10, 25, 50], format: "eGift", color: "from-red-600 to-black" },
  { slug: "papa-johns", brand: "Papa John's", category: "dining", amounts: [10, 25, 50], format: "eGift", color: "from-red-700 to-green-800" },

  // Food & Drink — sit-down restaurants
  { slug: "olive-garden", brand: "Olive Garden", category: "dining", amounts: [25, 50, 100], format: "eGift", color: "from-green-700 to-emerald-900" },
  { slug: "outback", brand: "Outback Steakhouse", category: "dining", amounts: [25, 50, 100], format: "eGift", color: "from-amber-700 to-red-900" },
  { slug: "applebees", brand: "Applebee's", category: "dining", amounts: [25, 50, 100], format: "eGift", color: "from-red-600 to-green-700" },
  { slug: "chilis", brand: "Chili's", category: "dining", amounts: [25, 50, 100], format: "eGift", color: "from-red-600 to-orange-700" },
  { slug: "texas-roadhouse", brand: "Texas Roadhouse", category: "dining", amounts: [25, 50, 100], format: "eGift", color: "from-amber-700 to-red-800" },
  { slug: "red-lobster", brand: "Red Lobster", category: "dining", amounts: [25, 50, 100], format: "eGift", color: "from-red-700 to-red-950" },
  { slug: "cheesecake-factory", brand: "The Cheesecake Factory", category: "dining", amounts: [25, 50, 100], format: "eGift", color: "from-amber-600 to-yellow-800" },
  { slug: "ihop", brand: "IHOP", category: "dining", amounts: [10, 25, 50], format: "eGift", color: "from-blue-600 to-red-600" },
  { slug: "buffalo-wild-wings", brand: "Buffalo Wild Wings", category: "dining", amounts: [25, 50, 100], format: "eGift", color: "from-yellow-500 to-black" },
  { slug: "pf-changs", brand: "P.F. Chang's", category: "dining", amounts: [25, 50, 100], format: "eGift", color: "from-red-700 to-slate-900" },

  // Food & Drink — delivery & groceries
  { slug: "doordash", brand: "DoorDash", category: "dining", amounts: [25, 50, 100], format: "eGift", color: "from-red-500 to-red-700" },
  { slug: "grubhub", brand: "Grubhub", category: "dining", amounts: [25, 50, 100], format: "eGift", color: "from-orange-500 to-red-600" },
  { slug: "uber-eats", brand: "Uber Eats", category: "dining", amounts: [25, 50, 100], format: "eGift", color: "from-emerald-500 to-emerald-900" },
  { slug: "instacart", brand: "Instacart", category: "dining", amounts: [25, 50, 100, 250], format: "eGift", color: "from-emerald-500 to-lime-600" },
  { slug: "whole-foods", brand: "Whole Foods Market", category: "dining", amounts: [25, 50, 100, 250], format: "eGift", color: "from-green-600 to-green-900" },
  { slug: "kroger", brand: "Kroger", category: "dining", amounts: [25, 50, 100, 250], format: "eGift", color: "from-blue-600 to-blue-900" },
  { slug: "safeway", brand: "Safeway", category: "dining", amounts: [25, 50, 100], format: "eGift", color: "from-red-600 to-red-900" },
  { slug: "trader-joes", brand: "Trader Joe's", category: "dining", amounts: [25, 50, 100], format: "eGift", color: "from-red-600 to-red-900" },
  { slug: "hello-fresh", brand: "HelloFresh", category: "dining", amounts: [50, 100, 250], format: "eGift", color: "from-lime-500 to-emerald-700" },
  { slug: "blue-apron", brand: "Blue Apron", category: "dining", amounts: [50, 100, 250], format: "eGift", color: "from-sky-600 to-indigo-800" },

  // Online
  { slug: "amazon", brand: "Amazon", category: "online", amounts: [25, 50, 100, 250, 500], format: "eGift", color: "from-amber-400 to-orange-500" },
  { slug: "apple", brand: "Apple", category: "online", amounts: [25, 50, 100, 250, 500], format: "eGift", color: "from-slate-700 to-slate-900" },
  { slug: "google-play", brand: "Google Play", category: "online", amounts: [15, 25, 50, 100], format: "eGift", color: "from-green-500 to-cyan-600" },

  // Retail
  { slug: "walmart", brand: "Walmart", category: "retail", amounts: [25, 50, 100, 250], format: "eGift", color: "from-sky-500 to-blue-700" },
  { slug: "target", brand: "Target", category: "retail", amounts: [25, 50, 100, 250], format: "eGift", color: "from-red-500 to-rose-700" },
  { slug: "best-buy", brand: "Best Buy", category: "retail", amounts: [25, 50, 100, 250, 500], format: "eGift", color: "from-blue-500 to-yellow-500" },
  { slug: "home-depot", brand: "The Home Depot", category: "retail", amounts: [25, 50, 100, 250], format: "eGift", color: "from-orange-500 to-orange-700" },
  { slug: "macys", brand: "Macy's", category: "retail", amounts: [25, 50, 100], format: "eGift", color: "from-red-600 to-red-900" },

  // Entertainment
  { slug: "netflix", brand: "Netflix", category: "entertainment", amounts: [25, 50, 100], format: "eGift", color: "from-red-600 to-black" },
  { slug: "spotify", brand: "Spotify", category: "entertainment", amounts: [30, 60, 99], format: "eGift", color: "from-green-500 to-emerald-800" },
  { slug: "amc", brand: "AMC Theatres", category: "entertainment", amounts: [25, 50], format: "eGift", color: "from-red-700 to-black" },
  { slug: "xbox", brand: "Xbox", category: "entertainment", amounts: [25, 50, 100], format: "eGift", color: "from-emerald-600 to-emerald-900" },

  // Travel
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
