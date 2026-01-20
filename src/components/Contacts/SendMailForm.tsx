import { useState } from "react";

function SendMailForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event: any) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  function handleSubmit(e: any) {
    if (values.name && values.email && values.message) {
      setTimeout(() => {
        e.target.reset();
      }, 500);
    } else {
      alert("Please fill in all fields.");
    }
  }

  return (
    <div className="glass-card p-6 md:p-8 rounded-3xl border border-white/5 shadow-xl">
      <form
        onSubmit={handleSubmit}
        name="contact"
        method="POST"
        action="https://getform.io/f/5d3543d6-d1df-4039-8d76-daef9bb0d17f"
        className="space-y-6"
      >
        <div>
          <label className="text-xs uppercase tracking-widest text-slate-500 mb-2 block font-bold">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="What's your name?"
            required
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-xl bg-slate-900/50 border border-white/10 text-white focus:outline-none focus:border-primary transition-all duration-300"
          />
        </div>

        <div>
          <label className="text-xs uppercase tracking-widest text-slate-500 mb-2 block font-bold">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            required
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-xl bg-slate-900/50 border border-white/10 text-white focus:outline-none focus:border-primary transition-all duration-300"
          />
        </div>

        <div>
          <label className="text-xs uppercase tracking-widest text-slate-500 mb-2 block font-bold">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Tell me about your project..."
            rows={5}
            required
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-xl bg-slate-900/50 border border-white/10 text-white focus:outline-none focus:border-primary transition-all duration-300 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-xl bg-primary text-slate-900 font-bold hover:bg-white transition-all duration-300 shadow-lg shadow-primary/20"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default SendMailForm;
