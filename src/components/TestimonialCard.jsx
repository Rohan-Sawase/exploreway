import { Star, Quote } from "lucide-react";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-100">
      <Quote className="h-8 w-8 text-ocean-100" fill="currentColor" />
      <p className="mt-3 flex-1 text-sm text-slate-600">"{testimonial.review}"</p>
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <div>
          <p className="text-sm font-bold text-ocean-950">{testimonial.name}</p>
          <p className="text-xs text-slate-500">{testimonial.location}</p>
        </div>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>
    </div>
  );
}
