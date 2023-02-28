import React, { useState } from "react";
import { Card } from "react-bootstrap";

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    window.location.href = project.url;
  };

  return (
    <Card
      style={{ backgroundColor: isHovered ? "lightgrey" : "white" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.mission}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
