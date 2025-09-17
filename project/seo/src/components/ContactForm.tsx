// src/components/ContactForm.tsx
import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { tokens } from "../styles/tokens";

export const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Simulate API call
      await new Promise((res) => setTimeout(res, 1000));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label className="block text-sm font-medium text-neutral-300">
          Name
        </label>
        <input
          type="text"
          required
          className="mt-1 w-full rounded-md border border-neutral-700 bg-neutral-800 px-4 py-2 text-white focus:border-emerald-500 focus:ring-emerald-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-neutral-300">
          Email
        </label>
        <input
          type="email"
          required
          className="mt-1 w-full rounded-md border border-neutral-700 bg-neutral-800 px-4 py-2 text-white focus:border-emerald-500 focus:ring-emerald-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-neutral-300">
          Message
        </label>
        <textarea
          required
          rows={4}
          className="mt-1 w-full rounded-md border border-neutral-700 bg-neutral-800 px-4 py-2 text-white focus:border-emerald-500 focus:ring-emerald-500"
        ></textarea>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white shadow-lg hover:bg-emerald-500"
      >
        <Send className="h-5 w-5" />
        Send Message
      </motion.button>

      {status === "success" && (
        <p className="mt-4 flex items-center gap-2 text-emerald-400">
          <CheckCircle className="h-5 w-5" />
          Message sent successfully!
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 flex items-center gap-2 text-red-400">
          <AlertCircle className="h-5 w-5" />
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
};
