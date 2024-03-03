import React from "react";
import PropTypes from "prop-types";

import "../styles/list.css";

const Tech = ({ tech, onAddTech }) => {
  return (
    <div className="tech-item">
      <a className="tech-item-a" href={tech.url} target="_blank" rel="noopener noreferrer">{tech.name}</a>
      <span className="tech-item-description">{tech.description}</span>
      <button className="tech-item-btn tech-item-add" onClick={() => onAddTech(tech)}>+</button>
    </div>
  );
};

Tech.propTypes = {
  tech: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  onAddTech: PropTypes.func.isRequired,
};

export default Tech;
