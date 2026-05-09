import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminCollections = () => {
  const [collections, setCollections] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: null,
  });
  const token = localStorage.getItem("token");
  // 📥 fetch collections
  const fetchCollections = async () => {
    const res = await axios.get("https://sobmav-back-1.onrender.com/api/collections");
    setCollections(res.data);
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  // 📤 handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("image", form.image);

  

await axios.post(
  "https://sobmav-back-1.onrender.com/api/collections",
  formData,
  {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  }
);

    setForm({ title: "", description: "", category: "", image: null });
    fetchCollections();
  };

  // 🗑 delete
  const handleDelete = async (id) => {
    await axios.delete(`https://sobmav-back-1.onrender.com/api/collections/${id}`,
  {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
    fetchCollections();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold mb-6">Admin Collections</h1>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-lg shadow-md mb-8 space-y-3"
      >
        <input
          type="text"
          placeholder="Titre"
          className="w-full p-2 border rounded"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <textarea
          placeholder="Description"
          className="w-full p-2 border rounded"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        {/* IMAGE UPLOAD 📸 */}
        <input
          type="file"
          className="w-full"
          onChange={(e) =>
            setForm({ ...form, image: e.target.files[0] })
          }
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Ajouter Collection
        </button>
      </form>

      {/* LIST */}
      <div className="grid md:grid-cols-3 gap-4">
        {collections.map((c) => (
          <div key={c._id} className=" w-[250px] bg-white p-3 rounded shadow ">

            {c.image && (
            <img
  src={c.image}
  alt={c.title}
  className="w-full h-90 object-cover transform hover:scale-110 transition duration-300"
/>
            )}

            <h2 className="font-bold mt-2">{c.title}</h2>
            <p className="text-sm">{c.description}</p>

            <button
              onClick={() => handleDelete(c._id)}
              className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
            >
              Supprimer
            </button>

          </div>
        ))}
      </div>

    </div>
  );
};

export default AdminCollections;