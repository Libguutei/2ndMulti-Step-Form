import { use, useState } from "react";
import { TextField } from "./TextField";

export const StepTwo = ({ onNext, onBack, formData }) => {
  const [email, setEmail] = useState(formData.email, "");
  const [phonenumber, setPhoneNumber] = useState(formData.phonenumber, "");
  const [password, setPassword] = useState(formData.password, "");
  const [confirmPassword, setConfirmPassword] = useState(
    formData.Confirmpassword,
    "",
  );

  const isEmailValid = () => {
    if (email === "") return "Email cannot be empty...";
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
      return "Please enter a valid email address.";
  };
  const isPhoneNumberValid = () => {
    if (phonenumber === "") return "Phone number cannot be empty...";
    if (!/^[0-9]+$/.test(phonenumber))
      return "Phone number can only contain numbers.";
  };
  const isPasswordValid = () => {
    if (password === "") return "Password cannot be empty";
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password,
      )
    )
      return "Min 8 chars, uppercase, lowercase, number, special character.";
  };
  const isConfirmPasswordValid = () => {
    if (confirmPassword === "") return "Please confirm your password.";
    if (password !== confirmPassword) return "Passwords must match.";
  };

  const handleContinue = () => {
    if (
      isEmailValid() ||
      isPhoneNumberValid() ||
      isPasswordValid() ||
      isConfirmPasswordValid()
    )
      return;
    onNext();
  };
  useState(formData.email || "");
  return (
    <div className="flex justify-center min-h-screen items-center bg-[#F1F1F1]">
      <div className="w-[480px] bg-white rounded-xl p-10 shadow-lg">
        <div className="space-y-4">
          <h1 className="font-semibold text-2xl">Join Us! 😎</h1>
          <p className="text-sm text-[#8E8E8E]">
            Please provide all current information accurately.
          </p>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={isEmailValid()}
            required={true}
            label="Email"
            placeholder="honi10@Gmaiiiiiil.com"
          />
          <TextField
            value={phonenumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            error={isPhoneNumberValid()}
            required={true}
            label="Phone number"
            placeholder="160004000473115037(tdb)"
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={isPasswordValid()}
            required={true}
            type="password"
            label="Password"
            placeholder="*********"
          />
          <TextField
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={isConfirmPasswordValid()}
            required={true}
            type="password"
            label="Confirm password"
            placeholder="**********"
          />
        </div>
        <div className="flex gap-3 mt-10">
          <button
            onClick={onBack}
            className="flex justify-center items-center w-full h-11 border border-gray-300 rounded-md text-sm font-medium text-gray-700"
          >
            ← Back
          </button>
          <button
            onClick={handleContinue}
            className="flex justify-center items-center w-full h-11 bg-black rounded-md text-white text-sm font-medium"
          >
            Continue 2/3 →
          </button>
        </div>
      </div>
    </div>
  );
};
export default StepTwo;
