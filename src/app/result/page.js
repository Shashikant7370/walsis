import { Suspense } from "react";

const ResultCards = dynamic(() => import("./resultcart"), { ssr: false });

export default function PageCards() {
  return(
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ResultCards/>
      </Suspense>
    </div>
  )
}