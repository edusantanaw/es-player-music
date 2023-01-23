import React, { useEffect, useRef, useState } from "react";
import { songs } from "../types/global";
import { SongContainer } from "./styles/song.style";

interface prosp {
  song: songs;
}

const Song = ({ song }: prosp) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.style.display = "none";
    }
  }, []);

  const handlePlay = () => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
        return;
      }
      setPlaying(true);
      audioRef.current.play();
    }
  };

  return (
    <SongContainer>
      <img src={song.image} alt={song.image} />
      <h2>{song.name}</h2>
      <span>{song.autor}</span>
      <div className="audio">
        <input type="radio" />
        <button onClick={handlePlay}>play</button>
        <audio src={song.source} ref={audioRef} controls></audio>
      </div>
    </SongContainer>
  );
};

export default Song;
