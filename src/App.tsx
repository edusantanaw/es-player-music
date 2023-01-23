import React from "react";
import joji from "./assets/songs/glimpse.mp3";
import Menu from "./layout/Menu";
import { Home } from "./pages/Home";
import { Container, Global } from "./styles/global";

function App() {
  return (
    <Container>
      <Global />
      <Menu />
      <Home />
      {/* <audio controls autoPlay={true}>
        <source src={joji} type="audio/mp3" />
      </audio> */}
    </Container>
  );
}

export default App;
