import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-slate-800 dark:text-slate-100">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        Built4You values your privacy. This Privacy Policy outlines how we collect, use,
        and protect your personal information when you use our website and services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Full name, email, and project details you submit through our contact form</li>
        <li>Browser and device information for analytics purposes</li>
        <li>Cookies to enhance your browsing experience</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-4">
        <li>To respond to your inquiries and deliver our services</li>
        <li>To improve our website and offerings based on user behavior</li>
        <li>To send updates or relevant communication if you opt-in</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">3. Sharing of Information</h2>
      <p className="mb-4">
        We do not sell, trade, or rent your personal information to third parties.
        Your data is shared only with services required to operate our business
        (e.g., form processing via Formspree).
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">4. Data Security</h2>
      <p className="mb-4">
        We implement security measures to safeguard your data, including encryption
        and restricted access protocols.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">5. Your Rights</h2>
      <p className="mb-4">
        You have the right to request access to, correction of, or deletion of
        your personal data by contacting us.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">6. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this policy periodically. We encourage users to review this
        page for changes.
      </p>

      <p className="mt-8 text-sm text-slate-500 dark:text-slate-400">
        Last updated: July 2025
      </p>
    </div>
  );
};

export default PrivacyPolicy;
