import React, { useState } from "react";

const SpecialHoursForm = ({ addSpecialHour }) => {
  const [formData, setFormData] = useState({
    date: "",
    startTime: "",
    endTime: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSpecialHour(formData);
    setFormData({ date: "", startTime: "", endTime: "", reason: "" });
  };

  return (
    <div className="special-hours-form">
    <form onSubmit={handleSubmit}>
      <h2>Add Special Hours</h2>
      <label>
        Date:
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Start Time:
        <input type="time" name="startTime" value={formData.startTime} onChange={handleChange} required />
      </label>
      <br />
      <label>
        End Time:
        <input type="time" name="endTime" value={formData.endTime} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Reason:
        <input type="text" name="reason" value={formData.reason} onChange={handleChange} required />
      </label>
      <br />
      <button type="submit">Add Special Hours</button>
    </form>
    </div>
  );
};

export default SpecialHoursForm;
