import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ImageButton = ({ text, imageUrl, imageAltText, Icon, onClick }) => {
  const [isHover, setIsHover] = useState(false);

  const buttonStyle = {
    background: isHover ? "#2196f3" : "transparent",
    color: isHover ? "white" : "black",
  };

  const imgStyle = {
    width: "50px",
    height: "50px",
  };

  const buttonIcon = () => {
    if (!Icon && imageUrl) {
      return (
        <div>
          <img src={imageUrl} style={imgStyle} alt={imageAltText} />
        </div>
      );
    } else if (Icon && !imageUrl) {
      return (
        <div>
          <Icon style={imgStyle}></Icon>
        </div>
      );
    }
  };

  return (
    <Button
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {buttonIcon()}
      {text}
    </Button>
  );
};

export default ImageButton;
