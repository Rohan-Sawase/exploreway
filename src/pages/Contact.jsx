import { useState } from "react";
import emailjs from "emailjs-com";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import SectionTitle from "../components/SectionTitle.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";

// EmailJS credentials.
// Replace these values with your actual EmailJS credentials from your EmailJS dashboard.
const EMAILJS_SERVICE_ID = "service_lw81mi6";
const EMAILJS_TEMPLATE_ID = "template_b7bfero";
const EMAILJS_PUBLIC_KEY = "SW5TS7xfBN_zzrHoP";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  destination: "",
  travelDate: "",
  people: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", text: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Full name is required.";
    if (!form.email.trim()) newErrors.email = "Email address is required.";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!form.destination.trim()) newErrors.destination = "Destination is required.";
    if (!form.travelDate.trim()) newErrors.travelDate = "Travel date is required.";
    if (form.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      setStatus({ type: "error", text: "Please fill all required fields correctly." });
      return;
    }

    setStatus({ type: "loading", text: "Sending your message..." });

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          destination: form.destination,
          travelDate: form.travelDate,
          people: form.people,
          // message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: "success",
        text: "Thank you! Your enquiry has been sent successfully. Our travel expert will contact you soon.",
      });
      setForm(initialForm);
      setErrors({});
    }catch (error) {
  console.log("EmailJS Error:", error);

  setStatus({
    type: "error",
    text: `Something went wrong: ${error?.text || error?.message || "Please try again."}`,
  });
}
  };

  const inputClass = (field) =>
    `w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-colors ${
      errors[field] ? "border-rose-400 focus:border-rose-500" : "border-slate-200 focus:border-ocean-500"
    }`;

  return (
    <div>
      <div className="bg-ocean-950 py-16 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sunset-300">
            Contact Us
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
            Let's Plan Your Next Trip
          </h1>
          <p className="mt-4 text-sm text-ocean-100 sm:text-base">
            Have a destination in mind? Share your travel plan with us and our team will contact
            you with the best package options.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:px-8">
        {/* Contact form */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-slate-100 sm:p-8">
            <h2 className="text-xl font-bold text-ocean-950">Send Us an Enquiry</h2>
            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass("name")}
                />
                {errors.name && <p className="mt-1 text-xs text-rose-500">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass("email")}
                />
                {errors.email && <p className="mt-1 text-xs text-rose-500">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass("phone")}
                />
                {errors.phone && <p className="mt-1 text-xs text-rose-500">{errors.phone}</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="destination"
                  placeholder="Preferred Destination"
                  value={form.destination}
                  onChange={handleChange}
                  className={inputClass("destination")}
                />
                {errors.destination && (
                  <p className="mt-1 text-xs text-rose-500">{errors.destination}</p>
                )}
              </div>
              <div>
                <input
                  type="date"
                  name="travelDate"
                  value={form.travelDate}
                  onChange={handleChange}
                  className={inputClass("travelDate")}
                />
                {errors.travelDate && (
                  <p className="mt-1 text-xs text-rose-500">{errors.travelDate}</p>
                )}
              </div>
              <div>
                <input
                  type="number"
                  min="1"
                  name="people"
                  placeholder="Number of People"
                  value={form.people}
                  onChange={handleChange}
                  className={inputClass("people")}
                />
              </div>
              <div className="sm:col-span-2">
                <textarea
                  name="message"
                  placeholder="Tell us about your trip..."
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className={inputClass("message")}
                />
                {errors.message && <p className="mt-1 text-xs text-rose-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status.type === "loading"}
                className="btn-gradient flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.02] disabled:opacity-70 sm:col-span-2"
              >
                <Send className="h-4 w-4" />
                {status.type === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>

            {status.type === "success" && (
              <p className="mt-4 rounded-lg bg-emerald-50 p-3 text-sm font-medium text-emerald-700">
                {status.text}
              </p>
            )}
            {status.type === "error" && (
              <p className="mt-4 rounded-lg bg-rose-50 p-3 text-sm font-medium text-rose-700">
                {status.text}
              </p>
            )}
          </div>
        </div>

        {/* Contact info */}
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-100">
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ocean-50 text-ocean-600">
                  <Phone className="h-5 w-5" />
                </span>
                <a href="tel:+919604878587" className="font-medium text-ocean-950 hover:text-sunset-600">
                  +91 96048 78587
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ocean-50 text-ocean-600">
                  <Mail className="h-5 w-5" />
                </span>
                <a href="mailto:sawaserohan@gmail.com" className="font-medium text-ocean-950 hover:text-sunset-600">
                  sawaserohan@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ocean-50 text-ocean-600">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="font-medium text-ocean-950">Pune, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ocean-50 text-ocean-600">
                  <Clock className="h-5 w-5" />
                </span>
                <span className="font-medium text-ocean-950">Mon - Sun: 9:00 AM - 9:00 PM</span>
              </li>
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                message="Hi, I visited your website and want to know more about travel packages."
                className="flex-1"
              >
                WhatsApp
              </WhatsAppButton>
              <a
                href="tel:+919604878587"
                className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-ocean-600 px-5 py-2.5 text-sm font-semibold text-ocean-700 transition-all duration-300 hover:bg-ocean-600 hover:text-white"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-100">
            <iframe
              title="ExploreWay Travels Location"
              src="https://www.google.com/maps?q=Pune,Maharashtra,India&output=embed"
              width="100%"
              height="280"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
