function OtherContactDetails() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-4 text-white">
          Let's talk about everything!
        </h3>
        <p className="text-slate-400 leading-relaxed max-w-md">
          Interested in hiring me or just want to chat? I'm always open to
          discussing new projects, creative ideas or opportunities to be part of
          your visions.
        </p>
      </div>

      <div className="space-y-4">
        {[
          { icon: "📞", label: "Call Me", value: "+234 806 865 2575" },
          { icon: "📧", label: "Email Me", value: "tobidun5@gmail.com" },
          { icon: "📍", label: "Location", value: "Abuja, Nigeria" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 glass p-4 rounded-2xl border border-white/5"
          >
            <span className="text-2xl">{item.icon}</span>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-widest">
                {item.label}
              </p>
              <p className="text-white font-medium break-all">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OtherContactDetails;
