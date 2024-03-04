import React from "react";
import PropTypes from "prop-types";

import "../styles/createTechForm.css";

const CreateTechForm = ({ onAdd }) => {
  return (
    <form className="create-tech-form" onSubmit={onAdd}>
      <input
        className="create-tech-form-input"
        type="text"
        name="techName"
        placeholder="Name"
        autoComplete="off"
        maxLength="20"
        required
      />
      <input
        className="create-tech-form-input"
        type="text"
        name="techUrl"
        placeholder="URL"
        autoComplete="off"
        maxLength="100"
        required
      />
      <input
        className="create-tech-form-input"
        type="text"
        name="techDescription"
        placeholder="Description"
        autoComplete="off"
        maxLength="100"
        required
      />
      <button className="create-tech-form-btn" type="submit">Create</button>
    </form>
  );
};

CreateTechForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default CreateTechForm;
