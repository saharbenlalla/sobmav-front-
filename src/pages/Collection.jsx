import React, { useEffect, useState } from "react";
import axios from "axios";

const phoneNumber = "21698376334"; // 🔁 ton numéro WhatsApp

const whatsappLink = (title) =>
  `https://wa.me/${phoneNumber}?text=Bonjour%20je%20suis%20int%C3%A9ress%C3%A9%20par%20:%20${encodeURIComponent(title)}`;

const Collections = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  // 📥 fetch depuis backend
  const fetchCollections = async () => {
    try {
      const res = await axios.get(
        "https://sobmav-back-1.onrender.com/api/collections"
      );
      setCollections(res.data);
    } catch (error) {
      console.error("Erreur fetch:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white px-6 py-16">
      
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Nos Collections
      </h1>

      {/* 🔄 loading */}
      {loading && (
        <p className="text-center text-gray-500">Chargement...</p>
      )}

      {/* ❌ empty */}
      {!loading && collections.length === 0 && (
        <p className="text-center text-gray-500">
          Aucune collection disponible
        </p>
      )}

      {/* ✅ data */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">

        {collections.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            {/* IMAGE */}
            <img
  src={item.image}
  alt={item.title}
  className="h-[500px] w-full object-cover"
/>

            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h2>

              <p className="text-gray-600 text-sm mb-4">
                {item.description}
              </p>

              {/* WhatsApp */}
              <a
                href={whatsappLink(item.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                📲 Contacter
              </a>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Collections;