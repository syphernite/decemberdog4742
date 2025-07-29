import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-slate-800 dark:text-slate-100">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">
        These Terms of Service govern your use of the Built4You website and services. By accessing our website,
        you agree to these terms in full.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">1. Use of Service</h2>
      <p className="mb-4">
        You agree to use our website only for lawful purposes. You must not use our site to transmit any harmful,
        offensive, or fraudulent content.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">2. Intellectual Property</h2>
      <p className="mb-4">
        All content and code provided by Built4You are our intellectual property. You may not reproduce,
        distribute, or use our materials without permission.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">3. Payment and Refund Policy</h2>
      <p className="mb-4">
        All payments must be made in full upfront unless otherwise agreed. Due to the custom nature of our services,
        refunds are granted only in specific cases at our discretion.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">4. Limitation of Liability</h2>
      <p className="mb-4">
        Built4You shall not be liable for any indirect or consequential damages arising from the use of our services.
        Our total liability shall not exceed the amount paid by you for services rendered.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">5. Termination</h2>
      <p className="mb-4">
        We reserve the right to terminate your access to our website or services at any time for violations of
        these terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">6. Changes to Terms</h2>
      <p className="mb-4">
        We may update these terms occasionally. Continued use of our site indicates acceptance of any changes.
      </p>

      <p className="mt-8 text-sm text-slate-500 dark:text-slate-400">
        Last updated: July 2025
      </p>
    </div>
  );
};

export default TermsOfService;
