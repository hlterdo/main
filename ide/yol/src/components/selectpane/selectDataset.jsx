import React from "react";
import Modal from "react-bootstrap/Modal";

import ImageButton from "../common/imageButton";
import { Modal, Button, Form } from "react-bootstrap";

import { Database } from "react-bootstrap-icons";

const SelectDataset = (props) => {
  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>Select a dataset ...</Modal.Header>
      <Modal.Body>
        <ImageButton
          key="sampleDatasets"
          text="Sample Datasets"
          Icon={Database}
          onClick={props.onSelectSampleDatasetClick}
        ></ImageButton>
      </Modal.Body>
    </Modal>
  );
};

export default SelectDataset;
