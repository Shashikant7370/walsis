"use client"
import React from 'react'
import Card from '../../../components/card/page'
import QuizCard from '../../../components/quizCard/page';
import {motion} from "framer-motion"
const Home = () => {
    
  return (
    <div className="">
      <div className="relative z-10 overflow-hidden  flex flex-col md:flex-row items-center p-4 justify-evenly w-full h-[70vh]  bg-gray-800">
        <motion.img
          animate={{
            rotateX: [0, 360, 0],
            x: [0, 1000, 0],
            y: [0, 0, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute left-0 rotate-45 h-full w-[50%] z-0 blur-xs"
          src="/assets/ring.png"
        />
        <img
          className="z-0 absolute -right-50  w-full h-full opacity-45"
          src="/assets/sidering.png"
        />
        <div className="z-40 p-4 max-w-md flex flex-col items-center  md:gap-3 rounded-2xl bg-transparent shadow-lg shadow-amber-50">
          <h1 className="text-3xl md:text-5xl font-bold  text-white">
            Create Quiz
          </h1>
          <p className="text-lg md:text-xl text-white">
            Create interactive quizzes in minutes with our online quiz maker
          </p>
          <button className="bg-white hover:bg-slate-900 hover:text-white transition-all duration-300 text-gray-500 hover:shadow-gray-800 shadow-md cursor-pointer px-4 py-2  rounded-lg mt-4">
            Create Quiz
          </button>
        </div>
        <div className="z-40 p-4 max-w-md rounded-2xl flex flex-col md:gap-3 items-center bg-transparent shadow-lg shadow-amber-50">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Quizard AI
          </h1>
          <p className=" text-lg md:text-xl text-white">
            Create quizzes instantly with AI — just enter a topic and get
            engaging questions in seconds!
          </p>
          <button className="bg-white cursor-pointer hover:bg-slate-900 hover:text-white transition-all duration-300 hover:shadow-gray-800 shadow-md  text-gray-500 px-4 py-2 rounded-lg mt-4">
            Generate Quiz
          </button>
        </div>
      </div>
      <div className=" dark:bg-gray-900 ">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 pt-4">
          Choose Your Quiz
        </h1>

        <QuizCard />
      </div>
    </div>
  );
}

export default Home