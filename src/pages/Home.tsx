import Category from "../components/Category";
import SongsList from "../components/SongsList";
import { HomeContainer } from "./styles/home.styles";
import { useSong } from "../hooks/useSong";

export const Home = () => {
  const { currentLista } = useSong();

  return (
    <HomeContainer>
      <Category />
      <SongsList list={currentLista} />
    </HomeContainer>
  );
};
