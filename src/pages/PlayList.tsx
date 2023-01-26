import { usePlayList } from "../hooks/usePlayList";
import { AiOutlinePlus } from "react-icons/ai";
import { PlayListContainer } from "./styles/playlist.style";
import { Title } from "../styles/global";
import { BsFillSuitHeartFill } from "react-icons/bs";
import SongsList from "../components/SongsList";
import { useSong } from "../hooks/useSong";
import { loadLikeSongs } from "../utils/likeList";
import { useState } from "react";
import NewPlayList from "../components/NewPlayList";

const PlayList = () => {
  const { playLists } = usePlayList();
  const [newPlayList, setNewPlayList] = useState(false);

  const { currentLista } = useSong();
  const likePlaylist = loadLikeSongs();

  const handleNewPlayList = () => {
    newPlayList ? setNewPlayList(false) : setNewPlayList(true);
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
            playLists.map((playList, key) => (
              <li key={key}>{playList.name}</li>
            ))}
        </ul>
        <SongsList
          list={
            likePlaylist
              ? {
                  name: "like",
                  songs: likePlaylist,
                }
              : currentLista
          }
        />
      </PlayListContainer>
    </>
  );
};

export default PlayList;
