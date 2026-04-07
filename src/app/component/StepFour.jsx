import React from "react";
import { Logo } from "./Logo";
export const StepFour = () => {
  return (
    <div className=" bg-[#f1f1f1] w-full h-screen flex justify-center items-center">
      <div className="w-120 bg-white h-40 rounded-md flex-col p-8 justify-start ">
        <Logo />
        <h1 className="font-semibold text-2xl">You're All Set 🔥</h1>
        <p className="text-sm text-[#8E8E8E]">
          We have received your submission. Thank you!
        </p>
      </div>
    </div>
  );
};
