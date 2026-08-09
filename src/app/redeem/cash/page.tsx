import { Suspense } from "react";
import CashFlow from "./CashFlow";

export const metadata = { title: "Visa & Bank Deposit · Owner Rewards" };

export default function Page() {
  return (
    <Suspense fallback={null}>
      <CashFlow />
    </Suspense>
  );
}
