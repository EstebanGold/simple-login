import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Dialog, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles({
  grid: {
    height: 200,
  },
  closeButton: {
    position: "absolute",
  },
});

export default function LoginDialog({ userName, open }) {
  const classes = useStyles();

  return (
    <Dialog open={open}>
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
