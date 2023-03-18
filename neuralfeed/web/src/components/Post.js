import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import YouTube from "react-youtube";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

function Post({ post }) {
  const [videoHeight, setVideoHeight] = React.useState(390);

  const opts = {
    height: videoHeight,
    width: "100%",
  };

  React.useEffect(() => {
    const postVideo = document.querySelector(".post__video");
    const postVideoWidth = postVideo.clientWidth;
    const ratio = 640 / 390;
    const videoHeight = postVideoWidth / ratio;
    setVideoHeight(videoHeight);
  }, []);

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

        <div className="post__topInfo">
          <h3>{post.authorName}</h3>
          <p>{new Date(post.timestamp?.toDate()).toLocaleString()}</p>
        </div>
      </div>

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
      </div>

      {post.type === "image" && post.imageURL && (
        <div className="post__image">
          <img src={post.imageURL} alt="Post" />
        </div>
      )}

      {post.type === "youtube" && post.youtubeVideoId && (
        <div className="post__video">
          <YouTube opts={opts} videoId={post.youtubeVideoId} />
        </div>
      )}

      <div className="post__options">
        <div className="post__option">
          <WhatshotIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <LightbulbOutlinedIcon />
          <p>Idea</p>
        </div>
        <div className="post__option">
          <BoltOutlinedIcon />
          <p>Insight</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
