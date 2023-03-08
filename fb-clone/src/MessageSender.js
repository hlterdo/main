import React from "react";
import "./MessageSender.css";
import { Avatar } from "@mui/material";

function MessageSender() {
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the default behavior
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input
            className="messageSender__input"
            placeholder="What's on your mind?"
          />
          <input placeholder="image URL (optional)" />

          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option"></div>
      </div>
    </div>
  );
}

export default MessageSender;
