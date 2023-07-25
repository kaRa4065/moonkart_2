import React from "react";
import { Navigate, Route, Routes } from "react-router";
import AddPage from "./AddPage";
import Navbar from "./Navbar";
import Listing from "./Listing";

const PrivateRoute = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* have toset every path to the privateroute page */}
        <Route exact path="/Login" element={<Navigate to={"/"} />}></Route>
        <Route path="/Loginp" element={<Navigate to={"/"} />}></Route>
        {/* <Route path="/" element={<Listing />} /> */}
      </Routes>
    </div>
  );
};

export default PrivateRoute;
