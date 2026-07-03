import { useMemo, useState } from "react";
import SectionTitle from "../components/SectionTitle.jsx";
import gallery from "../data/gallery.js";

const categories = ["All", "Beaches", "Mountains", "International", "Hotels", "Adventure"];

export default function Gallery() {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(
    () => (category === "All" ? gallery : gallery.filter((img) => img.category === category)),
    [category]
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Gallery"
        title="Travel Moments Worth Sharing"
        description="A glimpse into the beaches, mountains, hotels, and adventures our travelers have experienced."
      />

      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
              category === cat
                ? "bg-ocean-600 text-white shadow-md"
                : "bg-white text-ocean-700 ring-1 ring-slate-200 hover:bg-ocean-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((img) => (
          <div key={img.id} className="group relative aspect-square overflow-hidden rounded-2xl shadow-md">
            <img
              src={img.image}
              alt={img.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ocean-950/80 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-sm font-semibold text-white">{img.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
