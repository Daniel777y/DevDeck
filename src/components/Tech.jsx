import React, { useState } from "react";
import PropTypes from "prop-types";

import "../styles/list.css";

const Tech = ({ tech, onSelect, onUpdateDescription }) => {
  const [isEditing, setIsEditing] = useState(false);
  const onClickDescriptionText = () => {
    setIsEditing(true);
  };
  const onInputBlur = (e) => {
    const newDescription = e.target.value;
    if (newDescription || newDescription.length !== 0) {
      onUpdateDescription(newDescription);
    }
    setIsEditing(false);
  };
  return (
    <div className="tech-item">
      <a className="tech-item-a" href={tech.url} target="_blank" rel="noopener noreferrer">{tech.name}</a>
      {isEditing ? (
        <input
          className="tech-item-description-input" 
          type="text"
          onBlur={onInputBlur}
          autoComplete="off"
          maxLength="100"
          placeholder="Description"
          autoFocus
          required
        />
      ) : (
        <span className="tech-item-description-text" onClick={onClickDescriptionText}>
          {tech.description}
        </span>
      )}
      <button className="tech-item-btn tech-item-add" onClick={() => onSelect(tech)}>+</button>
    </div>
  );
};

Tech.propTypes = {
  tech: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  onSelect: PropTypes.func.isRequired,
  onUpdateDescription: PropTypes.func.isRequired,
};

export default Tech;
