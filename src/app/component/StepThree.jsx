import { useState } from "react";
import ImageField from "./ImageField";
import { Logo } from "./Logo";
import TextField from "./TextField";

export const StepThree = ({ onBack, formData, setFormData, onNext }) => {
  const [errors, setErrors] = useState({
    birthday: "",
    image: "",
  });

  const validateDate = () => {
    if (!formData?.birthday) return "Please select your birthday.";
    const selectedDate = new Date(formData.birthday);
    if (selectedDate > new Date()) return "Birthday cannot be in the future.";
    return "";
  };

  const validateImage = () => {
    if (!formData?.image) return "Please upload a profile picture.";
    return "";
  };

  const handleNextStep = () => {
    const dateError = validateDate();
    const imageError = validateImage();
    setErrors({ birthday: dateError, image: imageError });

    if (dateError || imageError) return;
    onNext();
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#F1F1F1]">
      <div className="w-[480px] h-[655px] bg-white rounded-2xl p-10 shadow-sm flex flex-col justify-between">
        <div className="space-y-8">
          <Logo />
          <div className="space-y-2">
            <h1 className="font-bold text-2xl text-[#121316]">Join Us! 😎</h1>
            <p className="text-md text-[#8E8E8E]">
              Please provide all current information accurately.
            </p>
          </div>

          <div className="space-y-6">
            {/* Birthday Input */}
            <TextField
              label="Date of birth"
              required={true}
              value={formData?.birthday || ""}
              error={errors.birthday}
              type={formData?.birthday ? "date" : "text"}
              placeholder="----/--/--"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => {
                if (!e.target.value) e.target.type = "text";
              }}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, birthday: e.target.value }));
                setErrors((prev) => ({ ...prev, birthday: "" }));
              }}
            />

            {/* Profile Image Input */}
            <ImageField
              label="Profile image"
              required={true}
              value={formData?.image || ""}
              error={errors.image}
              onChange={(e) => {
                if (e.target.files[0]) {
                  const imageValue = URL.createObjectURL(e.target.files[0]);
                  setFormData((prev) => ({ ...prev, image: imageValue }));
                  setErrors((prev) => ({ ...prev, image: "" }));
                }
              }}
              onCancel={() => setFormData((prev) => ({ ...prev, image: "" }))}
            />
          </div>
        </div>

        <div className="flex gap-3 w-full">
          <button
            onClick={onBack}
            className="flex items-center justify-center gap-2 w-[128px] h-12 border border-[#E4E4E7] rounded-lg text-[#121316] font-medium hover:bg-gray-50 transition-all"
          >
            <span className="text-lg">‹</span> Back
          </button>

          <button
            onClick={handleNextStep}
            className="flex items-center justify-center gap-2 flex-1 h-12 bg-[#121316] rounded-lg text-white font-medium hover:bg-[#27272A] transition-all"
          >
            Continue 3/3 <span className="text-lg">›</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
