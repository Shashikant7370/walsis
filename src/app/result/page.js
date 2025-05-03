"use client";
import React,{Suspense} from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {  FaCopy, FaFacebook, FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function ResultCards() {

   const searchParams = useSearchParams();
   const data = searchParams.get("data");
   const quizData = data ? JSON.parse(decodeURIComponent(data)): {};
   const [isOpen, setIsOpen] = React.useState(false);

   return (
     <Suspense
       fallback={
         <div className="flex justify-center items-center h-screen">
           <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
             Loading...
           </h1>
         </div>
       }
     >
       <div className="min-h-screen bg-[#0f2a36] text-white flex flex-col items-center justify-center space-y-6 p-4">
         <h1 className="text-3xl font-bold text-yellow-400">Result review !</h1>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
           {/* Left Card */}
           <motion.div
             initial={{ x: -200, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ duration: 0.6 }}
             className="bg-[#16333f] p-6 rounded-lg shadow-lg"
           >
             <h2 className="text-xl font-semibold mb-2">Coin Earned</h2>
             <p className="text-2xl font-bold">{quizData.score} 🪙</p>
           </motion.div>

           {/* Right Card */}
           <motion.div
             initial={{ x: 200, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ duration: 0.6 }}
             className="bg-[#16333f] p-6 rounded-lg shadow-lg"
           >
             <h2 className="text-xl font-semibold mb-2">Your Score</h2>
             <p className="text-2xl font-bold">{quizData.earnedCoin} 🏆</p>
           </motion.div>

           {/* Bottom Card */}
           <motion.div
             initial={{ y: 100, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.6 }}
             className="bg-[#16333f] p-6 rounded-lg shadow-lg"
           >
             <h2 className="text-xl font-semibold mb-2">Time Spent</h2>
             <p className="text-2xl font-bold">1 m 33 s ⏱️</p>
           </motion.div>

           <motion.div
             initial={{ y: 100, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.6 }}
             className="bg-[#16333f] p-6 rounded-lg shadow-lg"
           >
             <h2 className="text-xl font-semibold mb-2">Accuracy</h2>
             <p className="text-2xl font-bold">
               {Math.ceil(quizData.accuracy)}% 📌
             </p>
           </motion.div>

           <motion.div
             initial={{ x: -100, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ duration: 0.6 }}
             className="bg-[#16333f] p-6 rounded-lg shadow-lg"
           >
             <h2 className="text-xl font-semibold mb-2">Correct Answer</h2>
             <p className="text-2xl font-bold">{quizData.correct} ✅</p>
           </motion.div>

           <motion.div
             initial={{ x: 155, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ duration: 0.6 }}
             className="bg-[#16333f] p-6 rounded-lg shadow-lg"
           >
             <h2 className="text-xl font-semibold mb-2">Incorrect Answer</h2>
             <p className="text-2xl font-bold">{quizData.incorrect} ❌</p>
           </motion.div>
         </div>

         <div className="flex space-x-4 mt-8">
           <button
             onClick={() => setIsOpen(!isOpen)}
             fdprocessedid="fj77el"
             className="bg-purple-700 px-6 py-2 cursor-pointer rounded-md hover:bg-purple-800 transition text-white font-semibold"
           >
             Share Score
           </button>
           <button
             fdprocessedid="9em5r"
             className="bg-purple-700 px-6 cursor-pointer py-2 rounded-md hover:bg-purple-800 transition text-white font-semibold"
           >
             Review Questions
           </button>
           <button
             fdprocessedid="zcwwc4"
             className="bg-purple-900 px-6 py-2 cursor-pointer rounded-md hover:bg-purple-950 transition text-white font-semibold"
           >
             <Link href="/result/leaderboard">Leaderboard</Link>
           </button>
         </div>

         {isOpen && (
           <div className="fixed inset-0 flex items-center  justify-center text-black bg-[rgba(0,0,0,0.6)] bg-opacity-50 z-50">
             <AnimatePresence>
               <motion.div
                 initial={{ y: 500, x: -200, opacity: 0 }}
                 animate={{
                   y: 0,
                   x: 0,
                   opacity: 1,
                 }}
                 exit={{ y: 500, opacity: 0 }}
                 transition={{ duration: 0.5 }}
                 className="relative flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg w-96"
               >
                 <span
                   className="absolute top-3 right-3 cursor-pointer p-2"
                   onClick={() => setIsOpen(false)}
                 >
                   ❌
                 </span>
                 <h2 className="text-xl font-semibold mb-2">
                   Share Your Score
                 </h2>
                 <div className="flex items-center justify-evenly mb-4">
                   <FaFacebook className="text-blue-600 cursor-pointer size-8" />
                   <FaGithub className="text-gray-800 cursor-pointer size-8" />
                   <FaInstagram className="text-pink-600 cursor-pointer size-8" />
                   <FaYoutube className="text-red-600 cursor-pointer size-8" />
                   <FaTwitter className="text-blue-400 cursor-pointer size-8" />
                 </div>

                 <div className="flex">
                   <input
                     type="text"
                     value={`https://quizard.com/result?data=${encodeURIComponent(
                       JSON.stringify(quizData)
                     )}`}
                     readOnly
                     fdprocessedid="5dv53r"
                     className="border focus:outline-none  border-gray-300 rounded-md py-1 px-4 w-full"
                   />
                   <button
                     fdprocessedid="6gxsrr"
                     className="bg-blue-500 text-white px-4 py-1 rounded-md ml-2"
                   >
                     <FaCopy className="text-white cursor-copy" />
                   </button>
                 </div>
               </motion.div>
             </AnimatePresence>
           </div>
         )}
       </div>
     </Suspense>
   );
 }



