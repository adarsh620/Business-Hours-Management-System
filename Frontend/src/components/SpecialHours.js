import React from "react";

const SpecialHours = ({ specialHours }) => {
  return (
    <div className="special-hours">
      <h2>Special Hours</h2>
      {specialHours.length > 0 ? (
        <ul>
          {specialHours.map((hour) => (
            <li key={hour.id}>
              <strong>{hour.date}</strong>: {hour.startTime} - {hour.endTime} ({hour.reason})
            </li>
          ))}
        </ul>
      ) : (
        <p>No special hours configured.</p>
      )}
    </div>
  );
};

export default SpecialHours;
