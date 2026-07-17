import { useRecent } from "../context/RecentContext";

export default function RecentlyPlayed() {
  const { recentSongs } = useRecent();

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">
        🕒 Recently Played
      </h2>

      <div className="flex gap-4 overflow-x-auto">

        {recentSongs.map((song) => (
          <div
            key={song.id}
            className="
              min-w-[200px]
              bg-white/10
              backdrop-blur-xl
              rounded-2xl
              p-4
            "
          >
            <img
              src={song.image}
              alt={song.title}
              className="
                w-full
                h-32
                object-cover
                rounded-xl
              "
            />

            <h3 className="mt-3 font-semibold">
              {song.title}
            </h3>
          </div>
        ))}

      </div>
    </div>
  );
}