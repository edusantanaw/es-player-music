import { useEffect, useState } from "react";
import { useSong } from "./useSong";

interface props {
  audioRef: React.RefObject<HTMLAudioElement>;
}

export default function useSongControll({ audioRef }: props) {
  const [playing, setPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>("00:00");
  const { handleNext, handlePrev, currentSong } = useSong();

  const formatTime = (time: number) => {
    if (Number.isNaN(time)) {
      return "00:00";
    }
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`;
  };

  useEffect(() => {
    if (audioRef.current) {
      if (playing) {
        setPlaying(true);
      }
    }
  }, [currentSong.id]);

  const countTime = () => {
    if (audioRef.current) {
      let current = Number(audioRef.current.currentTime);
      const formatedTime = formatTime(current);
      setCurrentTime(formatedTime);
    }
  };

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

  const getDuration = () => {
    if (!audioRef.current) return "00:00";
    const durantion = formatTime(Number(audioRef.current.duration));
    return durantion;
  };

  return {
    handlePlay,
    handleNext,
    handlePrev,
    countTime,
    currentTime,
    currentSong,
    playing,
    getDuration,
  };
}
