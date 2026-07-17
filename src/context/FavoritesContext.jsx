import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
 const [favorites, setFavorites] = useState(() => {
  const saved =
    localStorage.getItem("favorites");

  return saved ? JSON.parse(saved) : [];
});
useEffect(() => {
  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
  );
}, [favorites]);
  const toggleFavorite = (song) => {
    const exists = favorites.find(
      (item) => item.id === song.id
    );

    if (exists) {
      setFavorites(
        favorites.filter(
          (item) => item.id !== song.id
        )
      );
    } else {
      setFavorites([...favorites, song]);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () =>
  useContext(FavoritesContext);