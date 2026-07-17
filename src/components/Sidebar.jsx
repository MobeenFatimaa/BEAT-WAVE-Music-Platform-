import {
  FaHome,
  FaSearch,
  FaMusic,
  FaHeart
} from "react-icons/fa";
import { useFavorites } from "../context/FavoritesContext";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Sidebar() {
  const { favorites } = useFavorites();

  return (
    <div className="w-64 h-screen flex flex-col bg-white/5 backdrop-blur-xl border-r border-white/10 p-6">

     <div className="flex items-center gap-3 mb-8">
  <img
    src={logo}
    alt="BeatWave"
    className="
      w-12
      h-12
      rounded-xl
      shadow-[0_0_20px_rgba(0,255,255,0.5)]
    "
  />
  <div>
    <div className="text-2xl md:text-3xl font-bold tracking-wide">
          <span className="text-white">Beat</span>
          <span className="text-cyan-400 animate-pulse">Wave</span>
        </div>
    <p className="text-xs text-gray-400">
      Music Platform
    </p>

  </div>

</div>
      <div className="flex flex-col flex-1 text-gray-300 space-y-5">
  
  {/* Top Links */}
  <div className="space-y-5">
    <Link
  to="/"
  className="flex items-center gap-4 text-lg hover:text-cyan-300"
>
  <FaHome />
  Home
</Link>

<Link
  to="/search"
  className="flex items-center gap-4 text-lg hover:text-cyan-300"
>
  <FaSearch />
  Search
</Link>

<Link
  to="/library"
  className="flex items-center gap-4 text-lg hover:text-cyan-300"
>
  <FaMusic />
  Library
</Link>

<Link
  to="/favorites"
  className="flex items-center gap-4 text-lg hover:text-cyan-300"
>
  <FaHeart />
  Favorites ({favorites.length})
</Link>

<Link
  to="/recent"
  className="flex items-center gap-4 text-lg hover:text-cyan-300"
>
  🕒 Recent
</Link>
<Link
  to="/playlists"
  className="flex items-center gap-4 text-lg hover:text-cyan-300"
>
  🎶 Playlists
</Link>
  </div>

  {/* Footer pushed down */}
  <div className="mt-auto text-sm text-gray-400">
    <p className="text-base font-semibold text-gray-300">
      BeatWave v1.0
      
    </p>
    <p className="text-base font-semibold text-gray-300">
      Developed by Mobeen Fatima
      
    </p>

    <p className="text-sm">
      Built with React + Tailwind
    </p>
  </div>

</div>
    </div>
  );
}