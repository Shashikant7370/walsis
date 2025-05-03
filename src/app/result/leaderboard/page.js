"use client";
import { motion } from "framer-motion";
import { LeaderboardData } from "../../../../data/dummy";

export default function Leaderboard() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 overflow-y-auto pt-40 py-8  flex flex-col items-center px-4">
    
      {/* Top 3 Cards Container */}
      <div className="relative z-40 flex w-full max-w-sm md:max-w-lg justify-evenly bg-white rounded-lg shadow-md dark:bg-gray-800 mb-10">
        <div className="relative flex justify-center max-w-md w-[33.33%] bg-white  dark:bg-gray-800 h-22 ">
          <motion.img
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute -top-10 md:-top-15 left- w-20 h-20 md:w-30 md:h-30 rounded-full"
            src="https://sp.yimg.com/ib/th?id=OIP.tCVyqrjFnlf4ckjM2CHfUAHaI4&pid=Api&w=148&h=148&c=7&dpr=2&rs=1"
          />
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute top-18 text-sm md:text-lg"
          >
            Chandan
          </motion.div>
        </div>
        <div className="relative flex justify-center max-w-md w-[33.33%] bg-white  dark:bg-gray-800 h-40 -top-18">
          <motion.img
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="absolute -top-10 md:-top-15 left- w-20 h-20 md:w-30 md:h-30 rounded-full"
            src="/assets/profileimage.png"
          />
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="absolute top-18 text-sm md:text-lg"
          >
            Shashikant Kumar
          </motion.div>
        </div>
        <div className="relative flex justify-center max-w-md w-[33.33%] bg-white  dark:bg-gray-800 h-30 -top-8">
          <motion.img
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute -top-10 md:-top-15 left- w-20 h-20 md:w-30 md:h-30 rounded-full"
            src="https://up.yimg.com/ib/th?id=OIP.rqe2LxOClJQV22aCQ3r2XQHaHZ&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"
          />
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-18 text-sm md:text-lg"
          >
            Ashutosh Kumar
          </motion.div>
        </div>
        <div className="absolute flex justify-center bottom-1 text-2xl md:text-3xl">
          Top 3 Ranks 🏆
        </div>
      </div>

      {/* Leaderboard List */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
        Leaderboard
      </h1>

      <div className="w-full max-w-3xl">
        <div className="flex justify-between px-5 py-3 rounded-sm bg-green-800 text-white font-bold text-xl">
          <span>Name</span>
          <span>Score</span>
          <span>#Rank</span>
        </div>

        {LeaderboardData.map((item, index) => (
          <div
            key={index}
            className="flex cursor-pointer justify-between px-5 py-3 mt-2 bg-gray-800 text-white rounded-sm hover:scale-105 transition-transform"
          >
            <span>{item.name}</span>
            <span>{item.score}</span>
            <span>#{item.rank}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
