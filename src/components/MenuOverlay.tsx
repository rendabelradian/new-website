"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export default function MenuOverlay({ isOpen, setIsOpen }: Props): JSX.Element {
  const menuItems = [
    { id: "01", title: "Home", href: "/" },
    { id: "02", title: "About Me", href: "/about" },
    { id: "03", title: "Works", href: "/works" },
    { id: "04", title: "Insights", href: "/insights" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 bg-black bg-opacity-95 text-white z-50 flex"
          onClick={() => setIsOpen(false)} // ✅ click background closes
        >
          <div
            className="flex flex-col w-full"
            onClick={(e) => e.stopPropagation()} // ✅ stop accidental close
          >
            {/* Top bar with logo + ✕ close */}
            <div className="flex justify-between items-center px-6 md:px-16 py-6 border-b border-gray-800">
              <h1 className="text-2xl font-bold">
                <span className="text-gray-400">Rendabel</span>
                Radian<span className="text-white">.</span>
              </h1>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 border rounded-full flex items-center justify-center text-lg hover:bg-gray-800 transition"
              >
                ✕
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col gap-8 md:gap-10 mt-16 px-6 md:px-16">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)} // ✅ close after navigation
                  className="flex items-center justify-between group"
                >
                  <span className="text-4xl md:text-6xl font-bold flex items-baseline gap-2">
                    {item.title}
                    <span className="text-gray-400 text-lg md:text-xl">
                      ({item.id})
                    </span>
                  </span>
                  <FaArrowRight className="text-2xl opacity-70 group-hover:opacity-100 transition" />
                </Link>
              ))}
            </div>

            {/* Bottom Section */}
            <div className="mt-auto px-6 md:px-16 py-10 border-t border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-3">Follow me.</h3>
                <div className="flex flex-wrap gap-6 text-sm text-gray-300">
                  <a href="#">INSTAGRAM ↗</a>
                  <a href="#">BEHANCE ↗</a>
                  <a href="#">TWITTER ↗</a>
                  <a href="#">DRIBBBLE ↗</a>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">
                  Stay connected w/ me.
                </h3>
                <div className="flex items-center border-b border-gray-600 pb-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent outline-none text-sm flex-1 placeholder-gray-400"
                  />
                  <span className="ml-2">↗</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
