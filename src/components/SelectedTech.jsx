import React from "react";
import PropTypes from "prop-types";

const SelectedTech = ({ tech, onDeleteTech }) => {
  return (
    <>
      <div>
        {tech.name} | {tech.name} | {tech.description} | 
        <button onClick={() => onDeleteTech(tech)}>-</button>
      </div>
    </>
  );
};

SelectedTech.propTypes = {
  tech: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  onDeleteTech: PropTypes.func.isRequired,
};

export default SelectedTech;
