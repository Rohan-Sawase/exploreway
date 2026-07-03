import SectionTitle from "../components/SectionTitle.jsx";
import CTASection from "../components/CTASection.jsx";
import { Target, Eye, ShieldCheck, Headphones } from "lucide-react";

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "50+", label: "Destinations" },
  { value: "100+", label: "Successful Trips" },
  { value: "24/7", label: "Customer Support" },
];

export default function About() {
  return (
    <div>
      {/* Intro */}
      <div className="relative overflow-hidden bg-ocean-950 py-20">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80"
          alt="Travel planning"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sunset-300">
            About Us
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
            Your Trusted Travel Partner
          </h1>
          <p className="mt-4 text-sm text-ocean-100 sm:text-base">
            ExploreWay Travels is a trusted travel agency that helps customers plan comfortable,
            affordable, and memorable trips.
          </p>
        </div>
      </div>

      {/* About Company */}
      <section className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-base leading-relaxed text-slate-600">
          ExploreWay Travels is a trusted travel agency based in India, helping customers plan
          comfortable and memorable journeys. We specialize in domestic and international tour
          packages, hotel booking, cab rental, honeymoon tours, family vacations, group trips, and
          customized travel plans. We provide complete travel solutions including tour packages,
          hotel booking, cab rental, sightseeing plans, honeymoon packages, family tours, group
          tours, corporate travel, and international trips.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="bg-ocean-50/60 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-slate-100">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ocean-50 text-ocean-600">
              <Target className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-ocean-950">Our Mission</h3>
            <p className="mt-2 text-sm text-slate-600">
              Our mission is to make travel planning simple, affordable, and stress-free for every
              customer.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-slate-100">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sunset-50 text-sunset-600">
              <Eye className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-ocean-950">Our Vision</h3>
            <p className="mt-2 text-sm text-slate-600">
              Our vision is to become a trusted travel partner for customers who want safe,
              comfortable, and memorable travel experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Why customers trust us */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Why Customers Trust Us" title="Built on reliability and care" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-100">
            <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-ocean-600" />
            <div>
              <h4 className="text-base font-bold text-ocean-950">Verified Partners</h4>
              <p className="mt-1 text-sm text-slate-600">
                We only work with verified hotels, cab operators, and local guides for a safe
                travel experience.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-100">
            <Headphones className="mt-1 h-6 w-6 shrink-0 text-ocean-600" />
            <div>
              <h4 className="text-base font-bold text-ocean-950">Support at Every Step</h4>
              <p className="mt-1 text-sm text-slate-600">
                Our team is available before, during, and after your trip to make sure everything
                goes smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ocean-950 py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold text-sunset-400 sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-ocean-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Let's Plan Your Next Trip Together"
        description="Reach out to our travel experts and start building your custom itinerary today."
      />
    </div>
  );
}
