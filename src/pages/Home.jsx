import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import PackageCard from "../components/PackageCard.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import CTASection from "../components/CTASection.jsx";
import WhatsAppButton, { buildWhatsAppLink } from "../components/WhatsAppButton.jsx";
import packages from "../data/packages.js";
import services from "../data/services.js";
import gallery from "../data/gallery.js";
import testimonials from "../data/testimonials.js";
import {
  ShieldCheck,
  Wallet,
  Headphones,
  CheckCircle2,
  UserCheck,
  Sparkles,
} from "lucide-react";

const destinations = [
  {
    name: "Goa",
    tagline: "Sun, sand, and beach parties",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Manali",
    tagline: "Snow-capped mountain escapes",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Kerala",
    tagline: "Serene backwaters and greenery",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Rajasthan",
    tagline: "Royal forts and desert culture",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dubai",
    tagline: "Modern skylines and luxury",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Thailand",
    tagline: "Vibrant cities and island fun",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
  },
];

const whyChooseUs = [
  { icon: Sparkles, text: "Customized travel planning" },
  { icon: Wallet, text: "Affordable packages" },
  { icon: ShieldCheck, text: "Verified hotels and trusted transport" },
  { icon: Headphones, text: "24/7 customer support" },
  { icon: CheckCircle2, text: "Hassle-free booking" },
  { icon: UserCheck, text: "Experienced travel experts" },
];

export default function Home() {
  const featuredPackages = packages.filter((pkg) => pkg.featured).slice(0, 6);
  const galleryPreview = gallery.slice(0, 6);

  const handleServiceEnquiry = (title) => {
    window.open(
      buildWhatsAppLink(`Hi, I am interested in your ${title} service. Please share more details.`),
      "_blank"
    );
  };

  return (
    <div>
      <Hero />

      {/* Popular Destinations */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Popular Destinations"
          title="Handpicked places travelers love"
          description="From tropical beaches to snowy mountains, discover the destinations our travelers keep coming back to."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest) => (
            <div
              key={dest.name}
              className="group relative h-64 overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={dest.image}
                alt={dest.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/90 via-ocean-950/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-xl font-bold text-white">{dest.name}</h3>
                <p className="mt-1 text-sm text-ocean-100">{dest.tagline}</p>
                <Link
                  to={`/packages?search=${encodeURIComponent(dest.name)}`}
                  className="mt-3 inline-block rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-ocean-950 transition-transform duration-300 hover:scale-105"
                >
                  View Packages
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Packages */}
      <section className="bg-ocean-50/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Featured Packages"
            title="Our most loved tour packages"
            description="Carefully designed itineraries covering the best of domestic and international travel."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/packages"
              className="inline-block rounded-full border-2 border-ocean-600 px-8 py-3 text-sm font-semibold text-ocean-700 transition-all duration-300 hover:bg-ocean-600 hover:text-white"
            >
              View All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="What We Offer"
          title="Complete travel solutions, all in one place"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <ServiceCard key={service.id} service={service} onEnquire={handleServiceEnquiry} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-ocean-950 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Why Choose Us"
            title="Travel planning made simple and reliable"
            description=""
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-4 rounded-2xl bg-white/5 p-5 text-white ring-1 ring-white/10"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sunset-500/20 text-sunset-400">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Testimonials"
          title="What our travelers say"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="bg-ocean-50/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Gallery" title="Moments from our travelers' journeys" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {galleryPreview.map((img) => (
              <div key={img.id} className="group relative aspect-square overflow-hidden rounded-xl">
                <img
                  src={img.image}
                  alt={img.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end bg-ocean-950/0 p-2 transition-colors duration-300 group-hover:bg-ocean-950/50">
                  <span className="text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {img.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/gallery"
              className="inline-block rounded-full border-2 border-ocean-600 px-8 py-3 text-sm font-semibold text-ocean-700 transition-all duration-300 hover:bg-ocean-600 hover:text-white"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
