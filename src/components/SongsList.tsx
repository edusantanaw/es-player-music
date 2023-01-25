import { Songs } from "./styles/songsList.style";

import Song from "./Song";
import { Title } from "../styles/global";
import { songs } from "../types/global";

interface props {
  list: {name: string, songs: songs[];}
}
const SongsList = ({ list }: props) => {
  return (
    <Songs>
      <Title>{list.name}</Title>
      {list.songs.map((songs, key) => (
        <Song song={songs} key={key} />
      ))}
    </Songs>
  );
};

export default SongsList;
