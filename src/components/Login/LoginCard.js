import React, { useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  TextField,
  Button,
} from "@material-ui/core";

import LoginDialog from "./LoginDialog";

const useStyles = makeStyles(() =>
  createStyles({
    loginBtn: {
      flexGrow: 1,
    },
  })
);

export default function LoginCard() {
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");

  const classes = useStyles();

  const handleLogin = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleUsernameChange = (user) => {
    setUserName(user.target.value);
  };
  const handlePasswordChange = (pass) => {
    setPass(pass.target.value);
  };
  const handleDisable = () => {
    console.log(userName && pass);
    return userName && pass;
  };

  return (
    <div>
      <Card variant="outlined">
        <CardContent>
          <div>
            <TextField
              id="user"
              label="Username"
              fullWidth
              margin="normal"
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <TextField
              id="pass"
              type="password"
              label="Password"
              onChange={handlePasswordChange}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className={classes.loginBtn}
            onClick={handleLogin}
            disabled={!(userName && pass)}
          >
            Loggin
          </Button>
        </CardActions>
      </Card>
      <LoginDialog userName={userName} open={open} onClose={handleClose} />
    </div>
  );
}
