import React, { useEffect, useRef, useState } from "react";
import { songs } from "../types/global";
import { SongContainer } from "./styles/song.style";

interface prosp {
  song: songs;
}

const Song = ({ song }: prosp) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>("00:00");

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
  const countTime = () => {
    if (audioRef.current) {
      let current = Number(audioRef.current.currentTime);
      const minutes = Math.floor(current / 60);
      const seconds = Math.floor(current % 60);
      setCurrentTime(
        `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`
      );
    }
  };

  return (
    <SongContainer>
      <img src={song.image} alt={song.image} />
      <h2>{song.name}</h2>
      <span>{song.autor}</span>
      <div className="audio">
        <h2>{currentTime}</h2>
        <button onClick={handlePlay}>play</button>
        <audio
          src={song.source}
          onChange={countTime}
          onTimeUpdate={countTime}
          ref={audioRef}
          controls
        ></audio>
      </div>
    </SongContainer>
  );
};

export default Song;
