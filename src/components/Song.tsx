import React, { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { useSong } from "../hooks/useSong";
import { songs } from "../types/global";
import { makeSongsStorage } from "../utils/likes";

const Song = ({ song }: { song: songs }) => {
  const { handleCurrentSong, currentSong, handleLike } = useSong();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const songLikes = makeSongsStorage();
    if (songLikes) {
      const find = songLikes.filter((songId) => songId === song.name);
      if (find.length > 0) setLiked(true);
    }
  }, []);

  const updateLike = (name: string) => {
    liked ? setLiked(false) : setLiked(true);
    handleLike(song.name);
  };

  return (
    <li
      id={currentSong.id === song.id ? "current" : ""}
      onClick={() => handleCurrentSong(song)}
    >
      <div className="infos">
        <img src={song.image} alt={song.name} />
        <div>
          <p>{song.name}</p>
          <span>{song.autor}</span>
        </div>
      </div>
      <FiHeart
        id={liked ? "liked" : ""}
        onClick={() => updateLike(song.name)}
      />
    </li>
  );
};

export default Song;
