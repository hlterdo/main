import React, { useState, useEffect } from "react";
import "./ProjectPage.css";
import { useStateValue } from "../StateProvider";

import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../components/Login";

function ProjectPage() {
  const [{ user }] = useStateValue();
  const { id } = useParams();

  return (
    <div>
      {!user ? (
        <Login />
      ) : (
        <div className="project">
          <Navbar page="projectPage" />
        </div>
      )}
    </div>
  );
}

export default ProjectPage;
