"use client";
import React from "react";
import Card from "../../../../../components/card/page";
import { useParams } from "next/navigation";
export default function QuizPage() {
    const params = useParams();
   const id = parseInt(params.id);
   console.log(id);
    const [state , setState] = React.useState({
            earnedCoin:0,
            score: 0,
            correct: 0,
            incorrect: 0,
            accuracy: 0,
            time: 0,
            liveRank:6
        });
    
        const [timer ,setTimer] = React.useState(45);
    
  return (
    <>
      <Card
        id={id}
        state={state}
        setState={setState}
        timer={timer}
        setTimer={setTimer}
      />
    </>
  );
}