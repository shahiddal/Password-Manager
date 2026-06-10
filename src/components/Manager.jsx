import { Eye, EyeOff, PencilLine, PlusCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

const Manager = () => {
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setform] = useState({ website: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  // localStorage se data fetch
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  // Edit mode check (location.state se data fill karna)
  useEffect(() => {
    if (location.state && location.state.editItem) {
      setform(location.state.editItem);
      // State clean karein taaki refresh pe wapas edit mode na aaye
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const savePassword = () => {
    if (
      form.website.length > 3 &&
      form.username.length > 3 &&
      form.password.length > 3
    ) {
      let updatedArray;

      // --- LOGIC FIX: Check if we are EDITING or ADDING ---
      if (form.id) {
        // Edit Mode: Purane entry ko replace karein
        updatedArray = passwordArray.map((item) =>
          item.id === form.id ? form : item,
        );
        toast.success("Password Updated Successfully!");
      } else {
        // Add Mode: Nayi entry create karein
        const newEntry = { ...form, id: Date.now() };
        updatedArray = [...passwordArray, newEntry];
        toast.success("Password Saved to Vault!");
      }

      setPasswordArray(updatedArray);
      localStorage.setItem("passwords", JSON.stringify(updatedArray));

      // Form reset
      setform({ website: "", username: "", password: "" });
    } else {
      toast.error("Error: All fields must be at least 3 chars!");
    }
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    // min-h-[85vh] ko h-full ya py-12 karein taaki ye footer ko niche na dhakele
    <div className="mx-auto w-full py-12 px-6 flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center mb-12 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-black mb-4 text-slate-800 dark:text-white tracking-tighter">
          <span className="text-emerald-500 font-mono">&lt;</span>
          {form.id ? "Edit Vault" : "PassWord Manager"}
          <span className="text-emerald-500 font-mono">/&gt;</span>
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
          Secure, simple, and local-first password management.
        </p>
      </div>

      {/* Form Card */}
      <div
        className="flex flex-col gap-6 bg-white dark:bg-slate-900/50 p-8 md:p-12
           rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-3xl"
      >
        {/* Website Input */}
        <div className="flex flex-col gap-2">
          <input
            name="website"
            value={form.website}
            onChange={handleChange}
            className="w-full rounded-2xl border-2 border-slate-200 dark:border-slate-700
                 bg-slate-50 dark:bg-slate-950/50 px-6 py-4 outline-none focus:border-emerald-500
                 dark:focus:border-emerald-500 transition-all text-slate-800 dark:text-slate-100"
            type="text"
            placeholder="Website URL (e.g. google.com)"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            className="flex-[2] rounded-2xl border-2 border-slate-200 dark:border-slate-700
                 bg-slate-50 dark:bg-slate-950/50 px-6 py-4 outline-none focus:border-emerald-500
                 dark:focus:border-emerald-500 transition-all text-slate-800 dark:text-slate-100"
            type="text"
            placeholder="Username / Email"
          />

          <div className="flex-1 relative flex items-center">
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full rounded-2xl border-2 border-slate-200 dark:border-slate-700
                   bg-slate-50 dark:bg-slate-950/50 pl-6 pr-14 py-4 outline-none
                   focus:border-emerald-500 dark:focus:border-emerald-500 transition-all
                   text-slate-800 dark:text-slate-100"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 text-slate-400 hover:text-emerald-500 transition-colors"
            >
              {showPassword ? <Eye size={22} /> : <EyeOff size={22} />}
            </button>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={savePassword}
          className="group flex items-center justify-center gap-3 bg-emerald-500
               hover:bg-emerald-600 text-white font-bold py-4 px-10 rounded-2xl
               transition-all active:scale-95 shadow-lg shadow-emerald-500/20"
        >
          {form.id ? <PencilLine size={22} /> : <PlusCircle size={22} />}
          <span className="text-lg">
            {form.id ? "Update Vault" : "Add to Vault"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Manager;
