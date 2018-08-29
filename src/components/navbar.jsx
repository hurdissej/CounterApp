import React, { Component } from "react";

const NavBar = ({ numberOfCounters }) => {
  console.log("Nav bar rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar - Displaying {numberOfCounters} number of Counters
      </a>
    </nav>
  );
};

export default NavBar;
