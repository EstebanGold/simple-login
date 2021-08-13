import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import LoginCard from "./LoginCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function LoginGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6}>
          <LoginCard />
        </Grid>
      </Grid>
    </div>
  );
}
