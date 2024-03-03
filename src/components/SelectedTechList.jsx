import React, { useState } from "react";
import PropTypes from "prop-types";

import SelectedTech from "./SelectedTech.jsx"

const SelectedTechList = ({ selectedTechs, onDeleteTech }) => {
  return (
    <>
      <div>Selected Techs</div>
      {selectedTechs.map(item =>
        <SelectedTech key={item.id} tech={item} onDeleteTech={onDeleteTech} />
      )}
    </>
  );
};

SelectedTechList.propTypes = {
  selectedTechs: PropTypes.array.isRequired,
  onDeleteTech: PropTypes.func.isRequired,
};

export default SelectedTechList;
