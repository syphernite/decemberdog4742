import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", industry: "", pages: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const r = await fetch("https://formspree.io/f/mrblknpq", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (r.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", company: "", industry: "", pages: "", message: "" });
      } else alert("Something went wrong. Please try again.");
    } catch { alert("There was an error. Please try again later."); }
  };

  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {!submitted && (
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Tell Us About Your Project</h2>
        )}

        {submitted ? (
          <div className="bg-white/10 border border-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
            <p className="text-emerald-400 text-lg font-semibold">Message sent! We’ll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { name: "name", type: "text", label: "Full Name *", ph: "John Doe", req: true },
              { name: "email", type: "email", label: "Email Address *", ph: "john@example.com", req: true },
              { name: "company", type: "text", label: "Business / Name", ph: "Your Company" },
              { name: "industry", type: "text", label: "Industry", ph: "e.g. Restaurant, Gym, Auto Shop" },
            ].map((f) => (
              <div className="flex flex-col" key={f.name}>
                <label className="text-sm font-medium text-slate-200 mb-1">{f.label}</label>
                <input
                  type={f.type as "text" | "email"}
                  name={f.name}
                  value={(formData as any)[f.name]}
                  onChange={handleChange}
                  required={Boolean(f.req)}
                  placeholder={f.ph}
                  className="px-4 py-3 rounded-md border border-white/15 bg-white/10 backdrop-blur-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            ))}

            <div className="flex flex-col sm:col-span-2">
              <label className="text-sm font-medium text-slate-200 mb-1"># of Pages Desired</label>
              <input
                type="number" name="pages" value={formData.pages} onChange={handleChange} placeholder="Example: 3"
                className="px-4 py-3 rounded-md border border-white/15 bg-white/10 backdrop-blur-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="flex flex-col sm:col-span-2">
              <label className="text-sm font-medium text-slate-2 00 mb-1">Project Details *</label>
              <textarea
                name="message" value={formData.message} onChange={handleChange} required rows={5}
                placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                className="px-4 py-3 rounded-md border border-white/15 bg-white/10 backdrop-blur-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white py-3 rounded-lg font-semibold"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
