import { usePlayList } from "../hooks/usePlayList";
import { AiOutlinePlus } from "react-icons/ai";
import { PlayListContainer } from "./styles/playlist.style";
import { Title } from "../styles/global";
import { BsFillSuitHeartFill } from "react-icons/bs";
import SongsList from "../components/SongsList";
import { useSong } from "../hooks/useSong";
import { loadLikeSongs } from "../utils/likeList";

const PlayList = () => {
  const { playLists } = usePlayList();

  const { currentLista } = useSong();
  console.log(loadLikeSongs())
  return (
    <PlayListContainer>
      <div className="head">
        <Title>Playlists</Title>
        <button>
          Nova playlist <AiOutlinePlus />
        </button>
      </div>
      <ul className="playlists">
        <li className="liked">
          <BsFillSuitHeartFill /> <span>Curtidas</span>
        </li>
        {playLists &&
          playLists.map((playList, key) => <li key={key}>{playList.name}</li>)}
      </ul>
      <SongsList list={currentLista} />
    </PlayListContainer>
  );
};

export default PlayList;
