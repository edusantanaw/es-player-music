import React, { useState } from "react";
import Category from "../components/Category";
import SongsList from "../components/SongsList";
import { HomeContainer } from "./styles/home.styles";
import { songsList } from "../utils/songsList";
import { songs } from "../types/global";
import Song from "../components/Song";

export const Home = () => {
  const [currentSong, setCurrentSong] = useState<songs>(songsList[0]);

  const handleCurrentSong = (songs: songs) => {
    setCurrentSong(songs);
  };
  return (
    <HomeContainer>
      <Category />
      <div className="songs">
        <SongsList
          songsList={songsList}
          current={currentSong.name}
          handleCurrent={handleCurrentSong}
        />
        <Song song={currentSong} />
      </div>
    </HomeContainer>
  );
};
