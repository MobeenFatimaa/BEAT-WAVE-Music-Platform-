import songs from "../data/songs";

export default function Library() {
  return (
    <div className="flex-1 p-8 overflow-auto">

      <h1 className="text-4xl font-bold mb-8">
        🎼 Your Library
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

        {songs.map((song) => (
          <div
            key={song.id}
            className="
              bg-white/10
              backdrop-blur-xl
              rounded-3xl
              overflow-hidden
            "
          >
            <img
              src={song.image}
              alt={song.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h3>{song.title}</h3>
              <p className="text-gray-400">
                {song.artist}
              </p>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}