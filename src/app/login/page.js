"use client"
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default  function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [user, setUser] = React.useState({email: "", password: ""})

  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const onLogin = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post("/api/users/login",user);
      console.log(response)
      if (response.status === 200) {
        toast.success(response.data.message);
        router.push("/home");
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
  <div className="flex relative flex-col lg:flex-row items-center justify-evenly min-h-screen p-4 bg-gray-100 dark:bg-gray-900">
    <img
      className="z-0 absolute h-screen w-full blur-xs opacity-15"
      src="/assets/ball.gif"
    />
    <img className=" z-40 md:w-150 w-90" src="/assets/login.png" />
    <form className="z-30 mb-4 w-full max-w-sm rounded-2xl px-8 pt-6 pb-8" onSubmit={onLogin}>
      <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
        Login
      </h1>
      {/* Username */}
      <div className="relative mb-6">
        <input
          type="email"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          fdprocessedid="82pf2c"
          placeholder="email"
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
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          fdprocessedid="twgg2vi"
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
            className="absolute right-5 top-5 text-gray-500 dark:text-gray-400 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <FaEyeSlash
            className="absolute right-5 top-5 text-gray-500 dark:text-gray-400 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </div>

      {/* Button */}
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 z-20 cursor-pointer w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
          type="submit"
          fdprocessedid="5cdp9y"
        >
          {isLoading ? "Processing..." : "Login"}
        </button>
      </div>
      <p className="text-center mt-10 text-gray-500 text-xs">
        &copy;{new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </form>
  </div>
);


}