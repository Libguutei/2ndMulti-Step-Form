"use client";
import { useState } from "react";
import StepOne from "./component/StepOne";
import StepTwo from "./component/StepTwo";
import StepThree from "./component/StepThree";

export default function Home() {
  const [currentStepCount, setCurrentStepCount] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setCurrentStepCount((prev) => prev + 1);
  };
  const handleBack = () => setCurrentStepCount((prev) => prev - 1);
  const CurrentStepComponent = [StepOne, StepTwo, StepThree][currentStepCount];

  return (
    <div>
      <CurrentStepComponent
        onNext={handleNext}
        onBack={handleBack}
        formData={formData}
      />
    </div>
  );
}
