import { createContext, ReactNode, useEffect, useState } from "react";
import { songContext, songs } from "../types/global";
import { filters } from "../utils/filters";
import { songsList } from "../utils/songsList";

export const SongContext = createContext({} as songContext);

interface providerProps {
  children: ReactNode;
}

export const SongProvider = ({ children }: providerProps) => {
  const [currentLista, setCurrentLista] = useState<{
    name: string;
    songs: songs[];
  }>({ name: "Rodos", songs: songsList });
  const [currentSong, setCurrentSong] = useState<songs>(currentLista.songs[0]);
  const [currentCategory, setCurrentCategory] = useState<string>("Todos");

  useEffect(() => {
    const list = filters[currentCategory];
    console.log(list);
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
