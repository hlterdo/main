import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

import ImageButton from "../common/imageButton";

import { Database } from "react-bootstrap-icons";

const SelectSampleDataset = (props) => {
  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>Select a sample dataset ...</Modal.Header>
      <Modal.Body>
        <ImageButton
          key="hotelCancellations"
          text="Hotel Cancellations"
          Icon={Database}
          onClick={props.onHotelReservationsClick}
        ></ImageButton>
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={props.onImportClick}
          disabled={props.importDisabled}
        >
          Import
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SelectSampleDataset;
