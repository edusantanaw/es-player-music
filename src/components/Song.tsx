import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { songs } from "../types/global";
import { SongContainer } from "./styles/song.style";
import { VscDebugStart } from "react-icons/vsc";
import { AiOutlinePause } from "react-icons/ai";

interface props {
  song: songs;
  next: (index: number) => void;
  prev: (index: number) => void;
}

const Song = ({ song, next, prev }: props) => {
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

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`;
  };

  const countTime = () => {
    if (audioRef.current) {
      let current = Number(audioRef.current.currentTime);
      const formatedTime = formatTime(current);
      setCurrentTime(formatedTime);
    }
  };
  let durantion = "00:00";
  if (audioRef.current) {
    durantion = formatTime(Number(audioRef.current.duration));
  }
  return (
    <SongContainer>
     <div className="content">
     <img src={song.image} alt={song.image} />
      <h2>{song.name}</h2>
      <span>{song.autor}</span>
     </div>
      <div className="audio">
        <h2>{currentTime}</h2>
        <h2> / {durantion}</h2>
        <button onClick={() => prev(song.id)}>prev</button>
        <button onClick={handlePlay}>
          {!playing ? <VscDebugStart /> : <AiOutlinePause />}
        </button>
        <button onClick={() => next(song.id)}>Next</button>
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
