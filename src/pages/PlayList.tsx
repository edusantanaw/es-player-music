import { usePlayList } from "../hooks/usePlayList";
import { AiOutlinePlus } from "react-icons/ai";
import { PlayListContainer } from "./styles/playlist.style";
import { Title } from "../styles/global";
import { BsFillSuitHeartFill } from "react-icons/bs";
import SongsList from "../components/SongsList";
import { loadLikeSongs } from "../utils/likeList";
import { useState } from "react";
import NewPlayList from "../components/NewPlayList";
import { songs } from "../types/global";

const curtidas = {
  name: "Curtidas",
  songs: loadLikeSongs(),
};

const PlayList = () => {
  const { playLists, loadPlayListSongs } = usePlayList();
  const [newPlayList, setNewPlayList] = useState(false);
  const [currentPlayList, setCurrentPlayList] = useState<{
    name: string;
    songs: songs[] | null;
  }>(curtidas);

  const handleNewPlayList = () => {
    newPlayList ? setNewPlayList(false) : setNewPlayList(true);
  };

  const handlePlatlist = (name: string) => {
    const songs = loadPlayListSongs(name);
    console.log(songs)
    setCurrentPlayList({
      name: name,
      songs: songs,
    });
  };

  return (
    <>
      {newPlayList && <NewPlayList handleClose={handleNewPlayList} />}
      <PlayListContainer>
        <div className="head">
          <Title>Playlists</Title>
          <button onClick={handleNewPlayList}>
            Nova playlist <AiOutlinePlus />
          </button>
        </div>
        <ul className="playlists">
          <li className="liked">
            <BsFillSuitHeartFill /> <span>Curtidas</span>
          </li>
          {playLists &&
            playLists.map((playlist, key) => (
              <li onClick={() => handlePlatlist(playlist.name)} key={key}>
                {playlist.name}
              </li>
            ))}
        </ul>
        {currentPlayList.songs && (
          <SongsList
            list={{ name: currentPlayList.name, songs: currentPlayList.songs }}
          />
        )}
      </PlayListContainer>
    </>
  );
};

export default PlayList;
