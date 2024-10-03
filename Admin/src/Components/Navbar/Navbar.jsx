import React from "react";
import "./Navbar.css";
import person_logo from "../../assets/person_logo.png"; // Ensure this path is correct

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={person_logo} alt="Person Logo" className="nav-logo" />
    </div>
  );
}

export default Navbar;
