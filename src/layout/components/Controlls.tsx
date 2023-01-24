import React, { useRef, useState } from "react";
import { VscDebugStart } from "react-icons/vsc";
import { AiOutlinePause } from "react-icons/ai";
import { useSong } from "../../hooks/useSong";
import { ControllsContainer } from "./controll.style";
import { MdOutlineSkipNext, MdOutlineSkipPrevious } from "react-icons/md";

export const Controlls = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>("00:00");

  const { handleNext, handlePrev, currentSong } = useSong();

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
    <ControllsContainer>
      <div className="time">
        <span>{currentTime}</span>
        <span> - {durantion}</span>
      </div>
      <div className="buttons">
        <MdOutlineSkipPrevious onClick={() => handlePrev(currentSong.id)} />
        {!playing ? (
          <VscDebugStart onClick={handlePlay} />
        ) : (
          <AiOutlinePause onClick={handlePlay} />
        )}
        <MdOutlineSkipNext onClick={() => handleNext(currentSong.id)} />
      </div>
      <audio
        src={currentSong.source}
        onChange={countTime}
        onTimeUpdate={countTime}
        ref={audioRef}
        controls
      ></audio>
    </ControllsContainer>
  );
};
