import React from "react";
import PropTypes from "prop-types";

import "../styles/list.css";

const Tech = ({ tech, onAddTech }) => {
  return (
    <div className="tech-item">
      <a href="#">{tech.name}</a>
      <span>{tech.description}</span>
      <button className="add-btn" onClick={() => onAddTech(tech)}>+</button>
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
