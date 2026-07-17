import { createContext, useContext, useState } from "react";

const RecentContext = createContext();

export function RecentProvider({ children }) {
  const [recentSongs, setRecentSongs] = useState([]);

  const addRecentSong = (song) => {
    setRecentSongs((prev) => {
      const filtered = prev.filter(
        (item) => item.id !== song.id
      );

      return [song, ...filtered].slice(0, 10);
    });
  };

  return (
    <RecentContext.Provider
      value={{
        recentSongs,
        addRecentSong
      }}
    >
      {children}
    </RecentContext.Provider>
  );
}

export const useRecent = () =>
  useContext(RecentContext);