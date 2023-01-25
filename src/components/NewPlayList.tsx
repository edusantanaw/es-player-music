import { useRef } from "react";
import { useCreatePlayList } from "../hooks/useCreatePlaylist";
import { songsList } from "../utils/songsList";

const NewPlayList = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const { handleCreatePlayList, handleSelectedSong } = useCreatePlayList({
    nameRef,
  });

  return (
    <div>
      <div className="close"></div>
      <div className="modal">
        <form>
          <label htmlFor="name">Nome da playlist</label>
          <input type="text" ref={nameRef} placeholder="example" />
          <ul className="songs">
            {songsList.map((song, key) => (
              <li key={key} onClick={() => handleSelectedSong(song)}>
                <img src={song.image} alt={song.name} />
                <div className="infos">
                  <h3>{song.name}</h3>
                  <span>{song.autor}</span>
                </div>
              </li>
            ))}
          </ul>
        </form>
      </div>
    </div>
  );
};

export default NewPlayList;
