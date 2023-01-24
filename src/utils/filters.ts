import { songs } from "../types/global";
import { songsList } from "./songsList";

type filter = {
  [index: string]: songs[];
};

export const filters: filter = {
  Todos: songsList,
  Rock: songsList.filter((song) => song.category === "Rock"),
  Indie: songsList.filter((song) => song.category === "Indie"),
  Rap: songsList.filter((song) => song.category === "Rap"),
  Classicos: songsList.filter((song) => song.category === "Classicos"),
  "Anos 80": songsList.filter((song) => song.category === "Anos 80"),
};
