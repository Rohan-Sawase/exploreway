import { Link } from "react-router-dom";
import WhatsAppButton from "./WhatsAppButton.jsx";

export default function CTASection({
  title = "Ready to Plan Your Dream Trip?",
  description = "Tell us your destination, travel date, and budget. Our travel expert will create the best package for you.",
}) {
  return (
    <section className="relative overflow-hidden bg-ocean-950 py-16 sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #f96110 0%, transparent 45%), radial-gradient(circle at 80% 80%, #2483a4 0%, transparent 45%)",
        }}
      />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        <p className="max-w-xl text-base text-ocean-100 sm:text-lg">{description}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="btn-gradient rounded-full px-8 py-3 text-sm font-semibold text-white shadow-soft transition-transform duration-300 hover:scale-105"
          >
            Get Free Quote
          </Link>
          <WhatsAppButton
            message="Hi, I want to plan a trip. Please share travel package details."
            variant="outline"
            className="!border-white !text-white hover:!bg-white hover:!text-ocean-900"
          >
            Chat on WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
