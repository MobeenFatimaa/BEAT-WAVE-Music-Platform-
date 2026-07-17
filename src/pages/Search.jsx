
import songs from "../data/songs";
import { useState } from "react";
import { FaSearch, FaHeart, FaPlay } from "react-icons/fa";
import { useFavorites } from "../context/FavoritesContext";
import { useRecent } from "../context/RecentContext";

export default function Search({
  currentSong,
  setCurrentSong
}) {
  const [query, setQuery] = useState("");
const { favorites, toggleFavorite } =
  useFavorites();

const { addRecentSong } =
  useRecent();
  const filteredSongs = songs.filter((song) =>
    song.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex-1 p-8 overflow-auto">

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-8">
        🔍 Search Music
      </h1>

      {/* SEARCH BAR */}
      <div className="relative max-w-2xl mb-10">
        <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          placeholder="Search songs..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="
            w-full
            pl-14
            pr-6
            py-4
            rounded-full
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            outline-none
            text-white
          "
        />
      </div>

      {/* SONG GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

        {filteredSongs.map((song) => (
          <div
            key={song.id}
            className="
              group
              relative
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              overflow-hidden
              hover:scale-[1.03]
              transition-all
              duration-300
            "
          >

            {/* IMAGE */}
            <div className="relative">
              <img
                src={song.image}
                alt={song.title}
                className="
                  w-full
                  h-48
                  object-cover
                  group-hover:scale-110
                  transition-transform
                  duration-500
                "
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/20" />

              {/* HEART ICON (UI ONLY) */}
              <button
  onClick={() => toggleFavorite(song)}
  className={`
    absolute
    top-3
    right-3
    p-2
    rounded-full
    z-10
    ${
      favorites.find(
        (item) => item.id === song.id
      )
        ? "bg-pink-500 text-white"
        : "bg-black/40 text-pink-400"
    }
  `}
>
  <FaHeart />
</button>
            </div>

            {/* TEXT */}
            <div className="p-4">
              <h3 className="font-semibold text-white">
                {song.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {song.artist}
              </p>
            </div>

            {/* PLAY BUTTON */}
            <button
  onClick={() => {
    setCurrentSong(song);
    addRecentSong(song);
  }}
  className="
    absolute
    bottom-4
    right-4
    w-12
    h-12
    rounded-full
    bg-cyan-500
    flex
    items-center
    justify-center
    shadow-lg
    opacity-0
    group-hover:opacity-100
    group-hover:translate-y-0
    translate-y-2
    transition-all
    duration-300
  "
>
  <FaPlay />
</button>
          </div>
        ))}

      </div>

    </div>
  );
}