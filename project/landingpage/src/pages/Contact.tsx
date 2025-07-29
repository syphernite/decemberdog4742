import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    pages: '',
    industry: '',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    // Add form submission logic here (e.g., API call)
  };

  return (
    <section className="min-h-screen bg-white dark:bg-slate-900 py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-slate-900 dark:text-white">
          Tell Us About Your Project
        </h2>
        {submitted ? (
          <p className="text-green-600 dark:text-green-400 font-semibold">Message sent! We’ll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="fullName" className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="rounded-md border border-slate-300 dark:border-slate-600 px-4 py-2 text-slate-900 dark:text-white bg-white dark:bg-slate-700"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-md border border-slate-300 dark:border-slate-600 px-4 py-2 text-slate-900 dark:text-white bg-white dark:bg-slate-700"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="company" className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Name or Business
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="rounded-md border border-slate-300 dark:border-slate-600 px-4 py-2 text-slate-900 dark:text-white bg-white dark:bg-slate-700"
                placeholder="Your Company or Name"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="pages" className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Pages Desired
              </label>
              <select
                id="pages"
                name="pages"
                value={formData.pages}
                onChange={handleChange}
                className="rounded-md border border-slate-300 dark:border-slate-600 px-4 py-2 text-slate-900 dark:text-white bg-white dark:bg-slate-700"
              >
                <option value="">Select Number of Pages</option>
                <option value="1 Page">1 Page</option>
                <option value="Up to 5 Pages">Up to 5 Pages</option>
                <option value="Unlimited">Unlimited</option>
                <option value="Fully Custom">Fully Custom</option>
              </select>
            </div>

            <div className="sm:col-span-2 flex flex-col">
              <label htmlFor="industry" className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Industry
              </label>
              <input
                type="text"
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="rounded-md border border-slate-300 dark:border-slate-600 px-4 py-2 text-slate-900 dark:text-white bg-white dark:bg-slate-700"
                placeholder="Restaurant, Salon, Fitness, etc."
              />
            </div>

            <div className="sm:col-span-2 flex flex-col">
              <label htmlFor="details" className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Project Details *
              </label>
              <textarea
                id="details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                required
                rows={5}
                className="rounded-md border border-slate-300 dark:border-slate-600 px-4 py-2 text-slate-900 dark:text-white bg-white dark:bg-slate-700"
                placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:opacity-90 transition duration-300 flex items-center justify-center gap-2"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
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
