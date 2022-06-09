import { AppBar, Button, IconButton, Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "../App.css";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container>
          <IconButton edge="start" color="inherit" aria-label="menu" />
          <Button color="inherit">GameStore</Button>
          <Button color="inherit">Juegos PS5</Button>
          <Button color="inherit">Juegos PS4</Button>
          <Button color="inherit">Juegos Xbox Series X/S</Button>
          <Button color="inherit">Juegos Xbox 360</Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
