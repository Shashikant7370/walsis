"use client";
import React from "react";
import {motion} from "framer-motion";
import { FaArrowRight, FaEye, FaEyeSlash, FaRegistered, FaSign } from "react-icons/fa";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Signup() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const onSignup = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post("/api/users/signup",user);
      if (response.status === 201) {
        toast.success(response.data.message);
        router.push("/login");
      } else {
        toast.error(response.data.message);
      }
    }catch (error) {
      toast.error("Something went wrong, please try again later.");
    }finally {
      setIsLoading(false);
    }
    
  }
  return (
    <div className="flex relative flex-col lg:flex-row items-center justify-evenly h-screen p-4 bg-gray-100 dark:bg-gray-900">
      <img
        className="z-0 absolute h-screen w-full blur-xs opacity-15"
        src="/assets/ball.gif"
      />
      <motion.img
        animate={{ x: [0, 0, 0, 0], y: [0, -30, -35, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="-mt-5 z-40 md:w-100 w-90"
        src="/assets/signup.png"
      />
      <form onSubmit={onSignup} className="z-30 mb-4 w-full max-w-sm rounded-2xl px-8 pt-6 pb-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
          Signup <FaArrowRight className="inline"/>
        </h1>
        {/* Username */}
        <div className="relative mb-6">
          <input
            type="text"
            id="username"
            onChange={(e) => setUser({...user, username: e.target.value})}
            value={user.username}
            placeholder="Username"
            fdprocessedid="w39z72"
            className="peer w-full border border-gray-300 dark:border-gray-700 rounded-md bg-transparent px-3 pt-6 pb-2 text-gray-800 dark:text-gray-200 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 dark:hover:border-blue-400"
          />
          <label
            htmlFor="username"
            className="absolute left-3 top-3 text-gray-500 dark:text-gray-400 text-sm transition-all transform scale-100 origin-top-left peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:scale-90"
          >
            Username
          </label>
        </div>

        {/* email */}
        <div className="relative mb-6">
          <input
            type="email"
            id="email"
            placeholder="email"
            onChange={(e) => setUser({...user, email: e.target.value})}
            value={user.email}
            fdprocessedid="3f5p3h"
            className="peer w-full border border-gray-300 dark:border-gray-700 rounded-md bg-transparent px-3 pt-6 pb-2 text-gray-800 dark:text-gray-200 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 dark:hover:border-blue-400"
          />
          <label
            htmlFor="email"
            className="absolute left-3 top-3 text-gray-500 dark:text-gray-400 text-sm transition-all transform scale-100 origin-top-left peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:scale-90"
          >
            Email
          </label>
        </div>

        {/* Password */}
        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Password"
            onChange={(e) => setUser({...user, password: e.target.value})}
            value={user.password}
            fdprocessedid="wyneao"
            className="peer w-full border border-gray-300 dark:border-gray-700 rounded-md bg-transparent px-3 pt-6 pb-2 text-gray-800 dark:text-gray-200 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 dark:hover:border-blue-400"
          />
          <label
            htmlFor="password"
            className="absolute left-3 top-3 text-gray-500 dark:text-gray-400 text-sm transition-all transform scale-100 origin-top-left peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:scale-90"
          >
            Password
          </label>
          {showPassword ? (
            <FaEye
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-5 right-4 cursor-pointer"
            />
          ) : (
            <FaEyeSlash
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-5 right-4 cursor-pointer"
            />
          )}
        </div>

        {/* Button */}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 w-full cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
            type="submit"
            fdprocessedid="po9fm5"
          >
            {isLoading ? "Loading..." : "Signup"}
          </button>
        </div>
        <p className="text-center mt-10 text-gray-500 text-xs">
          &copy;{new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </form>
    </div>
  );
}
