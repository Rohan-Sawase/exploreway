import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import emailjs from "emailjs-com";
import {
  MapPin,
  Clock,
  Star,
  Tag,
  CheckCircle2,
  XCircle,
  Hotel,
  Users,
  Send,
} from "lucide-react";
import packages from "../data/packages.js";
import PackageCard from "../components/PackageCard.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

// EmailJS credentials.
// Replace these values with your actual EmailJS credentials from your EmailJS dashboard.
const EMAILJS_SERVICE_ID = "your_service_id";
const EMAILJS_TEMPLATE_ID = "your_template_id";
const EMAILJS_PUBLIC_KEY = "your_public_key";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  travelDate: "",
  people: "",
  message: "",
};

export default function PackageDetails() {
  const { id } = useParams();
  const pkg = packages.find((p) => p.id === Number(id));

  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", text: "" });

  if (!pkg) {
    return (
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 px-4 py-24 text-center">
        <h1 className="text-3xl font-bold text-ocean-950">Package Not Found</h1>
        <p className="text-slate-600">
          The package you are looking for does not exist or may have been removed.
        </p>
        <Link
          to="/packages"
          className="rounded-full bg-ocean-600 px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105"
        >
          Browse All Packages
        </Link>
      </div>
    );
  }

  const similarPackages = packages
    .filter((p) => p.id !== pkg.id && p.category === pkg.category)
    .slice(0, 3);

  const fallbackSimilar = similarPackages.length
    ? similarPackages
    : packages.filter((p) => p.id !== pkg.id).slice(0, 3);

  const whatsappMessage = `Hi, I am interested in the ${pkg.title} Package. Please share more details.`;

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.travelDate || !form.people) {
      setStatus({ type: "error", text: "Please fill all required fields before submitting." });
      return;
    }

    setStatus({ type: "loading", text: "Sending your enquiry..." });

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          destination: pkg.location,
          travelDate: form.travelDate,
          people: form.people,
          message: form.message,
          packageName: pkg.title,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: "success",
        text: "Thank you! Your enquiry has been sent successfully. Our travel expert will contact you soon.",
      });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        text: "Something went wrong. Please try again or contact us on WhatsApp.",
      });
    }
  };

  return (
    <div>
      {/* Banner */}
      <div className="relative h-72 w-full overflow-hidden sm:h-96">
        <img src={pkg.image} alt={pkg.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/90 via-ocean-950/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
          <span className="rounded-full bg-sunset-500 px-3 py-1 text-xs font-bold text-white">
            {pkg.category}
          </span>
          <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">{pkg.title}</h1>
          <p className="mt-1 flex items-center gap-1 text-sm text-ocean-100">
            <MapPin className="h-4 w-4" /> {pkg.location}
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        {/* Left column */}
        <div className="space-y-10 lg:col-span-2">
          {/* Key facts */}
          <div className="grid grid-cols-2 gap-4 rounded-2xl bg-ocean-50 p-6 sm:grid-cols-4">
            <div className="flex flex-col items-center gap-1 text-center">
              <Clock className="h-5 w-5 text-ocean-600" />
              <span className="text-xs text-slate-500">Duration</span>
              <span className="text-sm font-semibold text-ocean-950">{pkg.duration}</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <Tag className="h-5 w-5 text-ocean-600" />
              <span className="text-xs text-slate-500">Starting Price</span>
              <span className="text-sm font-semibold text-ocean-950">
                ₹{pkg.price.toLocaleString("en-IN")}
              </span>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
              <span className="text-xs text-slate-500">Rating</span>
              <span className="text-sm font-semibold text-ocean-950">{pkg.rating} / 5</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <Users className="h-5 w-5 text-ocean-600" />
              <span className="text-xs text-slate-500">Best For</span>
              <span className="text-sm font-semibold text-ocean-950">{pkg.bestFor[0]}</span>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h2 className="text-xl font-bold text-ocean-950">Overview</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{pkg.overview}</p>
          </div>

          {/* Itinerary */}
          <div>
            <h2 className="text-xl font-bold text-ocean-950">Day-wise Itinerary</h2>
            <div className="mt-4 space-y-4 border-l-2 border-ocean-200 pl-6">
              {pkg.itinerary.map((item, idx) => (
                <div key={idx} className="relative">
                  <span className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-ocean-600 ring-4 ring-white" />
                  <p className="text-sm text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions / Exclusions */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold text-ocean-950">Inclusions</h3>
              <ul className="mt-3 space-y-2">
                {pkg.inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-ocean-950">Exclusions</h3>
              <ul className="mt-3 space-y-2">
                {pkg.exclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Hotel info */}
          <div className="flex items-start gap-3 rounded-2xl bg-ocean-50 p-5">
            <Hotel className="mt-0.5 h-5 w-5 shrink-0 text-ocean-600" />
            <div>
              <h3 className="text-sm font-bold text-ocean-950">Hotel Information</h3>
              <p className="mt-1 text-sm text-slate-600">{pkg.hotelInfo}</p>
            </div>
          </div>

          {/* Best for tags */}
          <div>
            <h3 className="text-sm font-bold text-ocean-950">Best For</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {pkg.bestFor.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-sunset-50 px-3 py-1 text-xs font-semibold text-sunset-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: Enquiry form */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-2xl bg-white p-6 shadow-soft ring-1 ring-slate-100">
            <h3 className="text-lg font-bold text-ocean-950">Enquire About This Package</h3>
            <p className="mt-1 text-sm text-slate-500">
              Fill the form and our travel expert will contact you shortly.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-ocean-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-ocean-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-ocean-500"
              />
              <input
                type="date"
                name="travelDate"
                value={form.travelDate}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-ocean-500"
              />
              <input
                type="number"
                min="1"
                name="people"
                placeholder="Number of People"
                value={form.people}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-ocean-500"
              />
              <textarea
                name="message"
                placeholder="Message (optional)"
                rows={3}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-ocean-500"
              />

              <button
                type="submit"
                disabled={status.type === "loading"}
                className="btn-gradient flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.02] disabled:opacity-70"
              >
                <Send className="h-4 w-4" />
                {status.type === "loading" ? "Sending..." : "Send Enquiry"}
              </button>
            </form>

            {status.type === "success" && (
              <p className="mt-3 rounded-lg bg-emerald-50 p-3 text-xs font-medium text-emerald-700">
                {status.text}
              </p>
            )}
            {status.type === "error" && (
              <p className="mt-3 rounded-lg bg-rose-50 p-3 text-xs font-medium text-rose-700">
                {status.text}
              </p>
            )}

            <div className="mt-4 border-t border-slate-100 pt-4">
              <WhatsAppButton message={whatsappMessage} className="w-full">
                WhatsApp Enquiry
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>

      {/* Similar packages */}
      <section className="bg-ocean-50/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="You May Also Like" title="Similar Packages" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {fallbackSimilar.map((p) => (
              <PackageCard key={p.id} pkg={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
