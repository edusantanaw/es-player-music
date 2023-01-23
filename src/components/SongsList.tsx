import React from "react";
import { songsList } from "../utils/songsList";
import { Songs } from "./styles/songsList.style";

const SongsList = () => {
  return (
    <Songs>
      {songsList.map((songs, key) => (
        <li key={key}>
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
