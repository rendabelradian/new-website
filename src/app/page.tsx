"use client";

import { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import MenuOverlay from "../components/MenuOverlay";
import WorkCard from "@/components/WorkCard";

export default function Home(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col px-6 md:px-24 bg-white text-black transition-colors duration-300">
      {/* Navbar */}
      <header className="w-full flex justify-between items-center py-8 relative z-50">
        <h1 className="text-3xl font-bold">
          <span className="text-gray-400">Rendabel</span>
          Radian<span className="text-black">.</span>
        </h1>

        <div className="flex items-center gap-6">
          <button className="px-6 py-2 border rounded-full flex items-center gap-2 text-lg font-medium hover:bg-black hover:text-white transition">
            Let’s Talk →
          </button>
          {/* ☰ Toggle */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="w-10 h-10 border rounded-full flex items-center justify-center text-lg"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-start justify-between w-full mt-28">
        {/* Left: Intro text */}
        <div className="max-w-7xl">
          <p className="text-lg sm:text-xl md:text-2xl mb-6 font-normal">
            Hello! I’m Abel.
          </p>
          <h2
            className="font-extrabold leading-[1.1] tracking-tight 
            text-[40px] sm:text-[60px] md:text-[80px] lg:text-[96px] xl:text-[110px]"
          >
            Building digital <br />
            products with emphasis <br />
            on <span className="text-gray-400">social impact</span>
          </h2>

          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 mt-10 md:mt-14">
            <button
              className="px-8 py-4 md:px-10 md:py-5 bg-black text-white 
              rounded-full flex items-center gap-3 text-lg md:text-xl font-semibold 
              hover:bg-gray-800 transition"
            >
              Let’s Talk →
            </button>
            <p className="max-w-md text-gray-600 font-normal text-base md:text-lg leading-relaxed">
              A multidisciplinary engineer harnessing the power of software and
              design to achieve impactful societal goals.
            </p>
          </div>
        </div>
      </section>

      {/* Selected Works Section */}
<section className="mt-32 md:mt-48">
  <div className="flex justify-between items-center mb-12">
    <h2 className="text-2xl md:text-3xl font-bold">Selected Works</h2>
    <button className="px-6 py-2 border rounded-full flex items-center gap-2 text-lg font-medium hover:bg-black hover:text-white transition">
      View All Works →
    </button>
  </div>

  <div className="flex flex-col gap-12">
    <WorkCard
      title="LivSync"
      subtitle="Mobile App Startup"
      image="/works/sportly.png"
    />
    <WorkCard
      title="Payrole"
      subtitle="Website Design"
      image="/works/payrole.png"
    />
  </div>
</section>


      {/* Profile Card (fixed position) */}
      {!isMenuOpen && <ProfileCard />}

      {/* Menu Overlay */}
      <MenuOverlay isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </main>
  );
}
