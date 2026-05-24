import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Brand name */}
        <a href="#home" className="text-xl font-semibold tracking-tight text-white">
          Oshada <span className="text-purple-400">Dilshan</span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="transition-colors duration-200 hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social icons */}
        <div className="hidden md:flex items-center gap-4 text-xl text-neutral-400">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <FaGithub />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <FaInstagram />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-2xl text-neutral-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-950/95 px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm font-medium text-neutral-400">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-4 text-xl text-neutral-400">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaLinkedin /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaGithub /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaInstagram /></a>
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default Navbar;