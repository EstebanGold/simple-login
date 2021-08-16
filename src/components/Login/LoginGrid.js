import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import LoginCard from "./LoginCard";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  container: {
    marginTop: 250,
  },
}));

export default function LoginGrid() {
  const classes = useStyles();

  return (
    <Grid
      container
      className={(classes.root, classes.container)}
      direction="column"
      alignContent="center"
      item
      xs={12}
      sm={12}
      md={12}
    >
      <LoginCard />
    </Grid>
  );
}
