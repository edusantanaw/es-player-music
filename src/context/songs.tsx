import { createContext, ReactNode, useState } from "react";
import { songContext, songs } from "../types/global";
import { songsList } from "../utils/songsList";

export const SongContext = createContext({} as songContext);

interface providerProps {
  children: ReactNode;
}

export const SongProvider = ({ children }: providerProps) => {
  const [currentSong, setCurrentSong] = useState<songs>(songsList[0]);

  const handleCurrentSong = (songs: songs) => {
    setCurrentSong(songs);
  };

  const handleNext = (index: number) => {
    if (index < songsList.length - 1) {
      setCurrentSong(songsList[index + 1]);
    }
  };

  const handlePrev = (index: number) => {
    if (index > 0) {
      setCurrentSong(songsList[index - 1]);
    }
  };

  return (
    <SongContext.Provider
      value={{ currentSong, handleCurrentSong, handleNext, handlePrev }}
    >
      {children}
    </SongContext.Provider>
  );
};
