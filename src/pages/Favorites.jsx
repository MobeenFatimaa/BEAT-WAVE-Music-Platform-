import { useFavorites } from "../context/FavoritesContext";
import SongCard from "../components/SongCard";

export default function Favorites({
  setCurrentSong
}) {
  const { favorites } = useFavorites();

  return (
    <div className="flex-1 p-8 overflow-auto">

      <h1 className="text-3xl font-bold mb-8">
        Favorite Songs
      </h1>

      {favorites.length === 0 ? (
        <p className="text-gray-400">
          No favorite songs yet.
        </p>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {favorites.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              setCurrentSong={setCurrentSong}
            />
          ))}

        </div>
      )}

    </div>
  );
}