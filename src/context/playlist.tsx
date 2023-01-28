import { createContext, ReactNode, useEffect, useState } from "react";
import { IPlatList, IPlayListContext } from "../types/global";
import { songsList } from "../utils/songsList";

export const PlayListContext = createContext({} as IPlayListContext);

export const PlayListProvider = ({ children }: { children: ReactNode }) => {
  const [playLists, setPlayList] = useState<IPlatList[] | null>(null);

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

  const createPlayList = (name: string) => {
    const playList = makePlayList();
    const newPlaylist = { id: playList ? playList.length : 0, name };
    setPlayList((current) =>
      current ? [...current, newPlaylist] : [newPlaylist]
    );
    if (!playList) {
      makeStorage([{ id: 0, name }]);
      return;
    }
    playList.push(newPlaylist);
    makeStorage(playList);
  };

  const loadSongs = (name: string) => {
    const playList = localStorage.getItem("@App:playlist" + name);
    console.log(playList);
    if (playList) {
      return JSON.parse(playList) as string[] | null;
    }
    return null;
  };

  const loadPlayListSongs = (name: string) => {
    const songsNames = loadSongs(name);
    console.log(songsNames);
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
      value={{ createPlayList, playLists, updatePlayList, loadPlayListSongs }}
    >
      {children}
    </PlayListContext.Provider>
  );
};
