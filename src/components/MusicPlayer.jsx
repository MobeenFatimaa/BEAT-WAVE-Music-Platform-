import { useEffect, useRef, useState } from "react";
import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
  FaVolumeUp
} from "react-icons/fa";

export default function MusicPlayer({
  currentSong,
  playNextSong,
  playPreviousSong
}) {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (currentSong && audioRef.current) {
      audioRef.current.src = currentSong.audio;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentSong]);
 

  const togglePlay = () => {
    if (!audioRef.current || !currentSong) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleVolume = (e) => {
    const value = Number(e.target.value);

    setVolume(value);

    if (audioRef.current) {
      audioRef.current.volume = value;
    }
  };
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
  return (
    <div className="h-24 border-t border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-between px-8">

      {currentSong ? (
        <>
          {/* Song Info */}
          <div className="flex items-center gap-4">
            <img
              src={currentSong.image}
              alt={currentSong.title}
              className="w-14 h-14 rounded-lg object-cover"
            />

            <div>
              <h3 className="font-semibold">
                {currentSong.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {currentSong.artist}
              </p>
              <p className="text-red-400">
  {Math.floor(currentTime)}
</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col items-center w-[40%]">

  <div className="flex items-center gap-6 text-2xl mb-2">

  <button
  onClick={playPreviousSong}
  className="
    hover:text-cyan-400
    transition
  "
>
  <FaBackward />
</button>

    <button
      onClick={togglePlay}
      className="bg-cyan-500 p-3 rounded-full"
    >
      {isPlaying ? <FaPause /> : <FaPlay />}
    </button>

    <button onClick={playNextSong}
     className="
    hover:text-cyan-400
    transition
  ">
  <FaForward />
</button>

  </div>

  <input
    type="range"
    min="0"
    max={duration}
    value={currentTime}
    onChange={(e) => {
      audioRef.current.currentTime = e.target.value;
      setCurrentTime(e.target.value);
    }}
    className="w-full"
  />

  <div className="flex justify-between w-full text-xs text-gray-400">

    <span>{formatTime(currentTime)}</span>

    <span>{formatTime(duration)}</span>

  </div>

</div>

          {/* Volume */}
          <div className="flex items-center gap-3">
            <FaVolumeUp />

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolume}
            />
          </div>

          {/* Hidden Audio */}
          <audio
  ref={audioRef}
  onEnded={playNextSong}
  onTimeUpdate={() =>
    setCurrentTime(audioRef.current.currentTime)
  }
  onLoadedMetadata={() =>
    setDuration(audioRef.current.duration)
  }
/>
        </>
      ) : (
        <p className="text-gray-400">
          No song selected 🎵
        </p>
      )}

    </div>
  );
}