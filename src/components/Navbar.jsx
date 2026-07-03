import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Compass, Menu, X, Phone } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton.jsx";

const PHONE_NUMBER = "+919604878587";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Packages", to: "/packages" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleCallNow = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold transition-colors duration-300 ${
      isActive ? "text-sunset-500" : "text-ocean-950 hover:text-sunset-500"
    }`;

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur" : "bg-white"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" onClick={closeMenu} className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ocean-600 text-white">
            <Compass className="h-5 w-5" />
          </span>

          <span className="text-lg font-extrabold text-ocean-950">
            Matoshree <span className="text-sunset-500">Travels</span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <WhatsAppButton
            variant="solid"
            message="Hi, I visited your website and want to know more about travel packages."
          >
            WhatsApp
          </WhatsAppButton>

          <button
            type="button"
            onClick={handleCallNow}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-orange-600"
          >
            <Phone className="h-4 w-4" />
            Call
          </button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ocean-950 lg:hidden"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={closeMenu}
                className={linkClass}
              >
                {link.label}
              </NavLink>
            ))}

            <WhatsAppButton
              variant="solid"
              className="mt-2 w-full"
              message="Hi, I visited your website and want to know more about travel packages."
            >
              WhatsApp Us
            </WhatsAppButton>

            <button
              type="button"
              onClick={() => {
                closeMenu();
                handleCallNow();
              }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-orange-600"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}