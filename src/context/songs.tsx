import { createContext, ReactNode, useEffect, useState } from "react";
import { songContext, songs } from "../types/global";
import { songsList } from "../utils/songsList";

export const SongContext = createContext({} as songContext);

interface providerProps {
  children: ReactNode;
}

export const SongProvider = ({ children }: providerProps) => {
  const [currentLista, setCurrentLista] = useState<{
    name: string;
    songs: songs[];
  }>({ name: "Todos", songs: songsList });
  const [currentSong, setCurrentSong] = useState<songs>(currentLista.songs[0]);
  const [currentCategory, setCurrentCategory] = useState<string>("Todos");

  useEffect(() => {
    const list = songsList.filter((song) => {
      if (currentCategory === "Todos") return song;
      return song.category === currentCategory;
    });
    setCurrentLista({ name: currentCategory, songs: list });
  }, [currentCategory]);

  const handleCategory = (category: string) => {
    setCurrentCategory(category);
  };

  const handleCurrentSong = (songs: songs) => {
    setCurrentSong(songs);
  };

  const handleNext = (id: number) => {
    const findIndex = currentLista.songs.findIndex((song) => song.id === id);
    if (findIndex < songsList.length - 1) {
      setCurrentSong(currentLista.songs[findIndex + 1]);
    }
  };

  const handlePrev = (id: number) => {
    const findIndex = currentLista.songs.findIndex((song) => song.id === id);
    if (findIndex > 0) {
      setCurrentSong(currentLista.songs[findIndex - 1]);
    }
  };

  const makeSongsStorage = () => {
    const songs: string[] = JSON.parse(localStorage.getItem("@App:like") || "");
    return songs;
  };

  const addLike = (id: string) => {
    const songs = makeSongsStorage();
    const updatedSongs = [...songs, id];
    localStorage.setItem("@App:like", JSON.stringify(updatedSongs));
    return;
  };

  const removeLike = (id: string) => {
    const songs = makeSongsStorage();
    const index = songs.indexOf(id);
    const updatedSongs = songs.slice(index, 1);
    localStorage.setItem("@App:like", JSON.stringify(updatedSongs));
    return;
  };

  const handleLike = (id: string) => {
    const songsLikes = makeSongsStorage();
    if (!songsLikes) addLike(id);
    const verifyLikeExists = songsLikes.filter(
      (songId: string) => songId === id
    );
    verifyLikeExists ? removeLike(id) : addLike(id);
  };

  return (
    <SongContext.Provider
      value={{
        currentSong,
        handleNext,
        handlePrev,
        currentCategory,
        handleCategory,
        handleCurrentSong,
        currentLista,
      }}
    >
      {children}
    </SongContext.Provider>
  );
};
