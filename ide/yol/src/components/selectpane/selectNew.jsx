import React from "react";
import Modal from "react-bootstrap/Modal";

import ImageButton from "../common/imageButton";

import { Database } from "react-bootstrap-icons";

const SelectNew = (props) => {
  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>Create a new ...</Modal.Header>
      <Modal.Body>
        <ImageButton
          text="Dataset"
          key="dataset"
          Icon={Database}
          onClick={props.onSelectDatasetClick}
        ></ImageButton>
      </Modal.Body>
    </Modal>
  );
};

export default SelectNew;
