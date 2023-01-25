import { songsList } from "./songsList";

export const loadLikeSongs = () => {
  const likes = localStorage.getItem("@App:like");
  if (likes) {
    const songsNames: string[] = JSON.parse(likes);
    const songs = songsList.filter((song) => {
      const exists = songsNames.includes(song.name);
      if (exists) return song;
    });
    return songs;
  }
  return null;
};
