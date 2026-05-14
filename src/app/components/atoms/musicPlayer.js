import { useRef, useState } from "react";
import { FaPlay, FaPause, FaMusic } from "react-icons/fa";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

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

        <audio ref={audioRef} loop>
          <source src="/music/akad.mp3" type="audio/mp3" />
        </audio>
      </div>
    </>
  );
}
