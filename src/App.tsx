import Menu from "./layout/Menu";
import Song from "./layout/Song";
import { Home } from "./pages/Home";
import { Container, Global } from "./styles/global";

function App() {
  return (
    <Container>
      <Global />
      <Menu />
      <Song />
      <Home />
    </Container>
  );
}

export default App;
