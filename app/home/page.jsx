import React from "react";
import { LuArrowLeftSquare, LuArrowRightSquare } from "react-icons/lu";

export default function page() {
  return (
    <div className="bg-[#192734] h-screen overflow-hidden">
      <div className="flex justify-between px-10 md:px-40 py-7">
        <div className="">
          <h1 className="text-xl font-bold text-center">
            Lo<span className="bg-[#00B2FF] rounded-xl p-1 ml-1.5">GO</span>
          </h1>
        </div>
        <div className="">
          <h1 className="text-xl text-[#00B2FF] font-bold text-center">
            Sign Out
          </h1>
        </div>
      </div>
      <div className="border border-[#425568]"></div>
      <div className="flex justify-between px-10 md:px-40 py-7">
        <div>
          <h1 className="text-xl">Popular Topics 🔥</h1>
        </div>
        <div className="flex gap-5 text-xl">
          <LuArrowLeftSquare className="text-gray-500" />
          <LuArrowRightSquare className="text-white" />
        </div>
      </div>
      <div className="flex flex-row gap-20 px-10 md:px-40 py-7">
        <div className="w-[180px] md:w-[360px] h-[284px] md:h-[222px] rounded-xl border-[2px] border-[#425568] flex flex-col">
          <div className="flex items-center flex-col md:flex-row md:justify-between">
            <div>
              <img src="/rocket.png" alt="" className="pt-5" />
            </div>
            <div className="w-[160px] md:w-[208px] h-11 md:h-[85px] mt-5 mx-2">
              <h1 className="text-xs md:text-base font-bold">
                Introduction to Rocket Science
              </h1>
              <h1 className="text-[10px] md:text-xs opacity-75">
                Covers fundamentals, design, construction, operation and
                programming of robots. Covers fundamentals, design,
                construction, operation and{" "}
              </h1>
            </div>
          </div>
          <div className="hidden w-[336px] h-12 mx-auto mt-6 rounded-xl border border-[#425568] md:flex items-center justify-center">
            <h1 className="text-base font-bold">READ</h1>
          </div>
        </div>
        <div className="hidden w-[180px] md:w-[360px] h-[284px] md:h-[222px] rounded-xl border-[2px] border-[#425568] md:flex flex-col">
          <div className="flex items-center flex-col md:flex-row md:justify-between">
            <div>
              <img src="/atom.png" alt="" className="pt-5" />
            </div>
            <div className="w-[160px] md:w-[208px] h-11 md:h-[85px] mt-5 mx-2">
              <h1 className="text-xs font-bold">Astro Physics</h1>
              <h1 className="text-xs opacity-75">
                Covers fundamentals, design, construction, operation and
                programming of robots. Covers fundamentals, design,
                construction, operation and{" "}
              </h1>
            </div>
          </div>
          <div className="hidden w-[336px] h-12 mx-auto mt-6 rounded-xl border border-[#425568] md:flex items-center justify-center">
            <h1 className="text-base font-bold">READ</h1>
          </div>
        </div>
        <div className="w-[180px] md:w-[360px] h-[284px] md:h-[222px] rounded-xl border-[2px] border-[#425568] flex flex-col">
          <div className="flex items-center flex-col md:flex-row md:justify-between">
            <div>
              <img src="/ai.png" alt="" className="pt-5" />
            </div>
            <div className="w-[160px] md:w-[208px] h-11 md:h-[85px] mt-5 mx-2">
              <h1 className="text-xs md:text-base font-bold">
                Artificial Intelligence
              </h1>
              <h1 className="text-[10px] md:text-xs opacity-75">
                Covers fundamentals, design, construction, operation and
                programming of robots.{" "}
              </h1>
            </div>
          </div>
          <div className="hidden w-[336px] h-12 mx-auto mt-6 rounded-xl border border-[#425568] md:flex items-center justify-center">
            <h1 className="text-base font-bold">READ</h1>
          </div>
        </div>
        <div className="w-[360px] h-[222px] rounded-xl border border-[#425568] flex flex-col ml-14">
          <div className="flex items-center justify-between">
            <div>
              <img src="/telescope.png" alt="" className="pt-5" />
            </div>
            <div className="w-[208px] h-[85px]">
              <h1 className="text-base font-bold"></h1>
              <h1 className="text-xs opacity-75"></h1>
            </div>
          </div>
          <div className="w-[336px] h-12 mx-auto mt-6 rounded-xl border border-[#425568] flex items-center justify-center">
            <h1 className="text-base font-bold">READ</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
