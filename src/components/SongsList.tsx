import { useSong } from "../hooks/useSong";
import { Songs } from "./styles/songsList.style";

const SongsList = () => {
  const { handleCurrentSong, currentSong, currentLista } = useSong();
  return (
    <Songs>
      <h2>{currentLista.name}</h2>
      {currentLista.songs.map((songs, key) => (
        <li
          id={currentSong.id === songs.id ? "current" : ""}
          key={key}
          onClick={() => handleCurrentSong(songs)}
        >
          <img src={songs.image} alt={songs.name} />
          <div>
            <p>{songs.name}</p>
            <span>{songs.autor}</span>
          </div>
        </li>
      ))}
    </Songs>
  );
};

export default SongsList;
