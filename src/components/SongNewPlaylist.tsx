import React, { useState, useEffect } from "react";
import { songs } from "../types/global";

interface props {
  song: songs;
  selectedSong: songs[];
  handleSelectedSong: (song: songs) => void;
}

const SongNewPlaylist = ({ song, selectedSong, handleSelectedSong }: props) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  useEffect(() => {
    const verifyIsSelected = selectedSong.filter(
      (selectedSong) => song.id === selectedSong.id
    );
    setIsSelected(!!verifyIsSelected[0]);
  }, [selectedSong]);


  return (
    <li
      className={isSelected ? "selected" : ""}
      onClick={() => handleSelectedSong(song)}
    >
      <img src={song.image} alt={song.name} />
      <div className="infos">
        <h3>{song.name}</h3>
        <span>{song.autor}</span>
      </div>
    </li>
  );
};

export default SongNewPlaylist;
