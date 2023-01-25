import { Link } from "react-router-dom";
import { Title } from "../styles/global";
import { albumList } from "../utils/albumList";
import { AlbumlistContainer } from "./styles/albumlist.style";

const Albums = () => {
  return (
    <AlbumlistContainer>
      <div className="head">
        <Title>Albums</Title>
        <Link to="albums">Veja todos</Link>
      </div>
      <ul>
        {albumList.map((album, key) => {
          if (key > 3) return;
          return (
            <li key={key}>
              <img src={album.image} alt={album.name} />
              <div className="infos">
                <span>{album.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </AlbumlistContainer>
  );
};

export default Albums;
