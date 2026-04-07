import { use, useState } from "react";
import { TextField } from "./TextField";

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
  useState(formData.firstname || "");
  return (
    <div className="flex justify-center min-h-screen items-center bg-[#F1F1F1]">
      <div className="w-[480px] bg-white rounded-xl p-10 shadow-lg">
        <div className="space-y-4">
          <h1 className="font-semibold text-2xl">Join Us! 😎</h1>
          <p className="text-sm text-[#8E8E8E]">
            Please provide all current information accurately.
          </p>
          <TextField
            value={firstname}
            onChange={(e) => {
              const value = e.target.value;
              setFirstname(value);
              const error = isFirstNameValid(value);
              setFirstnameError(error);
            }}
            error={firstNameError}
            required={true}
            label="First name"
            placeholder="A"
          />
          <TextField
            value={lastname}
            onChange={(e) => {
              const value = e.target.value;
              setLastname(value);
              const error = isLastNameValid(value);
              setLastNameError(error);
            }}
            error={lastNameError}
            required={true}
            label="Last name"
            placeholder="MiaKhorol"
          />
          <TextField
            value={username}
            onChange={(e) => {
              const value = e.target.value;
              setUsername(value);
              const error = isUserNameValid(value);
              setUsernameError(error);
            }}
            error={userNameError}
            required={true}
            label="Username"
            placeholder="A.miaKHorol69"
          />
        </div>
        <button
          onClick={handleContinue}
          className="flex justify-center items-center w-full h-11 mt-16 bg-black rounded-md text-white text-sm font-medium gap-2"
        >
          Continue 1/3 →
        </button>
      </div>
    </div>
  );
};
export default StepOne;
