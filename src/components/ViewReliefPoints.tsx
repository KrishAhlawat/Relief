// src/components/ReliefPointList.tsx
import { useState, useEffect } from "react";
import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

const ReliefPointList = () => {
  const [reliefPoints, setReliefPoints] = useState<any[]>([]);

  useEffect(() => {
    const fetchReliefPoints = async () => {
      const querySnapshot = await getDocs(collection(db, "relief_points"));
      const points: any[] = [];
      querySnapshot.forEach((doc) => {
        points.push(doc.data());
      });
      setReliefPoints(points);
    };

    fetchReliefPoints();
  }, []);

  return (
    <div>
      <h1>Relief Points</h1>
      <ul>
        {reliefPoints.map((point, index) => (
          <li key={index}>
            <strong>{point.name}</strong> ({point.type}) - {point.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReliefPointList;
