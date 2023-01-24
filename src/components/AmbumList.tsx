import { albumList } from "../utils/albumList";
import { AlbumlistContainer } from "./styles/albumlist.style";

const Albums = () => {
  return (
    <AlbumlistContainer>
      <div>
        <h2>Albums</h2>
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
