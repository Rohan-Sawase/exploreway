import { MessageCircle } from "lucide-react";

// Replace this with the travel agency's real WhatsApp number (country code + number, no + or spaces).
export const WHATSAPP_NUMBER = "919604878587";

export function buildWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Reusable WhatsApp button.
 * Props:
 * - message: text to pre-fill in WhatsApp
 * - variant: "solid" | "outline" | "floating" | "icon"
 * - className: extra classes
 * - children: button label (optional, defaults to "WhatsApp Enquiry")
 */
export default function WhatsAppButton({
  message = "Hi, I want to plan a trip. Please share travel package details.",
  variant = "solid",
  className = "",
  children,
}) {
  const href = buildWhatsAppLink(message);

  if (variant === "floating") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-transform duration-300 hover:scale-110 ${className}`}
      >
        <MessageCircle className="h-7 w-7" fill="white" strokeWidth={0} />
      </a>
    );
  }

  if (variant === "icon") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire on WhatsApp"
        className={`flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform duration-300 hover:scale-105 ${className}`}
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    );
  }

  if (variant === "outline") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#25D366] px-5 py-2.5 text-sm font-semibold text-[#1c6b3e] transition-all duration-300 hover:bg-[#25D366] hover:text-white ${className}`}
      >
        <MessageCircle className="h-4 w-4" />
        {children || "WhatsApp Enquiry"}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:brightness-110 ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      {children || "WhatsApp Enquiry"}
    </a>
  );
}
