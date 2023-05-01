import React from "react";
import "./ProjectDetails.css";
import { Avatar } from "@mui/material";
import Login from "./Login";
import { useStateValue } from "../StateProvider";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import GitHubIcon from "@mui/icons-material/GitHub";
import ModeStandbyIcon from "@mui/icons-material/ModeStandby";
import GroupsIcon from "@mui/icons-material/Groups";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";

function ProjectDetails({ details }) {
  console.log("details: ", details);

  const [{ user }] = useStateValue();

  return (
    <div>
      {!user ? (
        <Login />
      ) : (
        details.name && (
          <div className="projectDetails">
            <div className="projectDetails__header">
              <h1>{details.name}</h1>
            </div>
            <div className="projectDetails__sectionHeader">
              <ModeStandbyIcon />
              <h2>Mission</h2>
            </div>
            <p>{details.mission}</p>
            <div className="projectDetails__sectionHeader">
              <GroupsIcon />
              <h2>Team</h2>
            </div>
            <div className="projectDetails__users">
              {details.teamMembers.map((teamMember, index) => (
                <div
                  key={"teamMember" + index}
                  className="projectDetails__user"
                >
                  <Avatar
                    key={"teamMemberAvatar" + index}
                    src={teamMember.photoURL}
                    alt="team member"
                  />
                  <h4 key={"teamMemberName" + index}>{teamMember.name}</h4>
                </div>
              ))}
            </div>
            <div className="projectDetails__sectionHeader">
              <AdminPanelSettingsIcon />
              <h2>Admins</h2>
            </div>
            <div className="projectDetails__users">
              {details.admins.map((admin, index) => (
                <div key={"admin" + index} className="projectDetails__user">
                  <Avatar
                    key={"adminAvatar" + index}
                    src={admin.photoURL}
                    alt="admin"
                  />
                  <h4 key={"adminName" + index}>{admin.name}</h4>
                </div>
              ))}
            </div>

            <div className="projectDetails__sectionHeader">
              <AutoFixHighIcon />
              <h2>AI Assistants</h2>
            </div>
            <div className="projectDetails__users">
              <div className="projectDetails__user">
                <Avatar sx={{ bgcolor: "orange" }}>
                  <NewspaperIcon />
                </Avatar>
                <h4>News Reporter</h4>
              </div>
              <div className="projectDetails__user">
                <Avatar sx={{ bgcolor: "blue" }}>
                  <TravelExploreIcon />
                </Avatar>
                <h4>Startup Scout</h4>
              </div>
              <div className="projectDetails__user">
                <Avatar sx={{ bgcolor: "brown" }}>
                  <GitHubIcon />
                </Avatar>
                <h4>Github Coder</h4>
              </div>
              <div className="projectDetails__user">
                <Avatar sx={{ bgcolor: "red" }}>
                  <EventIcon />
                </Avatar>
                <h4>Event Hunter</h4>
              </div>
              <div className="projectDetails__user">
                <Avatar sx={{ bgcolor: "darkgreen" }}>
                  <SchoolIcon />
                </Avatar>
                <h4>Academic Expert</h4>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default ProjectDetails;
