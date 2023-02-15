import React, { Component, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";

const NavBar = ({ totalCounters }) => {
  return (
    <Navbar bg="light">
      Nav Bar
      <Badge pill bg="primary">
        {totalCounters}
      </Badge>
    </Navbar>
  );
};

export default NavBar;
