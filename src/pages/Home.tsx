import Category from "../components/Category";
import SongsList from "../components/SongsList";
import { HomeContainer } from "./styles/home.styles";
import { songsList } from "../utils/songsList";

export const Home = () => {
  return (
    <HomeContainer>
      <Category />
      <div className="songs">
        <SongsList />
      </div>
    </HomeContainer>
  );
};
