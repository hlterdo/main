import React, { useState } from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import GroupsIcon from "@mui/icons-material/Groups";
import HomeIcon from "@mui/icons-material/Home";
import { useParams } from "react-router-dom";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
function Sidebar() {
  const { subpage, id } = useParams();

  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleConnectClick = () => {
    setOpenDialog(true);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__rows">
        <SidebarRow
          title="Home"
          Icon={HomeIcon}
          active={subpage === "home"}
          navigateTo={"/project/" + id + "/home"}
        />
        <SidebarRow
          title="Ideas"
          Icon={LightbulbOutlinedIcon}
          notImplementedError="Ideas section will contain the list of ideas generated by team members for this project. Team members can add ideas manually in this page or directly from the posts in the feed."
        />
        <SidebarRow
          title="Insights"
          Icon={BoltOutlinedIcon}
          notImplementedError="Insights section will contain the list of insights generated by team members for this project. Team members can add insights manually in this page or directly from the posts in the feed."
        />
        <SidebarRow
          title="Documents"
          Icon={ArticleRoundedIcon}
          notImplementedError="Documents section contains the documents (Google Workspace or MS Office) shared by team members."
        />
        <SidebarRow
          title="Mind Map"
          Icon={AutoGraphRoundedIcon}
          notImplementedError="Mind map section will show the knowledge graph based on the tags and saved posts."
        />
        <SidebarRow
          title="Project & Team"
          Icon={GroupsIcon}
          notImplementedError="Project & Team section will show the project details like title, mission, etc. as well as lists team members and admins."
        />
      </div>
      <div className="sidebar__bottom">
        <button onClick={handleConnectClick}>Connect</button>
      </div>
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Functionality Not Available. Coming Soon.</DialogTitle>
        <DialogContent>
          This is where you connect 3rd party apps like JIRA, Workspace, Office,
          ClickUp, Loom, etc..
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Sidebar;
