function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-slate-900/50">
      <div className="container text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Designed & Built by
          <span className="text-primary font-bold ml-1">Oluwatobi Abiodun</span>
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <span className="text-xs text-slate-600 uppercase tracking-widest font-medium">
            React
          </span>
          <span className="text-xs text-slate-600 uppercase tracking-widest font-medium">
            Tailwind
          </span>
          <span className="text-xs text-slate-600 uppercase tracking-widest font-medium">
            TypeScript
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
