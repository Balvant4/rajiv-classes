import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import UserPublicRoute from "../route/routes/UserPublicRoute";
import MainButton from "../components/MainButton";
import SearchBar from "../components/SearchBar";
import UserPrivateRoute from "../route/routes/UserPrivateRoute";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Ensure routes are filtered to remove any empty or undefined values
  const routes = [...UserPublicRoute, ...UserPrivateRoute].filter(
    (route) => route && route.path && route.label
  );

  return (
    <header className="backdrop-blur-lg bg-white/70 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-gray-800 tracking-wide">
          Rajiv Classes
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {routes.map(({ path, label }, index) => (
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
        <SearchBar placeholder="Search" className="hidden xl:block" />

        {/* Login Button */}
        <Link to="/login">
          <MainButton
            text="Login"
            className="bg-[#f04e23] hover:bg-[#d9441f] rounded-3xl hidden xl:block"
            onClick={() => setIsOpen(false)}
          />
        </Link>

        {/* Mobile Menu Button */}
        <button className="xl:hidden" onClick={() => setIsOpen(!isOpen)}>
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
              className="fixed top-0 right-0 w-3/4 h-screen bg-white shadow-lg z-50 flex flex-col py-6 px-6 border-l space-y-3"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between pb-5">
                {/* Logo */}
                <h1 className="text-2xl font-extrabold text-gray-800 tracking-wide">
                  Rajiv Classes
                </h1>
                {/* Close Button */}
                <button onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6 text-gray-700" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col space-y-3">
                {routes.map(({ path, label }, index) => (
                  <Link
                    key={index}
                    to={path}
                    className="block py-3 px-3 text-gray-700 font-medium hover:bg-gray-200 rounded-md transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>

              {/* Search Input */}
              <SearchBar placeholder="Search" className="mt-3" />

              {/* Login Button */}
              <Link to="/login" className="mt-6">
                <MainButton
                  text="Login"
                  className="bg-[#f04e23] hover:bg-[#d9441f]"
                  onClick={() => setIsOpen(false)}
                />
              </Link>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
