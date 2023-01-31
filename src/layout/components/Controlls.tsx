import { useRef } from "react";
import { VscDebugStart } from "react-icons/vsc";
import { AiOutlinePause } from "react-icons/ai";
import { BarTime, ControllsContainer } from "./controll.style";
import {
  MdOutlineSkipNext,
  MdOutlineSkipPrevious,
  MdVolumeDownAlt,
} from "react-icons/md";
import useSongControll from "../../hooks/useSongControlls";

export const Controlls = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const volumeRef = useRef<HTMLInputElement | null>(null);
  const {
    countTime,
    currentSong,
    currentTime,
    handleNext,
    handlePlay,
    handlePrev,
    playing,
    getDuration,
    currentTimeBar,
  } = useSongControll({ audioRef });

  const handleVolume = () => {
    if (volumeRef.current && audioRef.current) {
      const volume = Number(volumeRef.current.value) / 100;
      audioRef.current.volume = volume;
    }
  };

  return (
    <ControllsContainer>
      <BarTime current={`${currentTimeBar}%`}>
        <div />
      </BarTime>
      <div className="time">
        <span>{currentTime}</span>
        <span> - {getDuration()}</span>
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
        onEnded={() => handleNext(currentSong.id)}
      />
      <div className="volumn">
        <MdVolumeDownAlt />
        <input
          id="volumn"
          onChange={handleVolume}
          type="range"
          ref={volumeRef}
        />
      </div>
    </ControllsContainer>
  );
};
