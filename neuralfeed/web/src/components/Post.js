import React, { useState, useEffect } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import YouTube from "react-youtube";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import GitHubIcon from "@mui/icons-material/GitHub";
import Comment from "./Comment";
import { useStateValue } from "../StateProvider";
import { onSnapshot, collection, query } from "firebase/firestore";
import db from "../Firebase";
import { useParams } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import EventIcon from "@mui/icons-material/Event";
// TODO: Check the keys so that they are actually unique.
// TODO: Check everything for early returns, login, user.

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

function Post({ post }) {
  const [videoHeight, setVideoHeight] = useState(390);
  const [openErrorDialog, setOpenErrorDialog] = useState(false);
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  const opts = {
    height: videoHeight,
    width: "100%",
  };

  useEffect(() => {
    if (post.type === "youtube") {
      const postVideo = document.querySelector(".post__video");
      const postVideoWidth = postVideo.clientWidth;
      const ratio = 640 / 390;
      const videoHeight = postVideoWidth / ratio;
      setVideoHeight(videoHeight);
    }
  }, [post]);

  useEffect(() => {
    const commentsCollectionRef = collection(
      db,
      "projects",
      id,
      "posts",
      post.id,
      "comments"
    );
    const commentsQuery = query(commentsCollectionRef);
    onSnapshot(commentsQuery, (querySnapshot) => {
      const tempComments = querySnapshot.docs.map((doc) => {
        let tempComment = doc.data();
        tempComment.id = doc.id;
        return tempComment;
      });
      const sortedTempComments = tempComments.sort(
        (a, b) => a.timestamp - b.timestamp
      );
      setComments(sortedTempComments);
    });
  }, [id, post]);

  const handleCloseErrorDialog = () => {
    setOpenErrorDialog(false);
  };

  const handlePostActionClick = () => {
    setOpenErrorDialog(true);
  };

  const handleCommentClick = () => {};

  return (
    <div className="post">
      <div className="post__top">
        {post.authorType === "teamMember" && (
          <Avatar src={post.authorPhotoURL} className="post__avatar" />
        )}
        {post.authorType === "botNewsReporter" && (
          <Avatar className="post__avatar" sx={{ bgcolor: "orange" }}>
            <NewspaperIcon />
          </Avatar>
        )}

        {post.authorType === "botStartupScout" && (
          <Avatar className="post__avatar" sx={{ bgcolor: "blue" }}>
            <TravelExploreIcon />
          </Avatar>
        )}

        {post.authorType === "botGithubScout" && (
          <Avatar className="post__avatar" sx={{ bgcolor: "brown" }}>
            <GitHubIcon />
          </Avatar>
        )}

        {post.authorType === "botAcademicExpert" && (
          <Avatar className="post__avatar" sx={{ bgcolor: "darkgreen" }}>
            <SchoolIcon />
          </Avatar>
        )}

        {post.authorType === "botSocialButterfly" && (
          <Avatar className="post__avatar" sx={{ bgcolor: "black" }}>
            <EventIcon />
          </Avatar>
        )}

        <div className="post__topInfo">
          <h3>{post.authorName}</h3>
          <p>{new Date(post.timestamp).toLocaleString()}</p>
        </div>
      </div>

      {post.type !== "quill" && (
        <div className="post__bottom">
          {post.link && (
            <p>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                {post.link}
              </a>
            </p>
          )}
          {post.body && (
            <p>
              <b>{post.body}</b>
            </p>
          )}
          {post.bulletPoints &&
            post.bulletPoints.map((bulletPoint, index) => (
              <li key={post.timestamp + "bulletPoint" + index}>
                {bulletPoint}
              </li>
            ))}
        </div>
      )}

      {post.type === "quill" && <div className="post_quill">Quill</div>}

      <div className="post__tags">
        {post.tags &&
          post.tags.map((tag, index) => (
            <button
              key={post.timestamp + "tag" + index}
              style={{ backgroundColor: tag.color }}
              onClick={handlePostActionClick}
            >
              {tag.name}
            </button>
          ))}
      </div>

      {post.type === "youtube" && post.youtubeVideoId && (
        <div className="post__video">
          <YouTube opts={opts} videoId={post.youtubeVideoId} />
        </div>
      )}

      {post.type === "image" && post.imageURL && (
        <div className="post__image">
          <img src={post.imageURL} alt="Post" />
        </div>
      )}

      <Dialog open={openErrorDialog} onClose={handleCloseErrorDialog}>
        <DialogTitle>Functionality Not Available. Coming Soon.</DialogTitle>
        <DialogContent>You cannot engage with posts right now.</DialogContent>
        <DialogActions>
          <Button onClick={handleCloseErrorDialog}>Close</Button>
        </DialogActions>
      </Dialog>

      <div className="post__options">
        <div className="post__option" onClick={handlePostActionClick}>
          <WhatshotIcon />
          <p>Like</p>
        </div>
        <div className="post__option" onClick={handleCommentClick}>
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__option" onClick={handlePostActionClick}>
          <LightbulbOutlinedIcon />
          <p>Idea</p>
        </div>
        <div className="post__option" onClick={handlePostActionClick}>
          <BoltOutlinedIcon />
          <p>Insight</p>
        </div>
      </div>

      {comments && (
        <div className="post__comments">
          {comments.map((comment, index) => (
            <div
              key={post.timestamp + "comment" + index}
              className="post__comment"
            >
              <Avatar
                key={post.timestamp + "commentAvatar" + index}
                src={comment.authorPhotoURL}
              />
              <div
                key={post.timestamp + "commentBody" + index}
                className="post__commentBody"
              >
                <b>{comment.authorName}</b>
                <p>{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="post__addComment">
        <Comment postId={post.id} />
      </div>
    </div>
  );
}

export default Post;
