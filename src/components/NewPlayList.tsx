import React, { useRef, useState } from "react";
import { usePlayList } from "../hooks/usePlayList";
import { songs } from "../types/global";
import { songsList } from "../utils/songsList";

const NewPlayList = () => {
  const { createPlayList } = usePlayList();
  const nameRef = useRef<HTMLInputElement | null>(null);
  const [selectedSong, setSelectedSong] = useState<songs[]>([]);

  const handleCreatePlayList = () => {
    if (!nameRef.current) return;
    const name = nameRef.current.value;
    createPlayList(name);
  };

  const removeSelectedSong = (song: songs) => {
    const songIndex = selectedSong.indexOf(song);
    const newSelectedSong = selectedSong.slice(songIndex, 1);
    setSelectedSong(newSelectedSong);
  };

  const addSelectedSong = (song: songs) => {
    setSelectedSong((songs) => [...songs, song]);
  };

  const handleSelectedSong = (song: songs) => {
    const verifySongAlreadySelected = selectedSong.includes(song);
    if (verifySongAlreadySelected) {
      removeSelectedSong(song);
      return;
    }
    addSelectedSong(song);
  };

  return (
    <div>
      <div className="close"></div>
      <div className="modal">
        <form>
          <label htmlFor="name">Nome da playlist</label>
          <input type="text" ref={nameRef} placeholder="example" />
          <ul className="songs">
            {songsList.map((song, key) => (
              <li key={key} onClick={() => handleSelectedSong(song)}>
                <img src={song.image} alt={song.name} />
                <div className="infos">
                  <h3>{song.name}</h3>
                  <span>{song.autor}</span>
                </div>
              </li>
            ))}
          </ul>
        </form>
      </div>
    </div>
  );
};

export default NewPlayList;
