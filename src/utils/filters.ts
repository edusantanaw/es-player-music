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
  Classic: songsList.filter((song) => song.category === "Classic"),
  "Anos 80": songsList.filter((song) => song.category === "Anos 80"),
};
