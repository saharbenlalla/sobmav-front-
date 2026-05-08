import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 shadow-md">
      
      <div className="flex justify-between items-center px-4 md:px-10 py-4 text-white">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Sobmav Logo"
            className="h-[50px] md:h-[70px] w-auto object-contain"
          />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 font-medium">
          <Link to="/" className="hover:text-gray-100">Accueil</Link>
          <Link to="/collections" className="hover:text-gray-100">Collections</Link>
          <Link to="/about" className="hover:text-gray-100">A propos</Link>
          <Link to="/contact" className="hover:text-gray-100">Contact</Link>
        </nav>

        {/* BUTTON DESKTOP */}
        <div className="hidden md:block">
          <Link to="/login">
            <button className="bg-white text-blue-500 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
              Espace Admin
            </button>
          </Link>
        </div>

        {/* HAMBURGER BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white text-gray-800 px-6 py-4 space-y-4 shadow-lg">

          <Link to="/" onClick={() => setMenuOpen(false)} className="block">
            Accueil
          </Link>

          <Link to="/collections" onClick={() => setMenuOpen(false)} className="block">
            Collections
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)} className="block">
            A propos
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block">
            Contact
          </Link>

          <Link to="/login" onClick={() => setMenuOpen(false)}>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg mt-2">
              Espace Admin
            </button>
          </Link>

        </div>
      )}
    </header>
  );
};

export default Navbar;