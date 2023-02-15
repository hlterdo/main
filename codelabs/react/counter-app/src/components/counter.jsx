import React, { Component, useState } from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const Counter = (props) => {
  console.log("props: ", props);

  return (
    <div>
      <Badge bg="warning">{props.counter.value}</Badge>
      <Button
        onClick={() => props.onIncrement(props.counter)}
        variant="primary"
      >
        Increment
      </Button>
      <Button onClick={() => props.onDelete(props.counter.id)} variant="danger">
        Delete
      </Button>
    </div>
  );
};

export default Counter;
