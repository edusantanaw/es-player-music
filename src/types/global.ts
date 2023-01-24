export type songs = {
  name: string;
  image: string;
  source: string;
  autor: string;
  category: string;
  id: number;
};

export type songContext = {
  currentSong: songs;
  currentCategory: string;
  currentLista: {name: string, songs: songs[]},
  handleCurrentSong: (song: songs) => void;
  handleCategory: (category: string) => void;
  handleNext: (index: number) => void;
  handlePrev: (index: number) => void;
};
