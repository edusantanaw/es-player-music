import Category from "../components/Category";
import SongsList from "../components/SongsList";
import { HomeContainer } from "./styles/home.styles";
import Albums from "../components/AmbumList";

export const Home = () => {
  return (
    <HomeContainer>
      <Category />
      <div className="bottom">
        <SongsList />
        <Albums />
      </div>
    </HomeContainer>
  );
};
