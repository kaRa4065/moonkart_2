import React from "react";
import parknstay from "./Image/parknstay.svg";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import cookie from "react-cookies";

const Loginp = ({ emailorPhone, setEmailorPhone }) => {
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  ///navigate to used to navige with login pages
  const navigate = useNavigate();
  const API_URL = "http://3.16.194.5:8000/api/v1/auth/host/signin";

  const handleClick = () => {
    navigate("/SignUp");
  };

  const handleSubmit = () => {
    //Password validations
    if (password === "") {
      setPasswordErr("Password must contain at least 6 characters");
    } else {
      setPasswordErr("");
    }

    //Post the data and get response
    const loginData = {
      email: emailorPhone,
      password: password,
    };

    axios.post(API_URL, loginData).then((response) => {
      console.log(response);
      if (response.data.success === false) {
        alert(response.data.message);
      } else {
        //have to install cookies and import
        const cookieStore = cookie.save("Token1", response.data.data.token);
        window.location.reload();
        console.log(cookieStore);
      }
    });
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
          <img src={parknstay} className="py-5" alt="logo"></img>
          <h2 className="mx-5 ">Sign in</h2>
          <div className="d-flex flex-column ">
            <label className="mx-5 fs-6 fw-bold mt-2 " htmlFor="password">
              Password*
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="glowinput mx-5  p-2 rounded"
              type="text"
              autoFocus
              maxLength={10}
            ></input>
            {passwordErr && (
              <div className="text-danger ms-5 fs-6"> {passwordErr}</div>
            )}
          </div>
          <button
            className="glow-button  btn mx-5 my-2 bg-transparent shadow-sm border  text-black"
            type="submit"
            onClick={handleSubmit}
          >
            Sign in
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

          <h6 className="mx-5 my-2">New to Moonkart?</h6>

          <button
            onClick={handleClick}
            className=" bg-transparent border shadow-sm btn mx-5 mb-5  text-black rounded"
          >
            Create your Moonkart account
          </button>
        </div>
      </div>
    </form>
  );
};

export default Loginp;
