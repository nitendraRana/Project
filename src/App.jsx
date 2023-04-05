import React, { useState,useEffect} from "react";
import OtpInput from "./OtpInput";
import "./App.css";
import DetailsInput from "./DetailsInput";

const App = () => {
  const [switchOtp, setSwitchOtp] = useState(false);


  return (
    <>
      {switchOtp ? (
        <OtpInput setSwitchOtp={setSwitchOtp} />
      ) : (
        <DetailsInput setSwitchOtp={setSwitchOtp} />
      )}
    </>
  );
};

export default App;
