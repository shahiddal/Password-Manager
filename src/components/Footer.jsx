import React from "react";
import { ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#020617]/80 backdrop-blur-md border-t border-slate-800/50 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand Side */}
        <div className="flex items-center gap-2">
          <div className="p-1 bg-emerald-500/20 rounded-lg">
            <ShieldCheck size={20} className="text-emerald-500" />
          </div>
          <span className="text-lg font-bold text-white tracking-tight">
            Vault<span className="text-emerald-500 font-light">Guard</span>
          </span>
        </div>

        {/* Copyright */}
        <div className="text-slate-500 text-sm font-medium text-center">
          © 2026 Designed by{" "}
          <span className="text-emerald-500 font-bold">YourName</span>.
        </div>

        {/* Social Icons using Flaticon/CDN (No more Lucide errors!) */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-70 transition-all hover:-translate-y-1"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
              className="w-5 h-5 invert"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-70 transition-all hover:-translate-y-1"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter"
              className="w-5 h-5 invert"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-70 transition-all hover:-translate-y-1"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              className="w-5 h-5 invert"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
