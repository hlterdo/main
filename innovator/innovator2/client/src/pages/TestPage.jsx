import React from "react";
import { Col, Row, Container } from "react-bootstrap";

import FeedCard from "../components/FeedCard";

const TestPage = () => {
  const item = {
    fullName: "Halit Erdogan",
    postText: "Check out this cool photo I took on vacation!",
    postImage: "/news.webp",
    avatarImage: "/halit.jpg",
  };

  return (
    <Container
      style={{ backgroundColor: "#F0F2F5", height: "100vh", width: "100vw" }}
    >
      <Row>
        <FeedCard item={item}></FeedCard>
      </Row>
    </Container>
  );
};

export default TestPage;
