import { FcGoogle } from "react-icons/fc";
import { IoMail } from "react-icons/io5";

import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function SignUp() {
  return (
    <div className={poppins.className}>
      <div className="flex overflow-hidden">
        <div className="w-1/2">
          <img src="/img1.jpg" alt="Image" className="w-full h-screen" />
        </div>
        <div className="w-1/2 bg-[#071829] flex flex-col justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="-mt-16">
              <h1 className="text-4xl font-bold text-center">
                Lo<span className="bg-[#00B2FF] rounded-xl p-1 ml-1.5">GO</span>
              </h1>
              <h1 className="text-center mt-4 tracking-wide text-base">
                Journey to a trillion miles starts from here!!
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center mt-16">
            <div className="text-center border border-[#FFFFFF33] rounded-3xl p-20">
              <h2 className="text-2xl tracking-wide -mt-10">Sign Up</h2>
              <p className="mt-2 text-sm tracking-wide">
                Choose a sign-up method:
              </p>
              <div className="mt-10 gap-6 flex flex-col">
                <button className="bg-transparent border border-[#425568] px-10 py-2 text-white rounded-lg flex items-center">
                  <FcGoogle className="mr-2" />
                  Sign Up with Google
                </button>
                <button className="bg-transparent border border-[#425568] px-10 py-2 text-white rounded-lg flex items-center">
                  <IoMail className="mr-2" />
                  Sign Up with Email
                </button>
              </div>
              <p className="mt-20 -mb-[70px] text-xs">
                Already a user? <span className="text-[#00B2FF]">Log in.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
