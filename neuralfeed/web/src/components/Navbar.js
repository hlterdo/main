import React from "react";
import "./Navbar.css";
import { useStateValue } from "../StateProvider";
import { Avatar } from "@mui/material";
import BackupTableRoundedIcon from "@mui/icons-material/BackupTableRounded";
import HomeIcon from "@mui/icons-material/Home";
import Diversity1Icon from "@mui/icons-material/Diversity1";

function Navbar({ page }) {
  const [{ user }] = useStateValue();

  return (
    <div className="navbar">
      <div className="navbar__left">
        <Avatar src="./logo.svg" alt="Neural Feed Logo" />
      </div>

      <div className="navbar__middle">
        {page === "homePage" && (
          <div className="navbar__option navbar__option--active">
            <BackupTableRoundedIcon fontSize="large" />}
          </div>
        )}
        {page === "projectPage" && (
          <div className="navbar__option navbar__option--active">
            <HomeIcon fontSize="large" />
          </div>
        )}
        {page === "projectPage" && (
          <div className="navbar__option">
            <Diversity1Icon fontSize="large" />
          </div>
        )}
      </div>

      <div className="navbar__right">
        <Avatar src={user.photoURL} alt="Profile photo" />
        <h4>{user.displayName}</h4>
      </div>
    </div>
  );
}

export default Navbar;
