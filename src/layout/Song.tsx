import { SongContainer } from "./song.style";
import { useSong } from "../hooks/useSong";
import { Controlls } from "./components/Controlls";

const Song = () => {
  const { currentSong } = useSong();

  return (
    <SongContainer>
      <div className="content">
        <img src={currentSong.image} alt={currentSong.image} />
        <div>
          <h2>{currentSong.name}</h2>
          <span>{currentSong.autor}</span>
        </div>
      </div>
      <Controlls />
    </SongContainer>
  );
};

export default Song;
