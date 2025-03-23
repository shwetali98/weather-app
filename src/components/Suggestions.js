import React from 'react';

const Suggestions = ({ activity }) => {
  return (
    <div className="suggestions">
      <h3>Suggested Activity:</h3>
      <p>{activity}</p>
    </div>
  );
};

export default Suggestions;
