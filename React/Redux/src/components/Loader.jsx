function Loader({ label = "Loading..." }) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-lg">
      <span className="h-5 w-5 animate-spin rounded-full border-2 border-slate-300 border-t-slate-900" />
      <span>{label}</span>
    </div>
  );
}

export default Loader;
