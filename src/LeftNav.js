import React from "react";
import parknstay from "./Image/white.svg";
import { AiFillHome } from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa";
import { LuBird } from "react-icons/lu";
import { Link } from "react-router-dom";

const LeftNav = ({ nav }) => {
  return (
    <div className="Leftnavbar">
      {nav === true ? (
        <nav className="verti border-end">
          <img className="logo" src={parknstay} alt="logo"></img>

          <Link className="nava" to="/">
            <AiFillHome className="icon" /> Properties
          </Link>

          <Link className="nava" to="">
            <FaBookOpen className="icon" />
            {` Bookings`}
          </Link>
        </nav>
      ) : (
        <nav className="false">
          <a className="logo1" href="d" alt="logo">
            <LuBird className="logo2" />
          </a>

          <a className="logo1" href="lskl">
            <AiFillHome className="logo2" />
          </a>

          <a className="logo1" href="lskl">
            <FaBookOpen className="logo2" />
          </a>
        </nav>
      )}
    </div>
  );
};

export default LeftNav;
