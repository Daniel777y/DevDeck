import React from "react";
import PropTypes from "prop-types";

const SelectedTech = ({ tech, onRemove }) => {
  return (
    <div className="selected-tech-item">
      <a className="selected-tech-item-a" href={tech.url} target="_blank" rel="noopener noreferrer">{tech.name}</a>
      <button className="selected-tech-item-btn" onClick={() => onRemove(tech)}>-</button>
    </div>
  );
};

SelectedTech.propTypes = {
  tech: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  onRemove: PropTypes.func.isRequired,
};

export default SelectedTech;
