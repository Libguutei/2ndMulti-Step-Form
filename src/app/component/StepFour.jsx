import { Logo } from "./Logo";

export const StepFour = () => {
  return (
    <div className="bg-[#F1F1F1] w-full h-screen flex justify-center items-center">
      <div className="w-[480px] bg-white rounded-2xl p-12 shadow-sm space-y-4">
        <Logo />
        <div className="space-y-2 text-left">
          <h1 className="font-bold text-2xl text-[#121316]">
            You're All Set 🔥
          </h1>
          <p className="text-md text-[#8E8E8E]">
            We have received your submission. Thank you!
          </p>
        </div>
      </div>
    </div>
  );
};
export default StepFour;
