import React from "react";
import { Card, Image, Row, Col } from "react-bootstrap";

const FeedCard = ({ item }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Row>
          <Col xs={3}>
            <Image
              style={{ maxWidth: "100%", maxHeight: item.fullName.length * 10 }}
              className="mr-3"
              src={item.avatarImage}
              roundedCircle
            />
          </Col>
          <Col xs={9}>
            <h5>{item.fullName}</h5>
            <p>{item.postText}</p>
            <Image src={item.postImage} fluid />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default FeedCard;
