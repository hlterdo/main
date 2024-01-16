import React, { useState } from "react";
import "./MessageSender.css";
import { useStateValue } from "../StateProvider";
import { useParams } from "react-router-dom";
import { Avatar } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import db from "../Firebase";

function MessageSender({ postId }) {
  const [{ user }] = useStateValue();
  const { id } = useParams();
  const [showShareWithTeam, setShowShareWithTeam] = useState(true);
  const [showPostEditor, setShowPostEditor] = useState(false);

  const savePost = (quillContent) => {
    async function addPost() {
      try {
        const collectionRef = collection(db, "projects", id, "posts");
        const postDoc = {
          authorEmail: user.email,
          authorName: user.displayName,
          authorPhotoURL: user.photoURL,
          quillContent: quillContent,
          timestamp: Date.now(),
          type: "quill",
          authorType: "teamMember",
        };

        const postDocRef = await addDoc(collectionRef, postDoc);
        console.log("Successfully added: ", postDocRef.id);
      } catch (e) {
        console.error(e);
      }
    }

    addPost();
  };

  const handlePostMessageClick = () => {
    setShowShareWithTeam(false);
    setShowPostEditor(true);
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        {showShareWithTeam && (
          <input
            onClick={handlePostMessageClick}
            placeholder="Share with team mates (doesn't work)."
          />
        )}
      </div>
    </div>
  );
}

export default MessageSender;
