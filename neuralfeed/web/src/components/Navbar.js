import React, { useState } from "react";
import "./Navbar.css";
import { useStateValue } from "../StateProvider";
import { Avatar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

function Navbar({ page, search }) {
  const [{ user }] = useStateValue();
  const navigate = useNavigate();
  const { id, subpage } = useParams();

  const [openDialog, setOpenDialog] = useState(false);
  const [openSearchDialog, setOpenSearchDialog] = useState(false);

  const handleOpenSearchDialogClose = () => {
    setOpenSearchDialog(false);
  };

  const handleSearchClick = () => {
    setOpenSearchDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleHomeClick = () => {
    navigate("/project/" + id + "/home");
  };

  const handleDetailsClick = () => {
    navigate("/project/" + id + "/details");
  };

  return (
    <div className="navbar">
      <div className="navbar__left">
        <Avatar
          src="/logo.svg"
          alt="Neural Feed Logo"
          onClick={handleLogoClick}
        />

        {search && (
          <div className="navbar__input">
            <AutoFixHighRoundedIcon />
            <input
              placeholder="Ask anything"
              type="text"
              onClick={handleSearchClick}
            />
          </div>
        )}
      </div>

      <div className="navbar__middle">
        {page === "homePage" && (
          <div className="navbar__option navbar__option--active">
            <WorkspacesIcon fontSize="large" />
          </div>
        )}
        {page === "projectPage" && (
          <div
            className={`navbar__option ${
              subpage === "home" ? "navbar__option--active" : ""
            }`}
            onClick={handleHomeClick}
          >
            <HomeIcon fontSize="large" />
          </div>
        )}
        {page === "projectPage" && (
          <div
            className={`navbar__option ${
              subpage === "details" ? "navbar__option--active" : ""
            }`}
            onClick={handleDetailsClick}
          >
            <GroupsIcon fontSize="large" />
          </div>
        )}
      </div>

      <div className="navbar__right">
        <Avatar src={user.photoURL} alt="Profile photo" />
        <h4>{user.displayName}</h4>
      </div>

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Functionality Not Available. Coming Soon.</DialogTitle>
        <DialogContent>
          Project & Team section will show the project details like title,
          mission, etc. as well as lists team members and admins.
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openSearchDialog} onClose={handleOpenSearchDialogClose}>
        <DialogTitle>Functionality Not Available. Coming Soon.</DialogTitle>
        <DialogContent>
          This section will allow users to ask anything about their project
          using the information they gathered over time.
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOpenSearchDialogClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Navbar;
