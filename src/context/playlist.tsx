import { createContext, ReactNode, useEffect, useState } from "react";

const PlayListContext = createContext({} as any);

type IPlatList = {
  id: number;
  name: string;
};

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
    if (playList) {
      playList.push({ id: playList.length, name });
      makeStorage(playList);
      return;
    }
    makeStorage([{ id: 1, name }]);
  };

  const loadPlayListSongs = (id: number) => {
    const playList = localStorage.getItem("@App:songByPlayList:" + id);
    if (playList) {
      return JSON.parse(playList) as string[] | null;
    }
  };

  const updatePlayList = (songId: string, playListId: number) => {
    let playList = loadPlayListSongs(playListId);
    playList ? playList.push(songId) : (playList = [songId]);
    localStorage.setItem(
      "@App:songByPlayList" + playListId,
      JSON.stringify(playList)
    );
  };

  return (
    <PlayListContext.Provider
      value={{ createPlayList, playLists, updatePlayList }}
    >
      {children}
    </PlayListContext.Provider>
  );
};
