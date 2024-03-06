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

// displayTechs: techs that display in the tech list
// selectedTechs: techs that are selected

// onAdd: create a new tech from the input form
// onSelect: add an item to the selected list
// onRemove: remove an item from the selected list
// onClear: clear all the items in the selected list
// onStart: confirm the selection
// onUpdate: update the tech info

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
  const onAdd = (e) => {
    e.preventDefault();
    const name = e.target.techName.value;
    const url = e.target.techUrl.value;
    const description = e.target.techDescription.value;
    console.log("add", name, url, description);
    if (!validateUrl(url)) {
      alert('Please enter correct URL!');
      return;
    }
    if (displayTechs.some(item => item.name.toLowerCase() == name.toLowerCase())) {
      alert(`${name} already exists!`);
      return;
    }
    const newTech = {
      id: displayTechs.length,
      name,
      url,
      description,
    };
    if (DEV_MODE) {
      setDisplayTechs([...displayTechs, newTech]);
    } else {
      // if not in dev mode, update database
      const update = async () => {
        await techManager.addTech(newTech);
        await setDisplayTechs([...displayTechs, newTech]);
      };
      update();
    }
    e.target.reset();
    alert(`${name} is created!`);
  };
  const onSelect = (tech) => {
    console.log("select", tech);
    if (selectedTechs.some(item => tech.name === item.name)) {
      alert('You have already add it.');
      return;
    }
    const newSelectedTechs = [...selectedTechs, tech];
    if (DEV_MODE) {
      setSelectedTechs(newSelectedTechs);
    } else {
      // if not in dev mode, update database
      const update = async () => {
        await selectedTechManager.selectTech(tech);
        await setSelectedTechs(newSelectedTechs);
      };
      update();
    }
  };
  const onRemove = (tech) => {
    console.log("remove", tech);
    const newSelectedTechs = selectedTechs.filter(item => tech.name !== item.name);
    if (DEV_MODE) {
      setSelectedTechs(newSelectedTechs);
    } else {
      // if not in dev mode, update database
      const update = async () => {
        await selectedTechManager.removeTech(tech);
        await setSelectedTechs(newSelectedTechs);
      };
      update();
    }
  };
  const onClear = () => {
    if (selectedTechs.length === 0) {
      alert('You did not select anything.');
      return;
    }
    if (!confirm('Are you sure to clear all selected items?')) {
      return;
    }
    if (DEV_MODE) {
      setSelectedTechs([]);
    } else {
      // if not in dev mode, update database
      // delete selected techs one by one
      const update = async () => {
        await selectedTechManager.clearTechs(selectedTechs);
        await setSelectedTechs([]);
      };
      update();
    }
  };
  const onStart = () => {
    if (selectedTechs.length === 0) {
      alert('You did not select anything.');
      return;
    }
    if (!confirm('Are you sure start your project with those techs you selected?')) {
      return;
    }
    if (DEV_MODE) {
      setSelectedTechs([]);
    } else {
      const update = async () => {
        await selectedTechManager.clearTechs(selectedTechs);
        await setSelectedTechs([]);
      };
      update();
      setSelectedTechs([]);
    }
  };
  const onUpdate = (newTech) => {
    console.log("update description", newTech);
    const newDisplayTechs = displayTechs.map(item => {
      if (item.name === newTech.name) {
        return {
          ...item,
          description: newTech.description,
        }
      }
      return item;
    });
    if (DEV_MODE) {
      setDisplayTechs(newDisplayTechs);
    } else {
      const update = async () => {
        await techManager.updateTech(newTech);
        await setDisplayTechs(newDisplayTechs);
      };
      update();
    }
    alert(`${newTech.name} is updated successfully!`);
  };
  return (
    <div>
      <Header />
      <div className="lists">
        <TechList
          displayTechs={displayTechs}
          onSelect={onSelect}
          onAdd={onAdd}
          onUpdate={onUpdate}
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
