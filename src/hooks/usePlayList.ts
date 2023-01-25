import { useContext } from "react";
import { PlayListContext } from "../context/playlist";

export const usePlayList = () => {
  const context = useContext(PlayListContext);
  return context;
};
