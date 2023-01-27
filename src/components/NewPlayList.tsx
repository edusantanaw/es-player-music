import { useRef } from "react";
import { useCreatePlayList } from "../hooks/useCreatePlaylist";
import { songs } from "../types/global";
import { songsList } from "../utils/songsList";
import SongNewPlaylist from "./SongNewPlaylist";
import { NewPlaylistModal } from "./styles/newPlaylist.style";

interface props {
  handleClose: () => void;
}

const NewPlayList = ({ handleClose }: props) => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const { handleCreatePlayList, handleSelectedSong, selectedSong } =
    useCreatePlayList({
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
            <SongNewPlaylist
              song={song}
              key={key}
              handleSelectedSong={handleSelectedSong}
              selectedSong={selectedSong}
            />
          ))}
        </ul>
      </form>
    </NewPlaylistModal>
  );
};

export default NewPlayList;
