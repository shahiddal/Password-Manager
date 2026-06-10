import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ShieldCheck, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    // relative add kiya taaki mobile menu absolute position sahi le sake
    <nav className="sticky top-0 z-50 w-full bg-[#020617]/80 backdrop-blur-xl border-b border-slate-800 transition-all h-16 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center relative">
        {/* --- Logo Side --- */}
        <Link to="/" className="flex items-center gap-2 group z-50">
          <div className="p-1.5 bg-emerald-500 rounded-lg group-hover:rotate-6 transition-transform">
            <ShieldCheck size={22} className="text-white" />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white">
            Vault<span className="font-light">Guard</span>
          </h1>
        </Link>

        {/* --- Desktop Links (md:flex) --- */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex space-x-8 text-sm font-medium">
            {[
              { name: "Dashboard", path: "/" },
              { name: "Vault", path: "/passwords" },
              { name: "Security", path: "/about" },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`transition-colors duration-300 hover:text-emerald-400 ${
                    isActive(link.path) ? "text-emerald-500" : "text-slate-400"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme Toggle Desktop */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative w-11 h-6 rounded-full bg-slate-800 p-1 flex items-center border border-slate-700 hover:border-emerald-500/50 transition-all"
          >
            <div
              className={`w-4 h-4 rounded-full bg-emerald-500 transform transition-transform duration-300 ${
                darkMode ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        {/* --- Mobile Controls (md:hidden) --- */}
        <div className="md:hidden flex items-center gap-4 z-50">
          {/* Mobile Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 rounded-lg bg-slate-800 border border-slate-700 text-emerald-500 text-sm"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>

          {/* Hamburger Button - Ye button missing tha */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-300 hover:text-emerald-500 transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* --- Mobile Menu Drawer --- */}
        {/* Isko position fixed ya absolute top-16 diya hai */}
        <div
          className={`absolute top-[48px] left-0 w-full bg-[#020617] border-b border-emerald-500/20 transition-all duration-300 ease-in-out md:hidden ${
            isMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col p-6 gap-2 font-medium">
            {[
              { name: "Dashboard", path: "/" },
              { name: "Vault", path: "/passwords" },
              { name: "Security", path: "/about" },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-4 px-5 rounded-xl transition-all ${
                    isActive(link.path)
                      ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                      : "text-slate-400 hover:bg-slate-800/50"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
