import React from "react";

const Contact = () => {
  const phoneNumber = "21698376334";

  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white flex items-center justify-center px-6 py-16">
      
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-10">
        
        {/* Left side */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Contactez-nous
          </h1>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Vous avez une question, une demande ou besoin d’aide ?
            Contactez-nous directement sur WhatsApp, nous répondons rapidement.
          </p>

          <div className="space-y-3 text-gray-700">
            <p>📍 Cité Essalema, L'aouina</p>
            <p>📞 +216 98 376 334</p>
            <p>✉️ so.b.mav@gmail.com</p>
          </div>
        </div>

        {/* Right side - WhatsApp button */}
        <div className="flex flex-col justify-center items-center text-center">
          
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
            Réponse rapide sur WhatsApp ⚡
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition"
          >
            📲 Contacter sur WhatsApp
          </a>

          <p className="text-sm text-gray-500 mt-4">
            Cliquez pour démarrer une conversation instantanée
          </p>

        </div>

      </div>
    </div>
  );
};

export default Contact;