import { Link } from "react-router-dom";
import { usePlayList } from "../hooks/usePlayList";
import { Title } from "../styles/global";
import { AlbumlistContainer } from "./styles/albumlist.style";

const Albums = () => {

  const {playlists} = usePlayList()

  return (
    <AlbumlistContainer>
      <div className="head">
        <Title>Playlist</Title>
        <Link to="playlist">Veja todos</Link>
      </div>
      <ul>
        {playlists && playlists.map((playlist, key) => {
          if (key > 2) return;
          return (
            <li key={key}>
              <img src={playlist.image} alt={playlist.name} />
              <div className="infos">
                <span>{playlist.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </AlbumlistContainer>
  );
};

export default Albums;
