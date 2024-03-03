import React from "react"
import PropTypes from "prop-types";

const Tech = ({ tech, onAddTech }) => {
  return (
    <>
      <div>
        {tech.name} | {tech.url} | {tech.description} | 
        <button onClick={() => onAddTech(tech)}>+</button>
      </div>
    </>
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
