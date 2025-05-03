import { Suspense } from "react";
import ResultCards from "./resultcart";

export default function PageCards() {
  return(
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      </Suspense>
      <ResultCards/>
    </div>
  )
}