import React, { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { useSong } from "../hooks/useSong";
import { songs } from "../types/global";
import { makeSongsStorage } from "../utils/likes";

const Song = ({ song }: { song: songs }) => {
  const { handleCurrentSong, currentSong, handleLike } = useSong();
  const [likes, setLikes] = useState<string[] | null>(null);

  useEffect(() => {
    const songLikes = makeSongsStorage();
    if (songLikes) {
      setLikes(songLikes);
    }
  }, []);

  const verifyliked = (id: string) => {
    if (!likes) return;
    const find = likes.filter((songId) => songId === id);
    if (find.length > 0) return true;
    return false
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
        id={verifyliked(song.name) ? "liked" : ""}
        onClick={() => handleLike(song.name)}
      />
    </li>
  );
};

export default Song;
