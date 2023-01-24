import { useContext } from "react";
import { SongContext } from "../context/songs";

export const useSong = () => {
  const context = useContext(SongContext);
  return context;
};
