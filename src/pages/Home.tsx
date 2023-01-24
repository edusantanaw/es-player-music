import Category from "../components/Category";
import { HomeContainer } from "./styles/home.styles";


export const Home = () => {


  return (
    <HomeContainer>
      <Category />
      <div className="songs">
      </div>
    </HomeContainer>
  );
};
