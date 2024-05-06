"use client";
import React, { useState, useEffect } from "react";

import { FcGoogle } from "react-icons/fc";
import { IoMail } from "react-icons/io5";

import { UserAuth } from "../context/AuthContext";

import { Poppins } from "next/font/google";
import Link from "next/link";

import { useRouter } from "next/navigation";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function Landing() {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  useEffect(() => {
    if (user) {
      router.push("/home");
    }
  }, [user]);

  return (
    <div className={poppins.className}>
      <div className="flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-1/2 h-full">
          <img
            src="/img1.jpg"
            alt="Image"
            className="w-full h-1/2 md:h-screen"
          />
        </div>
        <div className="md:w-1/2 bg-[#071829] flex flex-col justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="-mt-24 md:-mt-16">
              <h1 className="text-4xl font-bold text-center">
                Lo<span className="bg-[#00B2FF] rounded-xl p-1 ml-1.5">GO</span>
              </h1>
              <h1 className="text-center mt-4 tracking-wide text-base">
                Journey to a trillion miles starts from here!!
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center mt-6 md:mt-16">
            <div className="text-center bg-[#071829] border border-[#FFFFFF33] rounded-3xl -mt-8 md:-mt-0 p-28 md:p-20">
              <h2 className="text-2xl tracking-wide -mt-10">Sign Up</h2>
              <p className="mt-2 text-sm tracking-wide">
                Choose a sign-up method:
              </p>
              <div className="mt-10 gap-6 flex flex-col">
                <button
                  onClick={handleSignIn}
                  className="bg-transparent border border-[#425568] px-7 md:px-10 py-2 text-white text-[12px] md:text-base rounded-lg flex items-center"
                >
                  <FcGoogle className="mr-2" />
                  Sign Up with Google
                </button>
                <Link href="/sign-up">
                  <button className="bg-transparent border border-[#425568] px-7 md:px-12 py-2 text-white text-[12px] md:text-base rounded-lg flex items-center">
                    <IoMail className="mr-2" />
                    Sign Up with Email
                  </button>
                </Link>
              </div>
              <Link href="/sign-in">
                <p className="mt-20 -mb-[70px] text-xs">
                  Already a user?{" "}
                  <span className="text-[#00B2FF]">Log in.</span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
