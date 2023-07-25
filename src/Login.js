import parknstay from "./Image/parknstay.svg";
import { useState } from "react";
import { useNavigate } from "react-router";

const Login = ({ emailorPhone, setEmailorPhone }) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmailorPhone(e.target.value);
  };

  const handleClick = () => {
    navigate("/SignUp");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //email and phone number validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (emailRegex.test(emailorPhone)) {
      setError("");
      navigate("/Loginp");
    } else if (phoneRegex.test(emailorPhone)) {
      setError("");
      navigate("/Loginp");
    } else {
      setError("Invalid email or mobile number");
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
        <div className="fs-5 d-flex  flex-column  align-items-center border  rounded border-opacity-25 shadow  ">
          <img className="logog py-5"src={parknstay} alt="logo"></img>
          <h2 className="mx-5 ">Sign in</h2>
          <div className="d-flex flex-column ">
            <label className="mx-5 fs-6 fw-bold mt-2 " htmlFor="email">
              Email or mobile phone number*
            </label>
            <input
              value={emailorPhone}
              onChange={handleChange}
              className="glowinput mx-5  p-2 rounded"
              type="text"
              autoFocus
              maxLength={128}
            ></input>
            {error && <div className="text-danger fs-6 ms-5"> {error}</div>}
          </div>
          <button
            className="glow-button  btn mx-5 my-2 bg-transparent shadow-sm border  text-black"
            type="submit"
            onClick={handleSubmit}
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

export default Login;
