import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import TechList from "../components/TechList.jsx"
import SelectedTechList from "../components/SelectedTechList.jsx"
import Header from "../components/Header.jsx"

import techs from "../models/techs";

const IndexPage = () => {
  const [selectedTechs, setSelectedTechs] = useState([]);
  const [displayTechs, setDisplayTechs] = useState(techs);
  const onAddTech = (e) => {
    //console.log("Add tech", e);
    if (selectedTechs.includes(e)) {
      alert('You have already add it.');
      return;
    }
    setSelectedTechs(selectedTechs => [...selectedTechs, e]);
  };
  const onDeleteTech = (e) => {
    //console.log("Delete tech", e);
    setSelectedTechs(selectedTechs => selectedTechs.filter(item => e.name !== item.name));
  };
  return (
    <div>
      <Header />
      <div className="lists">
        <TechList
          displayTechs={displayTechs}
          onAddTech={onAddTech}
        />
        <SelectedTechList
          selectedTechs={selectedTechs}
          onDeleteTech={onDeleteTech}
        />
      </div>
    </div>
  );
};

IndexPage.propTypes = {};

export default IndexPage;
