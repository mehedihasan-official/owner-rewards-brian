export type Region = "Florida" | "Nevada" | "Tennessee" | "South Carolina" | "Texas" | "Arizona" | "Missouri" | "Virginia";

export type Resort = {
  slug: string;
  name: string;
  location: string;
  region: Region;
  image: string;
  pointsPerNight: number;
  tag?: string;
  description: string;
};

export const regions: Region[] = [
  "Florida",
  "Nevada",
  "Tennessee",
  "South Carolina",
  "Texas",
  "Arizona",
  "Missouri",
  "Virginia",
];

export const resorts: Resort[] = [
  {
    slug: "orange-lake",
    name: "Orange Lake Resort",
    location: "Orlando, FL",
    region: "Florida",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
    pointsPerNight: 32000,
    tag: "Flagship",
    description: "1,450 acres of family fun with four championship golf courses.",
  },
  {
    slug: "sunset-cove",
    name: "Sunset Cove Resort",
    location: "Marco Island, FL",
    region: "Florida",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    pointsPerNight: 28500,
    description: "Waterfront villas with private balconies and Gulf views.",
  },
  {
    slug: "cape-canaveral",
    name: "Cape Canaveral Beach Resort",
    location: "Cape Canaveral, FL",
    region: "Florida",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80",
    pointsPerNight: 24000,
    description: "Steps from the Atlantic with rocket-launch views.",
  },
  {
    slug: "desert-club",
    name: "Desert Club Resort",
    location: "Las Vegas, NV",
    region: "Nevada",
    image: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?auto=format&fit=crop&w=1200&q=80",
    pointsPerNight: 30000,
    tag: "Adults 21+",
    description: "One block off the Strip — casino-close, resort-quiet.",
  },
  {
    slug: "smoky-mountain",
    name: "Smoky Mountain Resort",
    location: "Gatlinburg, TN",
    region: "Tennessee",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    pointsPerNight: 22500,
    description: "Alpine views, hiking, and access to Dollywood.",
  },
  {
    slug: "piney-shores",
    name: "Piney Shores Resort",
    location: "Conroe, TX",
    region: "Texas",
    image: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?auto=format&fit=crop&w=1200&q=80",
    pointsPerNight: 20000,
    description: "Lakefront villas on Lake Conroe — boating, fishing, campfires.",
  },
  {
    slug: "scottsdale-links",
    name: "Scottsdale Links Resort",
    location: "Scottsdale, AZ",
    region: "Arizona",
    image: "https://images.unsplash.com/photo-1519821172144-4f87d85de2a4?auto=format&fit=crop&w=1200&q=80",
    pointsPerNight: 26500,
    description: "Southwest luxury villas overlooking Talking Stick golf.",
  },
  {
    slug: "apple-mountain",
    name: "Apple Mountain Resort",
    location: "Clarkesville, GA",
    region: "Tennessee",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80",
    pointsPerNight: 18500,
    description: "Blue Ridge foothills, orchards, and rustic-modern cabins.",
  },
  {
    slug: "myrtle-beach",
    name: "South Beach Resort",
    location: "Myrtle Beach, SC",
    region: "South Carolina",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    pointsPerNight: 21000,
    tag: "Beach",
    description: "Oceanfront tower with lazy river and boardwalk.",
  },
  {
    slug: "ozark-mountain",
    name: "Ozark Mountain Resort",
    location: "Kimberling City, MO",
    region: "Missouri",
    image: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=1200&q=80",
    pointsPerNight: 17000,
    description: "Lake-view villas near Silver Dollar City and Branson.",
  },
  {
    slug: "williamsburg",
    name: "Williamsburg Resort",
    location: "Williamsburg, VA",
    region: "Virginia",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
    pointsPerNight: 19500,
    description: "Colonial charm, walking trails, and Busch Gardens close by.",
  },
  {
    slug: "galveston",
    name: "Galveston Seaside Resort",
    location: "Galveston, TX",
    region: "Texas",
    image: "https://images.unsplash.com/photo-1512418490979-92798cec1380?auto=format&fit=crop&w=1200&q=80",
    pointsPerNight: 22000,
    description: "Gulf-view suites with pool decks and beach access.",
  },
];
