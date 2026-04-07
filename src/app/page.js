"use client";
import { useState } from "react";
import StepOne from "./component/StepOne";
import StepTwo from "./component/StepTwo";
import StepThree from "./component/StepThree";
import { StepFour } from "./component/StepFour";

export default function Home() {
  const [currentStepCount, setCurrentStepCount] = useState(0);
  const [formData, setFormData] = useState({});
  const [form, setForm] = useState();

  const handleNext = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setCurrentStepCount((prev) => prev + 1);
  };
  const handleBack = () => setCurrentStepCount((prev) => prev - 1);
  const CurrentStepComponent = [StepOne, StepTwo, StepThree, StepFour][
    currentStepCount
  ];

  return (
    <div>
      <CurrentStepComponent
        onNext={handleNext}
        setFormData={setFormData}
        onBack={handleBack}
        formData={formData}
        form={form}
        setForm={setForm}
      />
    </div>
  );
}
