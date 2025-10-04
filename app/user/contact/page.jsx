"use client";

import React from "react";
import { motion } from "framer-motion";
import { contactData } from "@/data/contactData";
import { LinkedinIcon } from "lucide-react";
import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";

const ContactPage = () => {
  return (
    <div id="contact" className="pt-16 px-4 md:px-12">
      {/* Heading */}
      <motion.h1
        className="text-5xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {contactData.heading}
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-lg text-center mb-12 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        {contactData.description}
      </motion.p>

      <div className="max-w-2xl mx-auto">
        {/* Contact Form */}
        <motion.form
          className="p-6 rounded-2xl shadow-lg border 
                     border-gray-300 dark:border-gray-700 
                     bg-white dark:bg-gray-950"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4">
            <label className="block text-sm mb-2 text-gray-800 dark:text-gray-200">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 rounded-lg border 
                         border-gray-300 dark:border-gray-700 
                         bg-gray-50 dark:bg-gray-800 
                         text-gray-900 dark:text-gray-100"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-2 text-gray-800 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg border 
                         border-gray-300 dark:border-gray-700 
                         bg-gray-50 dark:bg-gray-800 
                         text-gray-900 dark:text-gray-100"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-2 text-gray-800 dark:text-gray-200">
              Message
            </label>
            <textarea
              placeholder="Write your message..."
              rows={4}
              className="w-full px-4 py-2 rounded-lg border 
                         border-gray-300 dark:border-gray-700 
                         bg-gray-50 dark:bg-gray-800 
                         text-gray-900 dark:text-gray-100"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 rounded-lg bg-blue-600 text-white font-medium 
                       hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.1 }}
        >
          {contactData.socials.map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              {social.name === "GitHub" ? (
                <SiGithub className="w-6 h-6" />
              ) : social.name === "LinkedIn" ? (
                <LinkedinIcon className="w-6 h-6" />
              ) : social.name === "Instagram" ? (
                <SiInstagram className="w-6 h-6" />
              ) : (
                social.name
              )}
            </a>
          ))}
        </motion.div>

        {/* Email */}
        <motion.p
          className="text-center mt-6 text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          Or email me directly at{" "}
          <a
            href={`mailto:${contactData.email}`}
            className="text-blue-600 dark:text-blue-400 underline"
          >
            {contactData.email}
          </a>
        </motion.p>
        {/* Email */}
        <motion.p
          className="text-center text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          Or call me directly at{" "}
          <a
            href={`tel:${contactData.mobile}`}
            className="text-blue-600 dark:text-blue-400 underline"
          >
            {contactData.mobile}
          </a>
        </motion.p>
      </div>
    </div>
  );
};

export default ContactPage;
