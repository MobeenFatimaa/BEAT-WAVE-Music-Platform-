
import { useState } from "react";
import songs from "../data/songs";

export default function Playlists({ setCurrentSong })  {
  const [selectedPlaylist, setSelectedPlaylist] =
    useState(null);

  const playlists = [
    {
      id: 1,
      name: "Study Beats",
      songs: songs.slice(0, 5),
    },
    {
      id: 2,
      name: "Workout Mix",
      songs: songs.slice(5, 10),
    },
    {
      id: 3,
      name: "Chill Vibes",
      songs: songs.slice(10, 15),
    },
    {
      id: 4,
      name: "Road Trip",
      songs: songs.slice(15, 20),
    },
  ];

  return (
    <div className="flex-1 p-8 overflow-auto">

      <h1 className="text-4xl font-bold mb-8">
        🎵 Playlists
      </h1>

      {/* Playlist Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            onClick={() =>
              setSelectedPlaylist(playlist)
            }
            className="
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-6
              cursor-pointer
              hover:scale-105
              hover:border-cyan-400
              transition-all
            "
          >
            <h2 className="text-xl font-bold mb-2">
              {playlist.name}
            </h2>

            <p className="text-gray-400">
              {playlist.songs.length} Songs
            </p>
          </div>
        ))}

      </div>

      {/* Songs appear here after click */}
      {selectedPlaylist && (
        <div className="mt-10">

          <h2 className="text-3xl font-bold mb-6">
            {selectedPlaylist.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {selectedPlaylist.songs.map((song) => (
  <div
    key={song.id}
    onClick={() => setCurrentSong(song)}
    className="
      bg-white/10
      rounded-3xl
      overflow-hidden
      border
      border-white/10
      cursor-pointer
      hover:scale-105
      hover:border-cyan-400
      transition-all
    "
  >
                <img
                  src={song.image}
                  alt={song.title}
                  className="
                    w-full
                    h-52
                    object-cover
                  "
                />

                <div className="p-4">
                  <h3 className="font-bold">
                    {song.title}
                  </h3>

                  <p className="text-gray-400">
                    {song.artist}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      )}

    </div>
  );
}