import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import UserPublicRoute from "../route/routes/UserPublicRoute";
import MainButton from "../components/MainButton";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="backdrop-blur-lg bg-white/70 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-gray-800 tracking-wide">
          MyLogo
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {UserPublicRoute.map(({ path, label }, index) => (
            <Link
              key={index}
              to={path}
              className="text-gray-700 font-medium hover:text-blue-600 transition duration-300"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Search Input */}
        <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-full shadow-inner border border-gray-300">
          <Search className="h-5 w-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none px-2 text-sm w-36"
          />
        </div>

        {/* Login Button */}
        <Link to="/login">
          <MainButton
            text="Login"
            className="bg-[#f04e23] hover:bg-[#d9441f] rounded-3xl"
            onClick={() => setIsOpen(false)}
          />
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Navigation with Animation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.nav
              className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg z-50 flex flex-col py-6 px-6 border-l"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                className="self-end mb-4"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6 text-gray-700" />
              </button>

              {/* Navigation Links */}
              {UserPublicRoute.map(({ path, label }, index) => (
                <Link
                  key={index}
                  to={path}
                  className="block py-3 text-gray-700 font-medium hover:bg-gray-100 rounded-md transition"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}

              {/* Search Input */}
              <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full shadow-inner border border-gray-300 mt-4">
                <Search className="h-5 w-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent outline-none px-2 text-sm w-full"
                />
              </div>

              {/* Login Button */}
              <Link to="/login">
                <MainButton
                  text="Login"
                  className="bg-[#f04e23] hover:bg-[#d9441f]"
                  onClick={() => setIsOpen(false)}
                />
                Login
              </Link>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
