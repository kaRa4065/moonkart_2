import React from "react";
import { Route, Routes } from "react-router";
import Login from "./Login";
import Loginp from "./Loginp";
import SignUp from "./SignUp";

const PublicRout = ({ setEmailorPhone, emailorPhone }) => {
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/Login"
          element={
            <Login
              setEmailorPhone={setEmailorPhone}
              emailorPhone={emailorPhone}
            />
          }
        />
        <Route
          exact
          path="/"
          element={
            <Login
              setEmailorPhone={setEmailorPhone}
              emailorPhone={emailorPhone}
            />
          }
        />
        <Route
          exact
          path="/Loginp"
          element={
            <Loginp
              setEmailorPhone={setEmailorPhone}
              emailorPhone={emailorPhone}
            />
          }
        />
        <Route exact path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default PublicRout;
