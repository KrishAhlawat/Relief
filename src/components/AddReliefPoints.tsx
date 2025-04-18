// src/components/AddReliefPoint.tsx
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
    <div>
      <h1>Add Relief Point</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Relief Point Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Type (e.g., Food, Shelter)"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <button type="submit">Add Relief Point</button>
      </form>
    </div>
  );
};

export default AddReliefPoint;
