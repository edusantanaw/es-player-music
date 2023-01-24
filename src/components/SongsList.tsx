import { useSong } from "../hooks/useSong";
import { Songs } from "./styles/songsList.style";

import Song from "./Song";

const SongsList = () => {
  const { currentLista } = useSong();

  return (
    <Songs>
      <h2>{currentLista.name}</h2>
      {currentLista.songs.map((songs, key) => (
        <Song song={songs} key={key} />
      ))}
    </Songs>
  );
};

export default SongsList;
