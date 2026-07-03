import { Link } from "react-router-dom";
import { Compass, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ocean-950 text-ocean-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
              <Compass className="h-5 w-5" />
            </span>
            <span className="text-lg font-extrabold text-white">
              ExploreWay <span className="text-sunset-400">Travels</span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-ocean-200">
            Helping customers plan comfortable, affordable, and memorable trips across India and
            around the world.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 hover:bg-sunset-500">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 hover:bg-sunset-500">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 hover:bg-sunset-500">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" aria-label="YouTube" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 hover:bg-sunset-500">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-sunset-400">Home</Link></li>
            <li><Link to="/packages" className="hover:text-sunset-400">Packages</Link></li>
            <li><Link to="/services" className="hover:text-sunset-400">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-sunset-400">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-sunset-400">About</Link></li>
            <li><Link to="/contact" className="hover:text-sunset-400">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Domestic Tours</li>
            <li>International Tours</li>
            <li>Honeymoon Packages</li>
            <li>Family Trips</li>
            <li>Hotel Booking</li>
            <li>Cab Rental</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-sunset-400" />
              <a href="tel:+919604878587" className="hover:text-sunset-400">+91 96048 78587</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-sunset-400" />
              <a href="mailto:info@explorewaytravels.com" className="hover:text-sunset-400">info@explorewaytravels.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sunset-400" />
              <span>Pune, Maharashtra, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="text-center text-xs text-ocean-300">
          © {year} ExploreWay Travels. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
