import { useState } from "react";
import Header from "../components/Header";
import RememberSection from "../components/RememberSection";
import SlashIcon from "../assets/not-slashed.svg";
import Eye from "../assets/eye.svg";
import MessageIcon from "../assets/message.svg";

import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();

  const db = {
    email,
    password,
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setVerified(false);
    } else if (emailRegex && password.length < 1) {
      setVerified(false);
    } else if (emailRegex.test(email) && password) {
      setVerified(true);
    } else {
      setVerified(false);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setVerified(false);
    } else if (emailRegex && password.length < 2) {
      setVerified(false);
    } else if (emailRegex.test(email) && password) {
      setVerified(true);
    } else {
      setVerified(false);
    }
  };

  const changeEye = () => {
    setEye(!eye);
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    event.preventDefault();

    if (email === "" || emailRegex.test(email) === false) {
      toast(`Please input a valid email`);
      return;
    }

    if (password === "") {
      toast(`Please input a valid password`);
      return;
    }

    if (emailRegex.test(email) && db.password !== "") {
      setVerified(true);
      db.email = email;
      db.password = password;

      console.log(db);

      navigate("/landing");
    }

    console.log(db);
  };
  return (
    <div className="m-auto flex flex-col gap-6 lg:w-[400px]">
      <Header
        heading={"Log In"}
        paragraph={"Enter your credentials to access you account"}
      />
      <Toaster />
      <form name="email" method="post" onSubmit={handleSubmit}>
        <div>
          <label className="font-medium text-sm text-[#101928]" htmlFor="email">
            EMAIL ADDRESS
          </label>
          <div className="w-full mt-1 mb-6 flex items-center relative placeholder-[#98A2B3]">
            <input
              className="w-full p-4 rounded-lg border border-[#D0D5DD] hover:border-[#FA9874] appearance-none outline-none shadow-md"
              id="email"
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
              data-testid="email"
            />
            <img className="absolute right-6" src={MessageIcon} alt="" />
          </div>
        </div>

        <div className="gap-2">
          <label
            className="font-medium text-sm text-[#101928]"
            htmlFor="password"
          >
            PASSWORD
          </label>
          <div className="w-full mt-1 mb-6 flex items-center relative placeholder-[#98A2B3]">
            <input
              className="w-full p-4 rounded-lg border border-[#D0D5DD] hover:border-[#FA9874] appearance-none outline-none shadow-md"
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={handlePasswordChange}
              data-testid="password"
            />
            <button
              onClick={changeEye}
              className="absolute ml-2 right-6"
              type="button"
            >
              <img className="slash" src={eye ? SlashIcon : Eye} alt="" />
            </button>
          </div>
        </div>
        <RememberSection />
        <button
          className={`form-button w-full font-semibold text-base text-white py-4 px-6 rounded-lg mb-4 ${
            verified ? "bg-[#EB5017]" : "bg-[#EB5017] opacity-50"
          }`}
          type="submit"
          data-testid="submit"
        >
          Log into Account
        </button>
      </form>
    </div>
  );
};

export default Form;
