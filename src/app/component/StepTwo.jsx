import { useState } from "react";
import { TextField } from "./TextField";
import { Logo } from "./Logo";

export const StepTwo = ({ onNext, onBack, formData }) => {
  const [email, setEmail] = useState(formData.email || "");
  const [phonenumber, setPhoneNumber] = useState(formData.phonenumber || "");
  const [password, setPassword] = useState(formData.password || "");
  const [confirmPassword, setConfirmPassword] = useState(
    formData.Confirmpassword || "",
  );

  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const isEmailValid = (value) => {
    if (value === "") return "Email cannot be empty...";
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value))
      return "Please enter a valid email address.";
    return "";
  };
  const isPhoneNumberValid = (value) => {
    if (value === "") return "Phone number cannot be empty...";
    if (!/^[0-9]+$/.test(value))
      return "Phone number can only contain numbers.";
    return "";
  };
  const isPasswordValid = (value) => {
    if (value === "") return "Password cannot be empty";
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        value,
      )
    )
      return "Min 8 chars, uppercase, lowercase, number, special character.";
    return "";
  };
  const isConfirmPasswordValid = (value) => {
    if (value === "") return "Please confirm your password.";
    if (password !== value) return "Passwords must match.";
    return "";
  };

  const handleContinue = () => {
    const eErr = isEmailValid(email);
    const pErr = isPhoneNumberValid(phonenumber);
    const passErr = isPasswordValid(password);
    const cErr = isConfirmPasswordValid(confirmPassword);

    setEmailError(eErr);
    setPhoneNumberError(pErr);
    setPasswordError(passErr);
    setConfirmPasswordError(cErr);

    if (eErr || pErr || passErr || cErr) return;
    onNext({ email, phonenumber, password, Confirmpassword: confirmPassword });
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-[#F1F1F1]">
      <div className="w-[480px] h-[655px] bg-white rounded-2xl p-10 shadow-sm flex flex-col justify-between">
        <div className="space-y-8">
          <Logo />

          <div className="space-y-2">
            <h1 className="font-bold text-2xl text-[#121316]">Join Us! 😎</h1>
            <p className="text-md text-[#8E8E8E]">
              Please provide all current information accurately.
            </p>
          </div>

          <div className="space-y-2">
            <TextField
              label="Email"
              required={true}
              value={email}
              error={emailError}
              placeholder="Email@gmail.com"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(isEmailValid(e.target.value));
              }}
            />
            <TextField
              label="Phone number"
              required={true}
              value={phonenumber}
              error={phoneNumberError}
              placeholder="Phone number"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                setPhoneNumberError(isPhoneNumberValid(e.target.value));
              }}
            />
            <TextField
              label="Password"
              required={true}
              type="password"
              value={password}
              error={passwordError}
              placeholder="**********"
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(isPasswordValid(e.target.value));
              }}
            />
            <TextField
              label="Confirm password"
              required={true}
              type="password"
              value={confirmPassword}
              error={confirmPasswordError}
              placeholder="**********"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setConfirmPasswordError(isConfirmPasswordValid(e.target.value));
              }}
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
            onClick={handleContinue}
            className="flex items-center justify-center gap-2 flex-1 h-12 bg-[#121316] rounded-lg text-white font-medium hover:bg-[#27272A] transition-all"
          >
            Continue 2/3 <span className="text-lg">›</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default StepTwo;
