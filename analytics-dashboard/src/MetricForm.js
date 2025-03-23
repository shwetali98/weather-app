import React, { useState } from "react";
import { addMetric } from "./api";

export default function MetricForm({ onMetricAdded }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;

    addMetric({ value: parseInt(value) })
      .then(() => {
        setValue("");
        onMetricAdded();
      })
      .catch((error) => console.error("Error adding metric:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter a value"
      />
      <button type="submit">Add Metric</button>
    </form>
  );
}
