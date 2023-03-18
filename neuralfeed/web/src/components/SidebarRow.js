import React, { useState } from "react";
import "./SidebarRow.css";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

function SideRow({ title, Icon, active, navigateTo, notImplementedError }) {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleClick = () => {
    if (notImplementedError) {
      setOpenDialog(true);
    } else {
      navigate(navigateTo);
    }
  };

  return (
    <>
      <div
        className={`sidebarRow ${active ? "sidebarRow--active" : ""}`}
        onClick={handleClick}
      >
        <Icon />
        <h4>{title}</h4>
      </div>
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Functionality Not Available. Coming Soon.</DialogTitle>
        <DialogContent>{notImplementedError}</DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default SideRow;
