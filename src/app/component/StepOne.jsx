import { useState } from "react";
import { TextField } from "./TextField";

export const StepOne = ({ onNext, formData }) => {
  const [firstname, setFirstname] = useState(formData.firstname, "");
  const [lastname, setLastname] = useState(formData.lastname, "");
  const [username, setUsername] = useState(formData.username, "");

  const isFirstNameValid = () => {
    if (firstname === "") return "First name cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(firstname))
      return "First name cannot contain special characters or numbers.";
  };
  const isLastNameValid = () => {
    if (lastname === "") return "Last name cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(lastname))
      return "Last name cannot contain special characters or numbers.";
  };
  const isUserNameValid = () => {
    if (username === "") return "Username cannot be empty";
    if (!/^[A-Za-z0-9-]+$/.test(username))
      return "Bitch!!!! This username cannot be obtained!!";
  };

  const handleContinue = () => {
    // Issubmitted(true);
    if (isFirstNameValid() || isLastNameValid() || isUserNameValid()) return;
    onNext({ firstname: firstname, lastname: lastname, username: username });
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
            onChange={(e) => setFirstname(e.target.value)}
            error={isFirstNameValid()}
            required={true}
            label="First name"
            placeholder="A"
          />
          <TextField
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            error={isLastNameValid()}
            required={true}
            label="Last name"
            placeholder="MiaKhorol"
          />
          <TextField
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={isUserNameValid()}
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
