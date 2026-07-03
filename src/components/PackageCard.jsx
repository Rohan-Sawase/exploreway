import { Link } from "react-router-dom";
import { MapPin, Clock, Star } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton.jsx";

export default function PackageCard({ pkg }) {
  const whatsappMessage = `Hi, I am interested in the ${pkg.title} Package. Please share more details.`;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-52 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ocean-700 backdrop-blur">
          {pkg.category}
        </span>
        <span className="absolute bottom-3 right-3 rounded-full bg-sunset-500 px-3 py-1 text-xs font-bold text-white shadow">
          ₹{pkg.price.toLocaleString("en-IN")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-ocean-950">{pkg.title}</h3>

        <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4 text-ocean-500" /> {pkg.location}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-ocean-500" /> {pkg.duration}
          </span>
        </div>

        <div className="mt-2 flex items-center gap-1 text-sm font-semibold text-amber-500">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          {pkg.rating}
          <span className="font-normal text-slate-400">/ 5</span>
        </div>

        <p className="mt-3 line-clamp-2 text-sm text-slate-600">{pkg.description}</p>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <Link
            to={`/packages/${pkg.id}`}
            className="flex-1 rounded-full border-2 border-ocean-600 px-4 py-2 text-center text-sm font-semibold text-ocean-700 transition-all duration-300 hover:bg-ocean-600 hover:text-white"
          >
            View Details
          </Link>
          <WhatsAppButton message={whatsappMessage} className="flex-1">
            Enquire
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
