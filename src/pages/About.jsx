import React from "react";
import { ShieldCheck, Zap, Lock } from "lucide-react";

const About = () => {
  return (
    /* FIXED: min-h-[90vh] ko hata kar w-full aur padding use ki hai */
    <div className="w-full py-16 px-6 bg-transparent">
      <div className="max-w-5xl mx-auto">
        {/* --- Hero Section --- */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-emerald-500 uppercase bg-emerald-500/10 rounded-full border border-emerald-500/20">
            Security First
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">
            Your Digital <span className="text-emerald-500">Sanctuary.</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            VaultGuard is a decentralized password management solution. We
            believe privacy is a right, not a feature. That's why your data
            never leaves your device.
          </p>
        </div>

        {/* --- Feature Grid --- */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <Lock className="text-emerald-500" size={28} />,
              title: "Local-First Storage",
              desc: "Aapka data browser ke LocalStorage mein rehta hai. No cloud, no servers, no leaks.",
            },
            {
              icon: <Zap className="text-blue-500" size={28} />,
              title: "Zero Latency",
              desc: "Instant access aur high-performance UI jo aapke workflow ko slow nahi hone deta.",
            },
            {
              icon: <ShieldCheck className="text-purple-500" size={28} />,
              title: "Transparent UI",
              desc: "Open-source philosophy ke saath banaya gaya design jo 100% transparent hai.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="group p-8 bg-white dark:bg-slate-900/50 backdrop-blur-xl rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-slate-100 dark:bg-slate-800 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="font-bold text-2xl text-slate-800 dark:text-white mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* --- Trust Stats / Info --- */}
        <div className="bg-slate-900 dark:bg-emerald-500 rounded-[3rem] p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

          <div className="z-10">
            <h2 className="text-3xl font-bold text-white mb-2">
              Ready to secure your world?
            </h2>
            <p className="text-emerald-100/70 dark:text-slate-900/70 font-medium italic">
              "The best way to predict the future is to secure it."
            </p>
          </div>

          <div className="z-10 flex gap-10">
            <div className="text-center">
              <div className="text-4xl font-black text-white">100%</div>
              <div className="text-xs uppercase tracking-widest text-emerald-200 dark:text-slate-800 font-bold">
                Private
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-white">0</div>
              <div className="text-xs uppercase tracking-widest text-emerald-200 dark:text-slate-800 font-bold">
                Servers
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
