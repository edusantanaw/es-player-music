import {
  createContext,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
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
    console.log(list)
    setCurrentLista({ name: currentCategory, songs: list });
  }, [currentCategory]);

  const handleCategory = (category: string) => {
    setCurrentCategory(category);
  };

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
