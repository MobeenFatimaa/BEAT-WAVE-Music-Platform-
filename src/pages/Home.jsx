import songs from "../data/songs";
import SongCard from "../components/SongCard";
import Categories from "../components/Categories";
import { useState } from "react";
import RecentlyPlayed from "../components/RecentlyPlayed";
export default function Home({
  currentSong,
  setCurrentSong,
  searchTerm
}) {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const filteredSongs = songs.filter((song) => {
    const matchesSearch =
      song.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All"
        ? true
        : song.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex-1 p-8 overflow-auto">

  

      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
<RecentlyPlayed />
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">

        {filteredSongs.map((song) => (
         <SongCard
  key={song.id}
  song={song}
  currentSong={currentSong}
  setCurrentSong={setCurrentSong}
/>
        ))}

      </div>
    </div>
  );
}