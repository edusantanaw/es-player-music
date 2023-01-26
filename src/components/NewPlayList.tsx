import { useRef } from "react";
import { useCreatePlayList } from "../hooks/useCreatePlaylist";
import { songsList } from "../utils/songsList";
import { NewPlaylistModal } from "./styles/newPlaylist.style";

interface props {
  handleClose: () => void;
}

const NewPlayList = ({ handleClose }: props) => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const { handleCreatePlayList, handleSelectedSong } = useCreatePlayList({
    nameRef,
  });

  return (
    <NewPlaylistModal>
      <div className="close" onClick={handleClose} />
      <form>
        <div className="name_input">
          <label htmlFor="name">Nome da playlist</label>
          <input type="text" ref={nameRef} placeholder="example" />
        </div>
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
    </NewPlaylistModal>
  );
};

export default NewPlayList;
