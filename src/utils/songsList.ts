export const ola = "";
import glimpse from "../assets/songs/glimpse.mp3";
import puppets from "../assets/songs/puppets.mp3";
import glimpseImage from "../assets/songs/images/glimpse.jpg";
import puppetsImage from "../assets/songs/images/puppets.jpg";
import { songs } from "../types/global";
import { v4 } from "uuid";

export const songsList: songs[] = [
  {
    id: v4(),
    name: "Glimpse of us",
    image: glimpseImage,
    source: glimpse,
    autor: "Joji",
    category: "Indie",
  },
  {
    id: v4(),
    name: "Master of puppets",
    image: puppetsImage,
    source: puppets,
    autor: "Metalica",
    category: "Rock",
  },
  {
    id: v4(),
    name: "Glimpse of us",
    image: glimpseImage,
    source: glimpse,
    autor: "Joji",
    category: "Indie",
  },
  {
    id: v4(),
    name: "Master of puppets",
    image: puppetsImage,
    source: puppets,
    autor: "Metalica",
    category: "Rock",
  },
];
