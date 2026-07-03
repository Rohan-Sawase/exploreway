export default function ServiceCard({ service, onEnquire }) {
  const Icon = service.icon;

  return (
    <div className="group flex flex-col items-start rounded-2xl border border-slate-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ocean-50 text-ocean-600 transition-colors duration-300 group-hover:bg-ocean-600 group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-bold text-ocean-950">{service.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{service.description}</p>
      <button
        onClick={() => onEnquire(service.title)}
        className="mt-4 text-sm font-semibold text-sunset-600 transition-colors duration-300 hover:text-sunset-700"
      >
        Enquire Now &rarr;
      </button>
    </div>
  );
}
