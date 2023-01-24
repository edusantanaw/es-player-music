export type songs = {
    name: string;
    image: string;
    source: string;
    autor: string;
    category: string;
    id: number;
}

export type songContext = {
    currentSong: songs;
    handleCurrentSong: (song: songs) => void;
    handleNext: (index: number) => void;
    handlePrev: (index: number) => void;
  };