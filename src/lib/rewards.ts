export const INITIAL_CLUB_POINTS = 1_000_000;

export const OWNER_NAME = "Brian Caceres";
export const OWNER_FIRST_NAME = "Brian";

// 5 Club Points => 4 IHG points; 1 IHG point => $0.04 USD
export const CLUB_TO_IHG_NUM = 4;
export const CLUB_TO_IHG_DEN = 5;
export const USD_PER_IHG = 0.04;

export function clubToIhg(clubPoints: number) {
  return Math.floor((clubPoints * CLUB_TO_IHG_NUM) / CLUB_TO_IHG_DEN);
}

export function clubToUsd(clubPoints: number) {
  return clubToIhg(clubPoints) * USD_PER_IHG;
}

export function usdToClub(usd: number) {
  const ihg = Math.ceil(usd / USD_PER_IHG);
  return Math.ceil((ihg * CLUB_TO_IHG_DEN) / CLUB_TO_IHG_NUM);
}

export const usd = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD" });

export const num = (n: number) => n.toLocaleString("en-US");

export type RedemptionKind =
  | "maintenance"
  | "gift-card"
  | "visa"
  | "deposit";

export type Activity = {
  id: string;
  date: string; // ISO
  kind: RedemptionKind;
  title: string;
  detail: string;
  pointsSpent: number;
  usdValue: number;
  status: "Completed" | "Processing";
};
