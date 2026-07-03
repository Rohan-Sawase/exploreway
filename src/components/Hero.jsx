import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ShieldCheck, Users, Globe, Clock } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton.jsx";

const badges = [
  { icon: Users, label: "500+ Happy Travelers" },
  { icon: Globe, label: "50+ Destinations" },
  { icon: Clock, label: "24/7 Travel Support" },
  { icon: ShieldCheck, label: "Best Price Guarantee" },
];

export default function Hero() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    navigate(trimmed ? `/packages?search=${encodeURIComponent(trimmed)}` : "/packages");
  };

  return (
    <section className="relative flex min-h-[640px] items-center overflow-hidden bg-ocean-950">
      <img
        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1800&q=80"
        alt="Scenic travel destination"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-950/80 via-ocean-950/70 to-ocean-950" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 py-24 text-center sm:px-6">
        <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sunset-300">
          Matoshree  Travels
        </span>

        <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          Explore the World with Comfort and Confidence
        </h1>

        <p className="mt-5 max-w-2xl text-base text-ocean-100 sm:text-lg">
          Plan your perfect holiday with our trusted travel experts. We offer customized domestic
          and international tour packages, hotel booking, cab rental, sightseeing, honeymoon
          packages, family tours, and group trips.
        </p>

        <form
          onSubmit={handleSearch}
          className="mt-8 flex w-full max-w-xl flex-col gap-3 rounded-2xl bg-white p-3 shadow-soft sm:flex-row"
        >
          <div className="flex flex-1 items-center gap-2 px-3">
            <Search className="h-5 w-5 shrink-0 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a destination, e.g. Goa, Dubai..."
              className="w-full bg-transparent py-2 text-sm text-ocean-950 outline-none placeholder:text-slate-400"
            />
          </div>
          <button
            type="submit"
            className="btn-gradient rounded-xl px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105"
          >
            Search
          </button>
        </form>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="/packages"
            onClick={(e) => {
              e.preventDefault();
              navigate("/packages");
            }}
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-ocean-950 shadow-soft transition-transform duration-300 hover:scale-105"
          >
            Explore Packages
          </a>
          <WhatsAppButton
            message="Hi, I want to plan a trip. Please share travel package details."
            variant="outline"
            className="!border-white !text-white hover:!bg-white hover:!text-ocean-900"
          >
            Plan My Trip
          </WhatsAppButton>
        </div>

        <div className="mt-12 grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 rounded-xl bg-white/10 px-3 py-4 backdrop-blur"
            >
              <Icon className="h-5 w-5 text-sunset-300" />
              <span className="text-xs font-medium text-ocean-50 sm:text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
