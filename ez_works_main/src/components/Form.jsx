import { useState } from "react";
import axios from "axios";
import styles from "./Form.module.css";

function Form({ onApiCallStart, onApiResponse }) {
  const [email, setEmail] = useState("");

  const validateEmail = (value) => {
    if (!value) {
      return "Email cannot be empty";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return "Invalid email format";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorMsg = validateEmail(email);
    if (errorMsg) {
      onApiResponse(errorMsg);
      return;
    }

    try {
      onApiCallStart();

      const response = await axios.post("https://test.ezworks.ai/api", {
        email,
      });

      if (response.data && response.data.success) {
        onApiResponse("Form Successfully Submitted!");
      } else {
        onApiResponse(response.data?.detail || "Unknown error occurred.");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.detail) {
        onApiResponse(error.response.data.detail);
      } else {
        onApiResponse("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.inputGroup}>
        <input
          type="email"
          placeholder="Email Address"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className={styles.button} type="submit">
          Contact Me
        </button>
      </div>
    </form>
  );
}

export default Form;
