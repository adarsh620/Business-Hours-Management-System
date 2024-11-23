import React from "react";

const RegularHours = ({ hours }) => {
  return (
    <div>
      <h2>Regular Hours</h2>
      <p>Weekday: {hours.regularWeekdayHours}</p>
      <p>Friday: {hours.friday}</p>
      <p>Weekend: {hours.weekendHours}</p>
    </div>
  );
};

export default RegularHours;
