import React from "react";
import { songs } from "../types/global";
import { Songs } from "./styles/songsList.style";

interface props {
  songsList: songs[];
  handleCurrent: (song: songs) => void;
  current: string;
}

const SongsList = ({ songsList, handleCurrent }: props) => {
  return (
    <Songs>
      {songsList.map((songs, key) => (
        <li key={key} onClick={() => handleCurrent(songs)}>
          <img src={songs.image} alt={songs.name} />
          <div>
            <p>{songs.name}</p>
            <span>{songs.autor}</span>
          </div>
        </li>
      ))}
    </Songs>
  );
};

export default SongsList;
