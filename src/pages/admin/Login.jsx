import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://sobmav-back-1.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );

      // 💾 save token
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));

      // 👮 check role admin
      if (data.role !== "admin") {
        alert("Accès refusé : admin seulement");
        return;
      }

      alert("Login réussi 🚀");

      // redirect admin dashboard
      navigate("/admin");

    } catch (error) {
      alert(error.response?.data?.message || "Erreur login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >
        
        <h1 className="text-2xl font-bold mb-6 text-center">
          Admin Login
        </h1>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Mot de passe"
          className="w-full p-3 mb-6 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition"
        >
          Se connecter
        </button>

      </form>
    </div>
  );
};

export default AdminLogin;