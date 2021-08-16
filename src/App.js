import React from "react";

import "./App.css";
import { Container } from "@material-ui/core";

import LoginGrid from "./components/Login/LoginGrid";

function App() {
  return (
    <Container fixed>
      <LoginGrid />
    </Container>
  );
}

export default App;
