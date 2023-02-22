import React, { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Bottom from "./bottom";
import Navigator from "./navigator";
import Top from "./top";

const Sidebar = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Top></Top>
        </Row>
        <Row>
          <Navigator></Navigator>
        </Row>
        <Row>
          <Bottom></Bottom>
        </Row>
      </Container>
    </div>
  );
};

export default Sidebar;
