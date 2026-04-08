import { useState } from "react";
import { TextField } from "./TextField";
import { Logo } from "./Logo";

export const StepOne = ({ onNext, formData }) => {
  const [firstname, setFirstname] = useState(formData.firstname || "");
  const [lastname, setLastname] = useState(formData.lastname || "");
  const [username, setUsername] = useState(formData.username || "");
  const [firstNameError, setFirstnameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [userNameError, setUsernameError] = useState("");

  const isFirstNameValid = (value) => {
    if (value === "") return "First name cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(value))
      return "First name cannot contain special characters or numbers.";
    return "";
  };
  const isLastNameValid = (value) => {
    if (value === "") return "Last name cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(value))
      return "Last name cannot contain special characters or numbers.";
    return "";
  };
  const isUserNameValid = (value) => {
    if (value === "") return "Username cannot be empty";
    if (!/^[A-Za-z0-9-]+$/.test(value))
      return "Bitch!!!! This username cannot be obtained!!";
    return "";
  };

  const handleContinue = () => {
    const fResult = isFirstNameValid(firstname);
    const lResult = isLastNameValid(lastname);
    const uResult = isUserNameValid(username);
    setFirstnameError(fResult);
    setLastNameError(lResult);
    setUsernameError(uResult);
    if (fResult || lResult || uResult) return;
    onNext({ firstname, lastname, username });
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
          <div className="space-y-4">
            <TextField
              value={firstname}
              onChange={(e) => {
                const v = e.target.value;
                setFirstname(v);
                setFirstnameError(isFirstNameValid(v));
              }}
              error={firstNameError}
              required
              label="First name"
              placeholder="First name"
            />
            <TextField
              value={lastname}
              onChange={(e) => {
                const v = e.target.value;
                setLastname(v);
                setLastNameError(isLastNameValid(v));
              }}
              error={lastNameError}
              required
              label="Last name"
              placeholder="Last name"
            />
            <TextField
              value={username}
              onChange={(e) => {
                const v = e.target.value;
                setUsername(v);
                setUsernameError(isUserNameValid(v));
              }}
              error={userNameError}
              required
              label="Username"
              placeholder="Username"
            />
          </div>
        </div>
        <button
          onClick={handleContinue}
          className="w-full h-12 bg-[#121316] rounded-lg text-white font-medium hover:bg-[#27272A] flex items-center justify-center gap-2 transition-all"
        >
          Continue 1/3 <span className="text-lg">›</span>
        </button>
      </div>
    </div>
  );
};
export default StepOne;
