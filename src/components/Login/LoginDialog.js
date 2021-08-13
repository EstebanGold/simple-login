import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import CircularProgress from "@material-ui/core/CircularProgress";

const emails = ["username@gmail.com", "user02@gmail.com"];
const useStyles = makeStyles({
  grid: {
    height: 200,
  },
});

export default function LoginDialog(props) {
  const classes = useStyles();
  const { onClose, userName, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <Grid
        className={classes.grid}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <h2>{userName}</h2>
        <span>estamos preparando su inicio personalizado</span>
        <CircularProgress />
      </Grid>
    </Dialog>
  );
}
