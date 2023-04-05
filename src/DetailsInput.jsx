import React, {useState} from "react";
// import axios from "axios";

const DetailsInput = ({setSwitchOtp}) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankDetails, setBankDetails] = useState("");
  const [address, setAddress] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    // createOtp();
    setSwitchOtp(true);
    
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="phone">Phone Number</label>
      <input
        type="tel"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />

      <label htmlFor="bank-details">Bank Details</label>
      <textarea
        id="bank-details"
        value={bankDetails}
        onChange={(e) => setBankDetails(e.target.value)}
      />

      <label htmlFor="address">Address</label>
      <input
        type="text"
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default DetailsInput;
