import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Plus } from "react-bootstrap-icons";

import PlusNew from "./plusNew";

const Bottom = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  const handleOnClickPlusNew = () => {};

  return (
    <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        <Plus /> New
      </Button>

      <PlusNew show={modalShow} onHide={() => setModalShow(false)}></PlusNew>
    </div>
  );
};

export default Bottom;
