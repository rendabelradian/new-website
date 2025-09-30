"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ProfileCard(): JSX.Element {
  return (
    <div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 
      bg-black shadow-lg rounded-lg p-3 sm:p-4 
      w-56 sm:w-64 md:w-72 border border-gray-700 transition z-50"
    >
      {/* Top Section */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Profile Image */}
        <Image
          src="/abel.jpeg" // ✅ image in /public folder
          alt="Abel"
          width={56}
          height={56}
          className="rounded-md object-cover sm:w-16 sm:h-16 w-14 h-14"
        />
        <div>
          <h2 className="text-sm sm:text-base md:text-lg font-bold text-white">
            Abel
          </h2>
          <p className="text-[10px] sm:text-xs md:text-sm text-gray-300">
            Columbia University ’23
          </p>
          <p className="text-[10px] sm:text-xs md:text-sm text-gray-300">
            Full-Stack Software Engineer
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-3 sm:mt-4">
        <a
          href="https://github.com/rendabelradian"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1 px-3 py-2 
            bg-gray-800 hover:bg-gray-700 text-white text-xs rounded transition w-full sm:w-auto"
        >
          <FaGithub size={14} /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/rendabel-radian/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1 px-3 py-2 
            bg-gray-800 hover:bg-gray-700 text-white text-xs rounded transition w-full sm:w-auto"
        >
          <FaLinkedin size={14} /> LinkedIn
        </a>
      </div>
    </div>
  );
}
