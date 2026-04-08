import { use, useState } from "react";
import { TextField } from "./TextField";
import { Logo } from "./Logo";

export const StepTwo = ({ onNext, onBack, formData }) => {
  const [email, setEmail] = useState(formData.email || "");
  const [phonenumber, setPhoneNumber] = useState(formData.phonenumber || "");
  const [password, setPassword] = useState(formData.password || "");
  const [confirmPassword, setConfirmPassword] = useState(
    formData.Confirmpassword,
    "",
  );
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const isEmailValid = (value) => {
    if (value === "") return "Email cannot be empty...";
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value))
      return "Please enter a valid email address.";
  };
  const isPhoneNumberValid = (value) => {
    if (value === "") return "Phone number cannot be empty...";
    if (!/^[0-9]+$/.test(value))
      return "Phone number can only contain numbers.";
    return false;
  };
  const isPasswordValid = (value) => {
    if (value === "") return "Password cannot be empty";
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        value,
      )
    )
      return "Min 8 chars, uppercase, lowercase, number, special character.";
  };
  const isConfirmPasswordValid = (value) => {
    if (value === "") return "Please confirm your password.";
    if (password !== value) return "Passwords must match.";
  };

  const handleContinue = () => {
    const emailError = isEmailValid(email);
    const phoneNumberError = isPhoneNumberValid(phonenumber);
    const passwordError = isPasswordValid(password);
    const confirmPasswordError = isConfirmPasswordValid(confirmPassword);
    setEmailError(emailError);
    setPhoneNumberError(phoneNumberError);
    setPasswordError(passwordError);
    setConfirmPasswordError(confirmPasswordError);
    if (emailError || phoneNumberError || passwordError || confirmPasswordError)
      return;
    onNext({
      email: email,
      phonenumber: phonenumber,
      password: password,
      Confirmpassword: confirmPassword,
    });
    console.log;
  };
  useState(formData.email || "");
  return (
    <div className="flex justify-center min-h-screen items-center bg-[#F1F1F1]">
      <div className="w-[480px] bg-white rounded-xl p-10 shadow-lg">
        <div className="space-y-4">
          <Logo />
          <h1 className="font-semibold text-2xl">Join Us! 😎</h1>
          <p className="text-sm text-[#8E8E8E]">
            Please provide all current information accurately.
          </p>
          <TextField
            value={email}
            onChange={(e) => {
              const value = e.target.value;
              setEmail(value);
              const error = isEmailValid(value);
              setEmailError(error);
            }}
            error={emailError}
            required={true}
            label="Email"
            placeholder="Placeholder@gmail.com"
          />
          <TextField
            value={phonenumber}
            onChange={(e) => {
              const value = e.target.value;
              setPhoneNumber(value);
              const error = isPhoneNumberValid(value);
              setPhoneNumberError(error);
            }}
            error={phoneNumberError}
            required={true}
            label="Phone number"
            placeholder="Placeholder"
          />
          <TextField
            value={password}
            onChange={(e) => {
              const value = e.target.value;
              setPassword(value);
              const error = isPasswordValid(value);
              setPasswordError(error);
            }}
            error={passwordError}
            required={true}
            type="password"
            label="Password"
            placeholder="**********"
          />
          <TextField
            value={confirmPassword}
            onChange={(e) => {
              const value = e.target.value;
              setConfirmPassword(value);
              const error = isConfirmPasswordValid(value);
              setConfirmPasswordError(error);
            }}
            error={confirmPasswordError}
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
            Continue 3/3 →
          </button>
        </div>
      </div>
    </div>
  );
};
export default StepTwo;
