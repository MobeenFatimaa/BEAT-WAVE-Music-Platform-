import songs from "./data/songs";
import bg from "./assets/backgrounds-bg.jpg";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Recent from "./pages/Recent";
import Playlists from "./pages/Playlists";
import Library from "./pages/Library";
import Search from "./pages/Search";
import MusicPlayer from "./components/MusicPlayer";
import CustomCursor from "./components/CustomCursor";
import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentSong, setCurrentSong] = useState(null);

  const playNextSong = () => {
    if (!currentSong) return;

    const currentIndex = songs.findIndex(
      (song) => song.id === currentSong.id
    );

    const nextIndex = (currentIndex + 1) % songs.length;

    setCurrentSong(songs[nextIndex]);
  };

  const playPreviousSong = () => {
    if (!currentSong) return;

    const currentIndex = songs.findIndex(
      (song) => song.id === currentSong.id
    );

    const previousIndex =
      currentIndex === 0 ? songs.length - 1 : currentIndex - 1;

    setCurrentSong(songs[previousIndex]);
  };

  return (
    <>
      <CustomCursor />

      <div className="h-screen w-screen flex text-white overflow-hidden bg-cover bg-center"
      
  style={{
    backgroundImage: `url(${bg})`,
  }}
 
>
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        {/* Sidebar */}
      <div className="relative z-10">
  <Sidebar />
</div>

        {/* Main Section */}
      <div className="flex-1 flex flex-col relative z-10">

          {/* Navbar */}
          <Navbar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          {/* ROUTES */}
          <Routes>
            <Route
              path="/"
              element={
                <Home
  currentSong={currentSong}
  setCurrentSong={setCurrentSong}
  searchTerm={searchTerm}
/>
              }
            />

            <Route
              path="/favorites"
              element={
                <Favorites setCurrentSong={setCurrentSong} />
              }
            />

            <Route
              path="/recent"
              element={
                <Recent setCurrentSong={setCurrentSong} />
              }
            />

           <Route
  path="/playlists"
  element={
    <Playlists
      setCurrentSong={setCurrentSong}
    />
  }
/>

            <Route
              path="/library"
              element={<Library />}
            />

         <Route
  path="/search"
  element={
    <Search
      currentSong={currentSong}
      setCurrentSong={setCurrentSong}
    />
  }
/>
          </Routes>

          {/* Music Player */}
          <MusicPlayer
            currentSong={currentSong}
            playNextSong={playNextSong}
            playPreviousSong={playPreviousSong}
          />

        </div>
      </div>
    </>
  );
}