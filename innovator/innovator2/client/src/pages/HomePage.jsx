import React, { useState, useEffect } from "react";
import SampleProjects from "../components/SampleProjects";

const HomePage = () => {
  const [sampleProjects, setSampleProjects] = useState([{}]);

  useEffect(() => {
    fetch("/api/listprojects")
      .then((response) => response.json())
      .then((projects) => {
        setSampleProjects(projects);
      });
  }, []);

  return (
    <div>
      <SampleProjects
        key="sampleProjects"
        projects={sampleProjects}
      ></SampleProjects>
    </div>
  );
};

export default HomePage;
