import { useState } from "react";
import axios from "axios";

function Form({ onApiCallStart, onApiResponse }) {
  const [email, setEmail] = useState("");

  const validateEmail = (value) => {
    if (!value) return "Email cannot be empty";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "Invalid email format";
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
    <form onSubmit={handleSubmit} className="w-full mb-5 md:max-w-[300px]">
      <div className="flex flex-col gap-3 mt-2 sm:flex-row sm:items-center">
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded text-sm sm:text-base"
        />
        <button
          type="submit"
          className="
            bg-[#ff7f0e]
            text-white
            px-6
            py-2
            rounded
            text-sm
            sm:text-base
            whitespace-nowrap
            hover:bg-[#e66a00]
            sm:w-auto
            flex-shrink-0
          ">
          Contact Me
        </button>
      </div>
    </form>
  );
}

export default Form;
