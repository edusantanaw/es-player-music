import React from "react";
import Category from "../components/Category";
import SongsList from "../components/SongsList";
import { HomeContainer } from "./styles/home.styles";

export const Home = () => {
  return (
    <HomeContainer>
      <Category />
      <SongsList />
    </HomeContainer>
  );
};
