import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import FeedCard from "../components/FeedCard";
import { Container, Col, Row } from "react-bootstrap";

const ProjectPage = () => {
  const { id } = useParams();
  console.log("id", id);

  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`/api/projectfeed/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data: ", data);
        setProject(data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <Container>
      {project &&
        project.feed.map((feedItem, index) => (
          <Row key={"feedItem" + index}>
            <FeedCard item={feedItem} />
          </Row>
        ))}
    </Container>
  );
};

export default ProjectPage;
