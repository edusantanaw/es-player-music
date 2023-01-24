export const ola = "";
import glimpse from "../assets/songs/glimpse.mp3";
import puppets from "../assets/songs/puppets.mp3";
import glimpseImage from "../assets/songs/images/glimpse.jpg";
import puppetsImage from "../assets/songs/images/puppets.jpg";
import { songs } from "../types/global";

export const songsList: songs[] = [
  {
    id: 0,
    name: "Glimpse of us",
    image: glimpseImage,
    source: glimpse,
    autor: "Joji",
    category: "Indie",
  },
  {
    id: 1,
    name: "Master of puppets",
    image: puppetsImage,
    source: puppets,
    autor: "Metalica",
    category: "Rock",
  },
  {
    id: 2,
    name: "Glimpse of us",
    image: glimpseImage,
    source: glimpse,
    autor: "Joji",
    category: "Indie",
  },
  {
    id: 3,
    name: "Master of puppets",
    image: puppetsImage,
    source: puppets,
    autor: "Metalica",
    category: "Rock",
  },

];
