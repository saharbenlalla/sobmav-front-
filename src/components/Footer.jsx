import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 text-white mt-10">
      <div className="px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* BRAND */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            <Link to="/">Sobmav</Link>
          </h2>
          <p className="text-sm opacity-90">
            Le Verre élegant design pour votre habitat.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="font-semibold mb-3">Liens rapide</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Acceuil</Link></li>
            <li><Link to="/collections" className="hover:underline">Collections</Link></li>
            <li><Link to="/about" className="hover:underline">A Propos</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-sm">Email: compta.sobmav@gmail.com</p>
          <p className="text-sm">Phone: +216 98376334</p>
          <p className="text-sm">Phone: +216 29332888</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="text-center py-4 border-t border-white/30 text-sm">
        © {new Date().getFullYear()} Sobmav. All rights reserved. Sahar BENLALLA.
      </div>

    </footer>
  );
};

export default Footer;