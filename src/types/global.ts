export type songs = {
  name: string;
  image: string;
  source: string;
  autor: string;
  category: string;
  id: string;
};

export type songContext = {
  currentSong: songs;
  currentCategory: string;
  currentLista: { name: string; songs: songs[] };
  handleCurrentSong: (song: songs) => void;
  handleCategory: (category: string) => void;
  handleNext: (id: string) => void;
  handlePrev: (id: string) => void;
  handleLike: (id: string) => void;
  handleUpdateCurrentList: (list: { name: string; songs: songs[] }) => void;
};

export type IPlatList = {
  id: number;
  name: string;
  image: string;
};

export interface IPlayListContext {
  createPlayList: (data: { name: string; image: string }) => void;
  playlists: IPlatList[] | null;
  updatePlayList: (songId: string, name: string) => void;
  loadPlayListSongs: (name: string) => songs[] | null;
}
