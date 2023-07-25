import React, { useState } from "react";
import parknstay from "./Image/parknstay.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (name.trim() === "") {
      setNameErr("Name field is required");
    } else {
      setNameErr("");
    }

    if (emailRegex.test(email)) {
      setError("");
    } else {
      setError("Invalid email format");
    }
    if (phoneRegex.test(mobileNumber)) {
      setMobileError("");
    } else {
      setMobileError("Invalid mobile number format");
    }
    if (passwordRegex.test(password)) {
      setPasswordErr("");
    } else {
      setPasswordErr("Password must contain at least 6 characters");
    }
    if ({ name, mobileNumber, password, email } !== "") {
      setMessage("Account created");
    } else {
      setMessage("");
    }
    if (message === "") {
      console.log("no");
    } else {
      navigate("/Home");
    }
  };

  return (
    <form
      className=" d-flex vh-100 "
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="vstack justify-content-center   align-items-center  ">
        <div className="fs-5 d-flex  flex-column  align-items-center border  rounded border-opacity-25 shadow ">
          <img src={parknstay} alt="logo"></img>
          <h2 className="mx-5 ">Create account</h2>
          <div className="d-flex flex-column ">
            <label className="mx-5 fs-6 fw-bold mt-2 " htmlFor="name">
              Your name*
            </label>
            <input
              className="glowinput mx-5  p-2 rounded"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
              maxLength={128}
            ></input>
            {nameErr && <div className="text-danger ms-5 fs-6">{nameErr}</div>}
            <label className="mx-5 fs-6 fw-bold mt-2 " htmlFor="mobilenumber">
              Mobile number*
            </label>
            <input
              className="glowinput mx-5  p-2 rounded"
              type="text"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              maxLength={10}
            ></input>
            {mobileError && (
              <div className="text-danger ms-5 fs-6">{mobileError}</div>
            )}
            <label className="mx-5 fs-6 fw-bold mt-2 " htmlFor="email">
              Email(optional)
            </label>
            <input
              className="glowinput mx-5  p-2 rounded"
              type="text"
              maxLength={128}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            {error && <div className="text-danger ms-5 fs-6">{error}</div>}
            <label className="mx-5 fs-6 fw-bold mt-2 " htmlFor="password">
              Password*
            </label>
            <input
              className="glowinput mx-5  p-2 rounded"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              maxLength={128}
            ></input>
            {passwordErr && (
              <div className="text-danger ms-5 fs-6">{passwordErr}</div>
            )}
          </div>
          <p className=" mx-5 my-2 fs-6">
            By enrolling your mobile phone number,you consent
            <br />
            to receive automated security notifications via text
            <br />
            message from Amazon. Message and data rates may
            <br />
            apply.
          </p>
          <button
            className="glow-button  btn mx-5 my-2 bg-transparent shadow-sm border  text-black"
            type="submit"
            onClick={handleClick}
          >
            Continue
          </button>
          <p className="lh-lg mx-5 my-2 fs-6">
            By continuing, you agree to Amazon's
            <br />
            <a
              className="icon-link-hover text-decoration-none bs-text-opacity-75"
              href="sk"
            >
              Conditions of Use{" "}
            </a>
            and{" "}
            <a className="text-decoration-none bs-text-opacity-75" href="sk">
              Privacy Notice.
            </a>
          </p>
          <a className="text-decoration-none bs-text-opacity-75 fs-6 " href="s">
            Need help?
          </a>
          <h6 className=" mt-2 mb-5">
            Already have an account?{" "}
            <Link
              className="text-decoration-none bs-text-opacity-75 "
              to="/Login"
            >
              Sign in
            </Link>
          </h6>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
