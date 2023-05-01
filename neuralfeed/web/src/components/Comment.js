import React, { useState } from "react";
import { Avatar } from "@mui/material";
import { useStateValue } from "../StateProvider";
import "./Comment.css";
import db from "../Firebase";
import { collection, addDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";

const Comment = ({ postId }) => {
  const [{ user }] = useStateValue();
  const { id } = useParams();

  const [comment, setComment] = useState("");

  const handleCommentEnter = () => {
    console.log("Comment entered:", comment);

    async function addComment() {
      try {
        const localCommentDoc = {
          authorName: user.displayName,
          authorEmail: user.email,
          authorPhotoURL: user.photoURL,
          text: comment,
          timestamp: Date.now(),
        };

        const collectionRef = collection(
          db,
          "projects",
          id,
          "posts",
          postId,
          "comments"
        );
        const commentDocRef = await addDoc(collectionRef, localCommentDoc);
        console.log("Comment successfully added: ", commentDocRef.id);
        setComment("");
      } catch (e) {
        console.log("error:", e);
      }
    }

    addComment();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleCommentEnter();
    }
  };

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <div className="comment">
      <Avatar src={user.photoURL}></Avatar>
      <input
        placeholder="Add a comment"
        value={comment}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      ></input>
    </div>
  );
};

export default Comment;
