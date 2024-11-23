import React, { useState, useEffect } from "react";
import axios from "axios";
import RegularHours from "./components/RegularHours";
import SpecialHours from "./components/SpecialHours";
import SpecialHoursForm from "./components/Form";
import "./styles/Global.css"

const App = () => {
  const [regularHours, setRegularHours] = useState(null); // Regular hours state
  const [specialHours, setSpecialHours] = useState([]);  // Special hours state

  useEffect(() => {
    // Fetch Regular Hours
    axios.get("http://localhost:9095/api/hours")
      .then((response) => {
        setRegularHours(response.data);
      })
      .catch((error) => {
        console.error("Error fetching regular hours:", error);
      });

    // Fetch Special Hours
    axios.get("http://localhost:9095/api/hours/special")
      .then((response) => {
        setSpecialHours(response.data);
      })
      .catch((error) => {
        console.error("Error fetching special hours:", error);
      });
  }, []);

  const addSpecialHour = (newHour) => {
    axios.post("http://localhost:9095/api/hours/special", newHour)
      .then((response) => {
        setSpecialHours([...specialHours, response.data]);
      })
      .catch((error) => {
        console.error("Error adding special hour:", error);
      });
  };

  return (
    <div>
      <h1>Hours Management</h1>
      {regularHours ? (
        <RegularHours hours={regularHours} />
      ) : (
        <p>Loading regular hours...</p>
      )}
      <SpecialHours specialHours={specialHours} />
      <SpecialHoursForm addSpecialHour={addSpecialHour} />
    </div>
  );
};

export default App;
