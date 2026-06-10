import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800">
        {/* Left Side: Contact Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-800 dark:text-white">
              Get in touch
            </h1>
            <p className="mt-4 text-slate-500">
              Koi sawal hai? Humein message bhejiyein!
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
              <Mail className="text-fuchsia-600" />{" "}
              <span>support@passop.com</span>
            </div>
            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
              <Phone className="text-fuchsia-600" />{" "}
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
              <MapPin className="text-fuchsia-600" /> <span>Mumbai, India</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border-none outline-none focus:ring-2 ring-fuchsia-500 dark:text-white"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border-none outline-none focus:ring-2 ring-fuchsia-500 dark:text-white"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border-none outline-none focus:ring-2 ring-fuchsia-500 dark:text-white"
          ></textarea>
          <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-3 rounded-xl transition-all active:scale-95 shadow-lg shadow-fuchsia-500/30">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
