import { useSong } from "../hooks/useSong";
import { Songs } from "./styles/songsList.style";
import { FiHeart } from "react-icons/fi";

const SongsList = () => {
  const { handleCurrentSong, currentSong, currentLista, handleLike } =
    useSong();
  return (
    <Songs>
      <h2>{currentLista.name}</h2>
      {currentLista.songs.map((songs, key) => (
        <li
          id={currentSong.id === songs.id ? "current" : ""}
          key={key}
          onClick={() => handleCurrentSong(songs)}
        >
          <div className="infos">
            <img src={songs.image} alt={songs.name} />
            <div>
              <p>{songs.name}</p>
              <span>{songs.autor}</span>
            </div>
          </div>
          <FiHeart onClick={() => handleLike(songs.id)} />
        </li>
      ))}
    </Songs>
  );
};

export default SongsList;
