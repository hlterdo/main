import React, { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Actions from "./actions";
import Data from "./data";
import Metadata from "./metadata";

const Mainpane = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Metadata></Metadata>
        </Row>
        <Row>
          <Actions></Actions>
        </Row>
        <Row>
          <Data></Data>
        </Row>
      </Container>
    </div>
  );
};

export default Mainpane;
