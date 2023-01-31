import { useState } from "react";
import { songs } from "../types/global";
import { usePlayList } from "./usePlayList";

interface props {
  nameRef: React.MutableRefObject<HTMLInputElement | null>;
}

export const useCreatePlayList = ({ nameRef }: props) => {
  const [selectedSong, setSelectedSong] = useState<songs[]>([]);
  const { createPlayList } = usePlayList();

  const makeStorage = (songs: songs[], playList: string) => {
    const songsNames = songs.map((song) => song.name);
    localStorage.setItem(
      "@App:playlist" + playList,
      JSON.stringify(songsNames)
    );
  };

  const handleCreatePlayList = () => {
    if (nameRef.current) {
      const name = nameRef.current.value;
      createPlayList({ name, image: selectedSong[0].image });
      makeStorage(selectedSong, name);
    }
  };

  const removeSelectedSong = (song: songs) => {
    const songIndex = selectedSong.indexOf(song);
    const currentSelectedSongs = selectedSong;
    currentSelectedSongs.splice(songIndex, 1);
    setSelectedSong(() => [...currentSelectedSongs]);
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

  return {
    handleCreatePlayList,
    handleSelectedSong,
    selectedSong,
  };
};
