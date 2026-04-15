import { useState, useEffect } from "react";

export const usePatientData = () => {
  const [patients, setPatients] = useState([]);
  const [activePatient, setActivePatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
          headers: {
            "Authorization": "Basic " + btoa("coalition:skills-test"),
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch patient data");
        }

        const data = await response.json();
        setPatients(data);
        
        // Strictly filter to Jessica Taylor as required
        const jessica = data.find((p) => p.name === "Jessica Taylor");
        setActivePatient(jessica || data[0] || null);

      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  return { patients, activePatient, loading, error };
};
