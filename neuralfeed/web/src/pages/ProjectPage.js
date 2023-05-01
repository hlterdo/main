import React, { useState, useEffect } from "react";
import "./ProjectPage.css";
import { useStateValue } from "../StateProvider";

import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import ProjectDetails from "../components/ProjectDetails";
import { onSnapshot, doc, collection, query } from "firebase/firestore";
import db from "../Firebase";

import { useParams } from "react-router-dom";

function ProjectPage() {
  const [{ user }] = useStateValue();
  const { subpage, id } = useParams();
  const [posts, setPosts] = useState([]);
  const [projectDetails, setProjectDetails] = useState({});

  // TODO: If there is no access, display something else.
  // TODO: Sort posts by timestamp and limit to 50.

  useEffect(() => {
    if (!user) {
      return;
    }

    async function readProject() {
      try {
        const projectDocRef = doc(db, "projects", id);
        const postsCollectionRef = collection(projectDocRef, "posts");

        const unsubscribeProject = onSnapshot(projectDocRef, (doc) => {
          if (doc.exists()) {
            setProjectDetails(doc.data());
          } else {
            console.error("No such document!");
          }
        });

        const unsubscribePosts = onSnapshot(
          query(postsCollectionRef),
          (querySnapshot) => {
            const tempPosts = querySnapshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            });
            const sortedTempPosts = tempPosts.sort(
              (a, b) => b.timestamp - a.timestamp
            );
            setPosts(sortedTempPosts);
          }
        );

        return () => {
          unsubscribeProject();
          unsubscribePosts();
        };
      } catch (e) {
        console.error(e);
      }
    }

    readProject();
  }, [subpage, id, user]);

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
            {subpage === "details" && (
              <ProjectDetails details={projectDetails} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectPage;
