import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import TechList from "../components/TechList.jsx"
import SelectedTechList from "../components/SelectedTechList.jsx"
import Header from "../components/Header.jsx"

import { techManager } from "../models/TechManager.js";
import { selectedTechManager } from "../models/SelectedTechManager.js";
import sampleTechs from "../models/techs.js";

import { validateUrl } from "../utils/validateUrl.js";

const DEV_MODE = true;

// onAdd: create a new tech from the input form
// onSelect: add an item to the selected list
// onRemove: remove an item from the selected list
// onClear: clear all the items in the selected list
// onStart: confirm the selection

const IndexPage = () => {
  const [selectedTechs, setSelectedTechs] = useState([]);
  const [displayTechs, setDisplayTechs] = useState([]);
  useEffect(() => {
    if (DEV_MODE) {
      setDisplayTechs(sampleTechs);
      setSelectedTechs([]);
    } else {
      const init = async () => {
        const techs = await techManager.getAll();
        setDisplayTechs(techs);
        const selectedTechs = await selectedTechManager.getAll();
        setSelectedTechs(selectedTechs);
      };
      init();
    }
  }, []);
  useEffect(() => {}, []);
  const onAdd = (e) => {
    e.preventDefault();
    const name = e.target.techName.value;
    const url = e.target.techUrl.value;
    const description = e.target.techDescription.value;
    if (!validateUrl(url)) {
      alert('Please enter correct URL');
      return;
    }
    console.log(name, url, description);
  };
  const onSelect = (e) => {
    //console.log("Add tech", e);
    if (selectedTechs.includes(e)) {
      alert('You have already add it.');
      return;
    }
    setSelectedTechs(selectedTechs => [...selectedTechs, e]);
  };
  const onRemove = (e) => {
    setSelectedTechs(selectedTechs => selectedTechs.filter(item => e.name !== item.name));
  };
  const onClear = () => {
    if (selectedTechs.length === 0) {
      alert('You did not select anything.');
      return;
    }
    if (!confirm('Are you sure to clear all selected items?')) {
      return;
    }
    setSelectedTechs([]);
  };
  const onStart = () => {
    if (selectedTechs.length === 0) {
      alert('You did not select anything.');
      return;
    }
    if (!confirm('Are you sure start your project with those techs you selected?')) {
      return;
    }
    setSelectedTechs([]);
  };
  return (
    <div>
      <Header />
      <div className="lists">
        <TechList
          displayTechs={displayTechs}
          onSelect={onSelect}
          onAdd={onAdd}
        />
        <SelectedTechList
          selectedTechs={selectedTechs}
          onRemove={onRemove}
          onClear={onClear}
          onStart={onStart}
        />
      </div>
    </div>
  );
};

IndexPage.propTypes = {};

export default IndexPage;
