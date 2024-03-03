import React from "react";
import PropTypes from "prop-types";

import "../styles/createTechForm.css";

const CreateTechForm = ({ onCreateTech }) => {
  return (
    <form className="create-tech-form" onSubmit={onCreateTech}>
      <input
        className="create-tech-from-input"
        type="text"
        name="techName"
        placeholder="Name"
        autoComplete="off"
        maxLength="20"
        required
      />
      <input
        className="create-tech-from-input"
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
  onCreateTech: PropTypes.func.isRequired,
};

export default CreateTechForm;
