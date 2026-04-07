import { useState } from "react";
import ImageField from "./ImageField";
import { Logo } from "./Logo";
import TextField from "./TextField";

export const StepThree = ({
  onBack,
  handleContinue,
  formData,
  setFormData,
}) => {
  // Алдааны мессежүүдийг хадгалах state
  const [errors, setErrors] = useState({
    birthday: "",
    image: "",
  });

  // 1. Огноо шалгах функц
  const validateDate = () => {
    if (!formData?.birthday) {
      return "Please select your birthday.";
    }
    const selectedDate = new Date(formData.birthday);
    const today = new Date();
    if (selectedDate > today) {
      return "Birthday cannot be in the future.";
    }
    return ""; // Алдаагүй
  };

  // 2. Зураг шалгах функц
  const validateImage = () => {
    if (!formData?.image) {
      return "Please upload a profile picture.";
    }
    return ""; // Алдаагүй
  };

  const handleNextStep = () => {
    const dateError = validateDate();
    const imageError = validateImage();

    // Алдаануудыг state-д хадгалж харуулна
    setErrors({
      birthday: dateError,
      image: imageError,
    });

    // Хэрэв ямар нэг алдаа байвал цаашаа явахгүй зогсоно
    if (dateError || imageError) {
      return;
    }

    // Бүх зүйл зүгээр бол Home компонент руу өгөгдлөө явуулна
    handleContinue();
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#F1F1F1]">
      <div className="w-[480px] min-h-[655px] bg-white rounded-xl p-10 shadow-lg flex flex-col justify-between">
        <div className="space-y-6">
          <Logo />
          <div>
            <h1 className="font-semibold text-2xl">Join Us! 😎</h1>
            <p className="text-sm text-[#8E8E8E]">
              Please provide all current information accurately.
            </p>
          </div>

          {/* Birthday Input */}
          <TextField
            type="date"
            label="Date of birth"
            required={true}
            value={formData?.birthday || ""}
            error={errors.birthday}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, birthday: e.target.value }));
              setErrors((prev) => ({ ...prev, birthday: "" })); // Бичиж эхлэхэд алдааг арилгана
            }}
          />

          {/* Profile Image Input */}
          <ImageField
            label="Profile picture"
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
            onCancel={() => {
              setFormData((prev) => ({ ...prev, image: "" }));
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-10">
          <button
            onClick={onBack}
            className="flex justify-center items-center w-1/3 h-11 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all"
          >
            ← Back
          </button>
          <button
            onClick={handleNextStep}
            className="flex justify-center items-center w-2/3 h-11 bg-black rounded-md text-white text-sm font-medium hover:bg-gray-800 transition-all"
          >
            Submit 3/3
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
