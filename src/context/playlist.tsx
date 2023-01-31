import { createContext, ReactNode, useEffect, useState } from "react";
import { IPlatList, IPlayListContext } from "../types/global";
import { songsList } from "../utils/songsList";

export const PlayListContext = createContext({} as IPlayListContext);

export const PlayListProvider = ({ children }: { children: ReactNode }) => {
  const [playlists, setPlayList] = useState<IPlatList[] | null>(null);

  useEffect(() => {
    const list = makePlayList();
    if (list) setPlayList(list);
  }, []);

  const makePlayList = () => {
    const playList = localStorage.getItem("@App:playlist");
    if (!playList) return null;
    const parserPlayList = JSON.parse(playList) as IPlatList[];
    return parserPlayList;
  };

  const makeStorage = (data: unknown) => {
    localStorage.setItem("@App:playlist", JSON.stringify(data));
  };

  const createPlayList = ({ name, image }: { name: string; image: string }) => {
    const playList = makePlayList();
    const newPlaylist = { id: playList ? playList.length : 0, name, image };
    setPlayList((current) =>
      current ? [...current, newPlaylist] : [newPlaylist]
    );
    if (!playList) {
      makeStorage([newPlaylist]);
      return;
    }
    playList.push(newPlaylist);
    makeStorage(playList);
  };

  const loadSongs = (name: string) => {
    const playList = localStorage.getItem("@App:playlist" + name);
    if (playList) {
      return JSON.parse(playList) as string[] | null;
    }
    return null;
  };

  const loadPlayListSongs = (name: string) => {
    const songsNames = loadSongs(name);
    if (songsNames) {
      const playListSongs = songsList.filter((songs) =>
        songsNames.includes(songs.name)
      );
      return playListSongs;
    }
    return null;
  };

  const updatePlayList = (songId: string, name: string) => {
    let playList = loadSongs(name);
    playList ? playList.push(songId) : (playList = [songId]);
    localStorage.setItem(
      `@App:songByPlayList${name}`,
      JSON.stringify(playList)
    );
  };

  return (
    <PlayListContext.Provider
      value={{ createPlayList, playlists, updatePlayList, loadPlayListSongs }}
    >
      {children}
    </PlayListContext.Provider>
  );
};
