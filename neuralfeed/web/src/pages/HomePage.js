import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Login from "../components/Login";
import { useStateValue } from "../StateProvider";
import { IconButton } from "@mui/material";
import "./HomePage.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FolderCopyRoundedIcon from "@mui/icons-material/FolderCopyRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import GroupsIcon from "@mui/icons-material/Groups";
import { Alert, AlertTitle } from "@mui/material";
import { collection, getDocs, where, query } from "firebase/firestore";
import db from "../Firebase";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [{ user }] = useStateValue();

  const [projects, setProjects] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      return;
    }

    try {
      console.log("email: ", user.email);
      getDocs(
        query(
          collection(db, "projects"),
          where("teamMembers", "array-contains", user.email)
        )
      )
        .then((snapshot) => {
          setProjects(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    } catch (e) {
      console.log("error:", e);
    }
  }, [user]);

  useEffect(() => {
    console.log("projects: ", projects);
  }, [projects]);

  const [showSampleProjectNotAvailable, setShowSampleProjectNotAvailable] =
    useState(false);

  const handleSampleProjectClick = () => {
    setShowSampleProjectNotAvailable(true);
  };

  const handleSampleProjectNotAvailableClose = () => {
    setShowSampleProjectNotAvailable(false);
  };

  const [showPersonalProjectNotAvailable, setShowPersonalProjectNotAvailable] =
    useState(false);

  const handlePersonalProjectClick = () => {
    setShowPersonalProjectNotAvailable(true);
  };

  const handlePersonalProjectNotAvailableClose = () => {
    setShowPersonalProjectNotAvailable(false);
  };

  const [showTeamProjectNotAvailable, setShowTeamProjectNotAvailable] =
    useState(false);

  const handleTeamProjectClick = () => {
    setShowTeamProjectNotAvailable(true);
  };

  const handleTeamProjectNotAvailableClose = () => {
    setShowTeamProjectNotAvailable(false);
  };

  const handleProjectClick = (projectId) => {
    console.log(projectId);
    navigate("/project/" + projectId + "/home");
  };

  return (
    <div>
      {!user ? (
        <Login />
      ) : (
        <div className="homepage">
          <Navbar page="homePage" />
          <div className="project__selection">
            <div className="project__option">
              {showPersonalProjectNotAvailable && (
                <Alert
                  severity="warning"
                  open={showPersonalProjectNotAvailable}
                  onClose={handlePersonalProjectNotAvailableClose}
                >
                  <AlertTitle>Coming Soon</AlertTitle>
                  New personal project functionality is not available yet.
                  Please check back soon.
                </Alert>
              )}
              <div className="project__header">
                <AccountCircleIcon />
                <h1>Personal Projects</h1>
                <IconButton
                  className="project__new"
                  aria-label="New Personal Project"
                  onClick={handlePersonalProjectClick}
                >
                  <AddCircleOutlineRoundedIcon />
                  <span>New</span>
                </IconButton>
              </div>
            </div>

            <div className="project__option">
              {showTeamProjectNotAvailable && (
                <Alert
                  severity="warning"
                  open={showTeamProjectNotAvailable}
                  onClose={handleTeamProjectNotAvailableClose}
                >
                  <AlertTitle>Coming Soon</AlertTitle>
                  New team project functionality is not available yet. Please
                  check back soon.
                </Alert>
              )}
              <div className="project__header">
                <GroupsIcon />
                <h1>Team Projects</h1>
                <IconButton
                  className="project__new"
                  aria-label="New Team Project"
                  onClick={handleTeamProjectClick}
                >
                  <AddCircleOutlineRoundedIcon />
                  <span>New</span>
                </IconButton>
              </div>

              <div className="project__projects">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="project__project"
                    onClick={() => handleProjectClick(project.id)}
                  >
                    <h2>{project.data.name}</h2>
                  </div>
                ))}
              </div>
            </div>

            <div className="project__option">
              {showSampleProjectNotAvailable && (
                <Alert
                  severity="warning"
                  open={showSampleProjectNotAvailable}
                  onClose={handleSampleProjectNotAvailableClose}
                >
                  <AlertTitle>Coming Soon</AlertTitle>
                  Sample projects are not available yet. Please check back soon.
                </Alert>
              )}
              <div className="project__header">
                <FolderCopyRoundedIcon />
                <h1>Sample Projects</h1>
              </div>

              <div className="project__projects">
                <div
                  className="project__project"
                  onClick={handleSampleProjectClick}
                >
                  <h2>Innovate new product lines in insurance business</h2>
                </div>
                <div
                  className="project__project"
                  onClick={handleSampleProjectClick}
                >
                  <h2>AI-powered farming</h2>
                </div>
                <div
                  className="project__project"
                  onClick={handleSampleProjectClick}
                >
                  <h2>Use AI to differentiate a healthcare startup</h2>
                </div>
                <div
                  className="project__project"
                  onClick={handleSampleProjectClick}
                >
                  <h2>AI to reduce carbon emission</h2>
                </div>
                <div
                  className="project__project"
                  onClick={handleSampleProjectClick}
                >
                  <h2>
                    Intelligent cyber-attack prevention using large language
                    models
                  </h2>
                </div>
                <div
                  className="project__project"
                  onClick={handleSampleProjectClick}
                >
                  <h2>Inventory management and increased revenue with AI</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
