import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Manager from "./components/Manager";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayTable from "./components/DisplayTable";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      {/* 1. Global Toaster */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* 2. Global Background (Fixed rahega piche) */}
      <div
        className="fixed inset-0 -z-10 h-full w-full bg-white 
      bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),
      linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]
       dark:bg-slate-950 dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),
       linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:6rem_4rem]"
      ></div>

      {/* 3. Main Wrapper: Isse footer hamesha bottom mein rahega */}
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* 'flex-grow' bachi hui saari jagah le lega, footer ko niche dhakel dega */}
        <main className="flex-grow overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Manager />} />
            <Route path="/passwords" element={<DisplayTable />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
