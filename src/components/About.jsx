import React from "react";
import img from "../assets/ITALBOX-–-Utilidades-Domésticas_-S_A_-_1_.png";
import { useNavigate } from "react-router-dom";
const About = () => {
   const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white flex items-center justify-center px-6 py-16">
      
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={img}
            alt="À propos de nous"
            className="rounded-2xl shadow-xl w-full max-w-md object-cover"
          />
        </div>

        {/* Texte */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            À propos de nous
          </h1>

          <p className="text-gray-600 leading-relaxed mb-4">
            Nous sommes une équipe passionnée par la création de produits et services de haute qualité.
            Notre objectif est d’apporter de la valeur, de la créativité et de l’innovation à chaque projet.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Grâce à notre expertise en design et en développement, nous réalisons des solutions modernes,
            élégantes et faciles à utiliser pour améliorer l’expérience utilisateur.
          </p>

           {/* 🔥 BUTTON NAVIGATION */}
          <button
            onClick={() => navigate("/collections")}
            className="px-6 py-3 bg-sky-500 text-white rounded-xl shadow hover:bg-sky-600 transition"
          >
            Voir nos produits
          </button>

        </div>

      </div>
    </div>
  );
};

export default About;