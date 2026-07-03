import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import SectionTitle from "../components/SectionTitle.jsx";
import PackageCard from "../components/PackageCard.jsx";
import packages from "../data/packages.js";

const categories = [
  "All",
  "Domestic",
  "International",
  "Honeymoon",
  "Adventure",
  "Family",
  "Budget",
  "Luxury",
];

export default function Packages() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "All");

  useEffect(() => {
    const params = {};
    if (search) params.search = search;
    if (category && category !== "All") params.category = category;
    setSearchParams(params, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, category]);

  const filteredPackages = useMemo(() => {
    const term = search.trim().toLowerCase();

    return packages.filter((pkg) => {
      const matchesCategory = category === "All" || pkg.category === category;
      const matchesSearch =
        !term ||
        pkg.title.toLowerCase().includes(term) ||
        pkg.location.toLowerCase().includes(term) ||
        pkg.category.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Tour Packages"
        title="Find your next getaway"
        description="Search by destination or filter by category to find the perfect package for you."
      />

      <div className="mb-10 flex flex-col gap-4">
        <div className="mx-auto flex w-full max-w-xl items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <Search className="h-5 w-5 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title, location, or category"
            className="w-full bg-transparent text-sm text-ocean-950 outline-none placeholder:text-slate-400"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
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
      </div>

      {filteredPackages.length === 0 ? (
        <div className="rounded-2xl bg-ocean-50 py-16 text-center">
          <p className="text-base font-medium text-ocean-800">
            No packages found. Try another destination or category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      )}
    </div>
  );
}
