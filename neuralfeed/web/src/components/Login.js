import React, { useState } from "react";
import "./Login.css";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../Firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import { Button } from "@mui/material";
import { Alert, AlertTitle } from "@mui/material";
import { Avatar } from "@mui/material";

function Login() {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  const [showMicrosoftAlert, setShowMicrosoftAlert] = useState(false);
  const [showGithubAlert, setShowGithubAlert] = useState(false);

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log("user: ", result.user);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  const signInWithMicrosoft = () => {
    setShowMicrosoftAlert(true);
  };

  const handleMicrosoftAlertClose = () => {
    setShowMicrosoftAlert(false);
  };

  const signInWithGithub = () => {
    setShowGithubAlert(true);
  };

  const handleGithubAlertClose = () => {
    setShowGithubAlert(false);
  };

  return (
    <div className="login">
      <div className="login__logo">
        <Avatar src="/logo.svg" alt="Neuralfeed Icon Logo" />
      </div>
      <div className="login__textlogo">
        <img src="/logo_text.svg" alt="Neuralfeed Text Logo" />
      </div>

      <div className="signin">
        <h1>Log in with</h1>
        <div className="login__button">
          <Button
            variant="text"
            startIcon={
              <img
                src="/google_logo.svg"
                alt="Google Sign In Logo"
                height="30px"
              />
            }
            onClick={signInWithGoogle}
          >
            Google
          </Button>
        </div>

        <div className="login__button">
          <Button
            variant="text"
            startIcon={
              <img
                src="/microsoft_logo.svg"
                alt="Microsoft Sign In Logo"
                height="30px"
              />
            }
            onClick={signInWithMicrosoft}
          >
            Microsoft
          </Button>
        </div>

        <div className="login__button">
          <Button
            variant="text"
            startIcon={
              <img
                src="/github_logo.svg"
                alt="Github Sign In Logo"
                height="30px"
              />
            }
            onClick={signInWithGithub}
          >
            Github
          </Button>
        </div>
      </div>

      {showMicrosoftAlert && (
        <Alert
          severity="warning"
          open={showMicrosoftAlert}
          onClose={handleMicrosoftAlertClose}
        >
          <AlertTitle>Coming Soon</AlertTitle>
          Login with Microsoft is not available yet. Use Google log in for now.
        </Alert>
      )}

      {showGithubAlert && (
        <Alert
          severity="warning"
          open={showGithubAlert}
          onClose={handleGithubAlertClose}
        >
          <AlertTitle>Coming Soon</AlertTitle>
          Login with Github is not available yet. Use Google log in for now.
        </Alert>
      )}
    </div>
  );
}

export default Login;
