import Menu from "./layout/Menu";
import Song from "./layout/Song";
import { Home } from "./pages/Home";
import { Container, Global } from "./styles/global";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayList from "./pages/PlayList";

function App() {
  return (
    <Container>
      <Router>
        <Global />
        <Menu />
        <Song />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlist" element={<PlayList />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
