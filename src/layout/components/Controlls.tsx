import { useRef } from "react";
import { VscDebugStart } from "react-icons/vsc";
import { AiOutlinePause } from "react-icons/ai";

import { ControllsContainer } from "./controll.style";
import { MdOutlineSkipNext, MdOutlineSkipPrevious } from "react-icons/md";
import useSongControll from "../../hooks/useSongControlls";

export const Controlls = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const {
    countTime,
    currentSong,
    currentTime,
    handleNext,
    handlePlay,
    handlePrev,
    playing,
    getDuration
  } = useSongControll({ audioRef });


  return (
    <ControllsContainer>
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
      ></audio>
    </ControllsContainer>
  );
};
