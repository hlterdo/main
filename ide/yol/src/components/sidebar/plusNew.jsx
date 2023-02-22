import React, { useState } from "react";
import { Button, Form, Image } from "react-bootstrap/";
import Modal from "react-bootstrap/Modal";
import { Container, Row, Col } from "react-bootstrap";

const PlusNew = (props) => {
  const options = [
    {
      icon: "🍎",
      label: "Apple",
      image: "https://via.placeholder.com/150x150",
    },
    {
      icon: "🍇",
      label: "Grape",
      image: "https://via.placeholder.com/150x150",
    },
    {
      icon: "🍌",
      label: "Banana",
      image: "https://via.placeholder.com/150x150",
    },
    {
      icon: "🍊",
      label: "Orange",
      image: "https://via.placeholder.com/150x150",
    },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  function handleNextClick() {
    // Do something when the next button is clicked, such as navigating to another page.
  }

  function handleOptionClick(option) {
    setSelectedOption(option);
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Select a dataset
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {options.map((option) => (
          <Col key={option.label}>
            <Image
              src={option.image}
              onClick={() => handleOptionClick(option)}
              style={{
                cursor: "pointer",
                border: selectedOption === option ? "5px solid blue" : "none",
              }}
            />
            <div style={{ textAlign: "center" }}>
              {option.icon} {option.label}
            </div>
          </Col>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PlusNew;
