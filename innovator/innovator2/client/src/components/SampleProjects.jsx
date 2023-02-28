import React from "react";

import ProjectCard from "./ProjectCard";

import { Container, Row, Col } from "react-bootstrap";

const SampleProjects = ({ projects }) => {
  return (
    <Container>
      <p>Sample Projects</p>
      <hr></hr>
      <Row>
        {projects &&
          projects.map((project, index) => (
            <Col key={"projectCard" + index}>
              <ProjectCard project={project} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default SampleProjects;
