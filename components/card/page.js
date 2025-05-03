"use client";
import React, { use, useEffect, useState } from "react";
import { data } from "../../data/dummy.js";
import Link from "next/link.js";

export default function Card({ state, setState, timer, setTimer,id }) {
  const carCount = data[id].carlogo.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [nextQuestionTimer, setNextQuestionTimer] = useState(5);
  const [isWrongAnswer, setIsWrongAnswer] = useState(false);

  
  const correctOption = data[id].carlogo[currentIndex].options.find(
    (option) => option.isCorrect
  )?.option;
  
  console.log(correctOption);
  function handleSelectedOption(option) {
    if (isAnswered) return; // prevent multiple clicks

    setSelectedOption(option);
    setIsAnswered(true);

    if (option === correctOption) {
      setState({ ...state, score: state.score + 4, correct: state.correct + 1, accuracy: ((state.correct ) / (state.correct + state.incorrect)) * 100, earnedCoin: state.earnedCoin + 4 });
      setIsWrongAnswer(false);
    } else {
        setState({ ...state, incorrect: state.incorrect + 1 });
        setIsWrongAnswer(true);
    }

     setTimeout(() => setIsWrongAnswer(false), 500);
  }
  // console.log(state)
  function handleNext() {
    if (currentIndex < carCount - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // Optionally handle end of quiz
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <img
          className="z-0 absolute h-screen w-full blur-xs opacity-15"
          src="/assets/ball.gif"
        />
        <div className="z-40 w-full max-w-md p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4">
            {data[id].title}
          </h2>
          <span className="absolute top-4 right-4 text-gray-500 dark:text-gray-400">
            Time Left: {timer} seconds
          </span>
          <p className="p-2 ">
            Qustion no. {currentIndex + 1} out of {carCount}
          </p>
          <img
            src={data[id].carlogo[currentIndex].href}
            alt="Car Logo"
            className="w-full h-52 mb-4 rounded-lg"
          />
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            {data[id].carlogo[currentIndex].question}
          </p>
          <div className="flex flex-col space-y-3">
            {data[id].carlogo[currentIndex].options.map((option, index) => {
              const isCorrect = option.option === correctOption;
              const isSelected = option.option === selectedOption;

              let buttonClass = "bg-slate-900 text-gray-300 ";

              if (isAnswered) {
                if (isCorrect) buttonClass = "bg-green-500 text-white";
                else if (isSelected && !isCorrect)
                  buttonClass = "bg-red-500 text-white";
              }

              return (
                <button
                  key={index}
                  className={`${buttonClass} cursor-pointer font-semibold text-start py-3 px-4 rounded-lg hover:opacity-90 focus:outline-none ${
                    isWrongAnswer ? "shake" : ""
                  } `}
                  onClick={() => handleSelectedOption(option.option)}
                  disabled={isAnswered}
                >
                  <span className="text-black bg-white p-2 rounded-full mr-2">
                    {option.serial}
                  </span>{" "}
                  {option.option}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {isAnswered && (
        <div className="z-50 flex justify-center items-center bg-slate-800 w-full p-3 fixed bottom-0">
          <button
            onClick={handleNext}
            className="relative cursor-pointer overflow-hidden px-6 py-2 w-64 font-semibold text-white  border-[1px] rounded-md group"
          >
            {currentIndex === carCount - 1 ? (
              <>
                <Link href={`/result?data=${encodeURIComponent(JSON.stringify(state))}`} className="relative z-10 ">
                  Submit Quiz
                </Link>
                <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-tl from-red-500 via-purple-600 to-green-300 transition-all duration-500 ease-out group-hover:w-full z-0"></span>
              </>
            ) : (
              <>
                <span className="relative z-10 ">
                  Next
                </span>
                <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-tl from-red-500 via-purple-600 to-green-300 transition-all duration-500 ease-out group-hover:w-full z-0"></span>
              </>
            )}
          </button>
        </div>
      )}
    </>
  );
}
