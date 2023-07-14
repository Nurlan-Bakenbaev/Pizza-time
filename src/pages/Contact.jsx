import React from "react";
import { useState } from "react";
import "../styles/ContactUs.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    setName("");
    setEmail("");
    setMobile("")
  };

  return (
    <>
      <div className="wrappper">
        <form onSubmit={handleSubmit} className="contact-form">
          <h2>Contact Us</h2>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              placeholder="Mr.John"
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <label htmlFor="mobile">Mobile:</label>
            <input
              placeholder="+12345678"
              type="number"
              id="mobile"
              value={mobile}
              onChange={handleMobileChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
