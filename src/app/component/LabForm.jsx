import React from "react";

export default function StepOne() {
  return (
    <div className="step-card">
      <h2>Step 1: Join Us! 😎</h2>
      <p>Please provide your name.</p>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="text" placeholder="User Name" />
    </div>
  );
}
