import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const YolNavbar = (props) => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand>YOL</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default YolNavbar;
