import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import Listing from "./Listing";
import { Route, Routes } from "react-router";
import AddPage from "./AddPage";

const RightNav = ({ nav, handleClick, fetchdata }) => {
  return (
    <div className="leftside">
      <nav className="hori  border-bottom">
        <div className="horibar ">
          {nav === true ? (
            <a onClick={handleClick} className="p-3">
              <AiOutlineArrowLeft className="arrow" />
            </a>
          ) : (
            <a onClick={handleClick} className="p-3">
              {" "}
              <GiHamburgerMenu className="arrow" />
            </a>
          )}

          <a className="but" href="oko">
            All Properties
          </a>
        </div>
        <CgProfile className="prof "></CgProfile>
      </nav>
      <Routes className="Side">
        <Route path="/AddPage" element={<AddPage />} />
        <Route path="/" element={<Listing />} />
      </Routes>
    </div>
  );
};

export default RightNav;
