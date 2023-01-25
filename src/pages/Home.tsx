import Category from "../components/Category";
import SongsList from "../components/SongsList";
import { HomeContainer } from "./styles/home.styles";
import Albums from "../components/AmbumList";
import { useSong } from "../hooks/useSong";

export const Home = () => {
  const { currentLista } = useSong();

  return (
    <HomeContainer>
      <Category />
      <div className="bottom">
        <SongsList list={currentLista} />
        <Albums />
      </div>
    </HomeContainer>
  );
};
