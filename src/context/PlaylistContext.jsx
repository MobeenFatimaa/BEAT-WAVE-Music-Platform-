import { createContext, useContext, useEffect, useState } from "react";

const PlaylistContext = createContext();

export function PlaylistProvider({ children }) {
  const [playlists, setPlaylists] = useState(() => {
    const saved = localStorage.getItem("playlists");
    return saved ? JSON.parse(saved) : [];
  });

  // 💾 Save to localStorage whenever playlists change
  useEffect(() => {
    localStorage.setItem("playlists", JSON.stringify(playlists));
  }, [playlists]);

  // 🎵 Create new playlist
  const createPlaylist = (name) => {
    const newPlaylist = {
      id: Date.now(),
      name,
      songs: [],
      createdAt: new Date().toISOString(),
    };

    setPlaylists((prev) => [...prev, newPlaylist]);
  };

  // 🎧 Delete playlist
  const deletePlaylist = (id) => {
    setPlaylists((prev) => prev.filter((p) => p.id !== id));
  };

  // ➕ Add song to playlist
  const addSongToPlaylist = (playlistId, song) => {
    setPlaylists((prev) =>
      prev.map((playlist) => {
        if (playlist.id === playlistId) {
          const alreadyExists = playlist.songs.find(
            (s) => s.id === song.id
          );

          if (alreadyExists) return playlist;

          return {
            ...playlist,
            songs: [...playlist.songs, song],
          };
        }
        return playlist;
      })
    );
  };

  // ❌ Remove song from playlist
  const removeSongFromPlaylist = (playlistId, songId) => {
    setPlaylists((prev) =>
      prev.map((playlist) => {
        if (playlist.id === playlistId) {
          return {
            ...playlist,
            songs: playlist.songs.filter((s) => s.id !== songId),
          };
        }
        return playlist;
      })
    );
  };

  // 🔍 Get single playlist
  const getPlaylist = (id) => {
    return playlists.find((p) => p.id === id);
  };

  return (
    <PlaylistContext.Provider
      value={{
        playlists,
        createPlaylist,
        deletePlaylist,
        addSongToPlaylist,
        removeSongFromPlaylist,
        getPlaylist,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
}

// Custom hook
export function usePlaylists() {
  return useContext(PlaylistContext);
}