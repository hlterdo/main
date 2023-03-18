import React, { useState, useEffect } from "react";
import "./ProjectPage.css";
import { useStateValue } from "../StateProvider";

import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import ProjectDetails from "../components/ProjectDetails";
import { getDoc, doc } from "firebase/firestore";
import db from "../Firebase";

import { useParams } from "react-router-dom";

function ProjectPage() {
  const [{ user }] = useStateValue();
  const { subpage, id } = useParams();
  const [posts, setPosts] = useState([]);

  // TODO: If there is no access, display something else.
  // TODO: Sort posts by timestamp and limit to 50.

  useEffect(() => {
    if (!user) {
      return;
    }

    try {
      getDoc(doc(db, "projects", id)).then((doc) => {
        setPosts(doc.data().posts);
      });
    } catch (e) {
      console.log("error:", e);
    }
  }, [id, user]);

  useEffect(() => {
    console.log("posts: ", posts);
  }, [posts]);

  return (
    <div>
      {!user ? (
        <Login />
      ) : (
        <div className="project">
          <Navbar page="projectPage" search />
          <div className="project__body">
            <Sidebar />
            {subpage === "home" && <Feed posts={posts} />}
            {subpage === "details" && <ProjectDetails />}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectPage;
