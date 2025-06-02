import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <motion.div
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className={isScrolled ? "text-neutral-900" : "text-white"}>
              C. Springs
            </span>
            <span className="text-primary-500"> Plumbing</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-lg font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-primary-500"
                    : isScrolled
                    ? "text-neutral-900 hover:text-primary-500"
                    : "text-white hover:text-primary-200"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="tel:+17195551234"
            className="btn btn-primary flex items-center"
          >
            <FaPhone className="mr-2" /> (719) 555-1234
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <FaTimes
              className={isScrolled ? "text-neutral-900" : "text-white"}
            />
          ) : (
            <FaBars
              className={isScrolled ? "text-neutral-900" : "text-white"}
            />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-lg font-medium py-2 border-b border-gray-100 ${
                      isActive
                        ? "text-primary-500"
                        : "text-neutral-900 hover:text-primary-500"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <a
                href="tel:+17195551234"
                className="btn btn-primary flex items-center justify-center"
              >
                <FaPhone className="mr-2" /> (719) 555-1234
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
