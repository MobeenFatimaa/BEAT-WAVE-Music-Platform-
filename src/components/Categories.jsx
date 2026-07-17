
export default function Categories({
  selectedCategory,
  setSelectedCategory
}) {
  const categories = [
    "All",
    "Pop",
    "Rock",
    "Hip-Hop",
  ];

  return (
    <div className="flex gap-4 mb-8 flex-wrap">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() =>
            setSelectedCategory(category)
          }
          className={`
            px-5 py-2 rounded-full
            ${
              selectedCategory === category
                ? "bg-cyan-500"
                : "bg-white/10"
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
}