import { useCallback, useEffect, useRef, useState } from "react";
import { FaPlay, FaPause, FaMusic } from "react-icons/fa";

export default function MusicPlayer({ shouldPlayMusic }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!shouldPlayMusic || !audioRef.current) return;

    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.warn("Play request blocked until user interaction:", error);
        });
    }
  }, [shouldPlayMusic]);

  const toggleMusic = useCallback(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.warn("Play request failed:", error);
        });
    }
  }, [isPlaying]);

  return (
    <>
      {/* Music Section */}
      <div className="music-player">
        <button className="music-btn" onClick={toggleMusic}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <div className="music-info">
          <FaMusic className="music-icon" />
          <div>
            <h4>Wedding Song</h4>
            <p>Akad - Saxopone Payung Teduh</p>
          </div>
        </div>

        <audio ref={audioRef} autoPlay loop>
          <source src="/music/akad.mp3" type="audio/mp3" />
        </audio>
      </div>
    </>
  );
}
