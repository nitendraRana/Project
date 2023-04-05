import { useState, useEffect } from "react";
import "./App.css";

const OtpInput = ({ setSwitchOtp }) => {
  const [otp1, setOtp1] = useState("");

  useEffect(() => {
    WindowFunction();
  });

  const WindowFunction = () => {
    if ("OTPCredential" in window) {
      window.addEventListener("DOMContentLoaded", (e) => {
        const input = document.querySelector(
          'input[autocomplete="one-time-code"]'
        );
        if (!input) return;
        const ac = new AbortController();
        const form = input.closest("form");

        if (form) {
          form.addEventListener("submit", (e) => {
            e.preventDefault();
            ac.abort();
          });
        }
        navigator.credentials
          .get({
            otp: { transport: ["sms"] },
            signal: ac.signal,
          })
          .then((otp) => {
            input.value = otp.code;
            if (form) form.submit();
          })
          .catch((err) => {
            console.error(err);
          });
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted!");
    setSwitchOtp((prev) => !prev);
  };

  return (
    <form className="otp-container" onSubmit={handleSubmit}>
      <label htmlFor="otp1">OTP</label>
      <div className="otp-inputs">
        <input
          type="text"
          id="otp1"
          inputMode="numeric"
          maxLength={4}
          value={otp1}
          onChange={(e) => setOtp1(e.target.value)}
          autoComplete="one-time-code"
          required
        />
      </div>

      <button type="submit">Verify</button>
    </form>
  );
};

export default OtpInput;
