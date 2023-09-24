import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

        <label htmlFor="email">Email address: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="message">Message: </label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          cols="30"
          rows="10"
          onChange={handleChange}
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
