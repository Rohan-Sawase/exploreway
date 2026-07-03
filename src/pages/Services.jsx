import SectionTitle from "../components/SectionTitle.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import CTASection from "../components/CTASection.jsx";
import { buildWhatsAppLink } from "../components/WhatsAppButton.jsx";
import services from "../data/services.js";
import { Compass, PackageCheck, CalendarCheck, Plane } from "lucide-react";

const process = [
  { icon: Compass, title: "Choose Destination", text: "Browse our packages or tell us where you want to go." },
  { icon: PackageCheck, title: "Get Custom Package", text: "We design an itinerary that fits your budget and dates." },
  { icon: CalendarCheck, title: "Confirm Booking", text: "Review the plan, confirm details, and lock your dates." },
  { icon: Plane, title: "Enjoy Your Trip", text: "Sit back while we handle the logistics for a smooth trip." },
];

export default function Services() {
  const handleEnquiry = (title) => {
    window.open(
      buildWhatsAppLink(`Hi, I am interested in your ${title} service. Please share more details.`),
      "_blank"
    );
  };

  return (
    <div>
      <div className="bg-ocean-950 py-16 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sunset-300">
            Our Services
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
            Complete Travel Solutions Under One Roof
          </h1>
          <p className="mt-4 text-sm text-ocean-100 sm:text-base">
            From domestic getaways to international adventures, hotel booking to cab rental, we
            handle every part of your journey.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} onEnquire={handleEnquiry} />
          ))}
        </div>
      </div>

      <section className="bg-ocean-50/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Why Choose Our Services"
            title="Reliable planning from real travel experts"
            description="Every itinerary is checked, every hotel is verified, and every trip is backed by round-the-clock support."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="How It Works" title="Our Simple Travel Process" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, idx) => (
            <div key={step.title} className="relative rounded-2xl bg-white p-6 text-center shadow-md ring-1 ring-slate-100">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-sunset-500 px-3 py-1 text-xs font-bold text-white">
                Step {idx + 1}
              </span>
              <div className="mt-4 flex justify-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ocean-50 text-ocean-600">
                  <step.icon className="h-6 w-6" />
                </span>
              </div>
              <h3 className="mt-4 text-base font-bold text-ocean-950">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
