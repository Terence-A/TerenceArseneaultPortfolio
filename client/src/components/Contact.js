import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [textError, setTextError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError("");
    setEmailError("");
    setTextError("");
    if (formData.name === "") {
      setNameError("Name cannot be empty, please enter your name!");
      return;
    } else if (formData.email === "") {
      setEmailError("Email cannot be empty, please enter a valid email!");
      return;
    } else if (formData.message === "") {
      setTextError("Message area cannot be empty, please enter some text!");
      return;
    }
    console.log(formData.name, formData.email, formData.message);
  };

  return (
    <div className="contactForm">
      <h3>Contact Form</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <p>{nameError}</p>

        <label htmlFor="email">Email address: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <p>{emailError}</p>

        <label htmlFor="message">Message: </label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          cols="30"
          rows="10"
          onChange={handleChange}
        ></textarea>
        <p>{textError}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
