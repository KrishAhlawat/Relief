"use client";
import { useState } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

const AddReliefPoint = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "relief_points"), {
        name,
        type,
        location,
      });
      alert("Relief point added!");
      setName("");
      setType("");
      setLocation("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="container">
      <h1 className="my-10 text-center">Add Relief Point</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="flex justify-center items-center flex-col gap-8">
          <input
            type="text"
            placeholder="Relief Point Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input w-full max-w-md p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Type (e.g., Food, Shelter)"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="input w-full max-w-md p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="input w-full max-w-md p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="button bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300 cursor-pointer"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReliefPoint;
