import React from "react";
import RightNav from "./RightNav";
import LeftNav from "./LeftNav";
import { useState } from "react";


const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="Main">
      <LeftNav nav={nav} />

      <RightNav nav={nav} handleClick={handleClick} setNav={setNav} />
    </div>
  );
};

export default Navbar;
