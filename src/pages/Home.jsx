import React from "react";
import img from "../assets/interface.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[#f8f8f8] font-sans">

      {/* HERO */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-10 py-10 md:py-16 bg-white gap-8">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <h6 className="text-lg md:text-2xl font-semibold text-gray-600 leading-tight">
            Société BenZid Menuiserie Aluminium & Verre
          </h6>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight mt-2">
            Verre élégant <br /> pour habitat moderne
          </h2>

          <p className="text-gray-500 mt-4 text-sm md:text-base">
            Découvrez des objets de décoration en verre fabriqués à la main qui apportent lumière et élégance à votre espace.
          </p>

          <Link to="/collections">
            <button className="mt-6 bg-black text-white px-5 py-3 rounded-lg w-full md:w-auto">
              Voir Nos Produits
            </button>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src={img}
            alt="glass decor"
            className="w-full max-w-sm md:max-w-md rounded-xl shadow-lg"
          />
        </div>

      </section>

    </div>
  );
};

export default Home;