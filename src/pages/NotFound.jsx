import { Link } from "react-router-dom";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center gap-5 px-4 py-24 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ocean-50 text-ocean-600">
        <Compass className="h-8 w-8" />
      </span>
      <h1 className="text-4xl font-extrabold text-ocean-950">404</h1>
      <h2 className="text-xl font-bold text-ocean-950">Page Not Found</h2>
      <p className="text-sm text-slate-600">
        Looks like this page took a wrong turn. Let's get you back on the right route.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          to="/"
          className="rounded-full bg-ocean-600 px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105"
        >
          Back to Home
        </Link>
        <Link
          to="/packages"
          className="rounded-full border-2 border-ocean-600 px-6 py-3 text-sm font-semibold text-ocean-700 transition-all duration-300 hover:bg-ocean-600 hover:text-white"
        >
          Browse Packages
        </Link>
      </div>
    </div>
  );
}
