import React from "react";
import "./Feed.css";
import { useStateValue } from "../StateProvider";
import Login from "./Login";
import Post from "./Post";
import MessageSender from "./MessageSender";

function Feed({ posts }) {
  const [{ user }] = useStateValue();

  // TODO: If there is no access, display something else.

  return (
    <div>
      {!user ? (
        <Login />
      ) : (
        <div className="feed">
          <MessageSender />
          {posts.map((post, index) => (
            <Post key={"post" + index} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Feed;
