import { FaPlay, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { useFavorites } from "../context/FavoritesContext";
import { useRecent } from "../context/RecentContext";

export default function SongCard({
  song,
  currentSong,
  setCurrentSong,
}) {
  const { favorites, toggleFavorite } = useFavorites();
  const { addRecentSong } = useRecent();

  const isFavorite = favorites.find(
    (item) => item.id === song.id
  );

  const handlePlay = () => {
    setCurrentSong(song);
    addRecentSong(song);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        bg-white/10
        backdrop-blur-2xl
        rounded-3xl
        overflow-hidden
        border
        h-[500px]
        flex
        flex-col
        transition-all
        duration-300
        cursor-pointer
        hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]
        ${
          song.id === currentSong?.id
            ? "border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.6)]"
            : "border-white/10"
        }
      `}
    >
      {/* Album Image */}
      <div className="relative w-full h-[300px] overflow-hidden">
        <img
          src={song.image}
          alt={song.title}
          className="w-full h-full object-cover"
        />

        {/* Favorite Button (overlay top-right) */}
        <button
          onClick={() => toggleFavorite(song)}
          className={`
            absolute top-3 right-3 p-3 rounded-full transition-all
            ${
              isFavorite
                ? "bg-pink-500 text-white"
                : "bg-black/40 text-pink-400 hover:bg-black/60"
            }
          `}
        >
          <FaHeart />
        </button>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-bold text-lg line-clamp-1">
            {song.title}
          </h3>
          <p className="text-gray-400 line-clamp-1">
            {song.artist}
          </p>
        </div>

        {/* Bottom Play Button (ONLY ONE) */}
        <button
          onClick={handlePlay}
          className="
            mt-5
            w-full
            flex
            items-center
            justify-center
            gap-2
            bg-cyan-500
            px-4
            py-3
            rounded-full
            hover:bg-cyan-400
            transition-all
          "
        >
          <FaPlay />
          Play
        </button>
      </div>
    </motion.div>
  );
}