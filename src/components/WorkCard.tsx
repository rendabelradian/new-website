"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

type WorkCardProps = {
  title: string;
  subtitle: string;
  image: string;
};

export default function WorkCard({ title, subtitle, image }: WorkCardProps) {
  return (
    <div className="relative w-full rounded-lg overflow-hidden shadow-sm bg-gray-50">
      {/* Work Image */}
      <div className="w-full h-64 md:h-96 relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Text + Arrow */}
      <div className="flex justify-between items-center px-4 md:px-6 py-4">
        <div>
          <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
          <p className="text-sm md:text-base text-gray-500">{subtitle}</p>
        </div>
        <button className="w-10 h-10 border rounded-full flex items-center justify-center text-lg hover:bg-black hover:text-white transition">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
