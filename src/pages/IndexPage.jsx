import React, { useState } from "react";
import PropTypes from "prop-types";

import TechList from "../components/TechList.jsx"
import SelectedTechList from "../components/SelectedTechList.jsx"

const IndexPage = () => {
  const techs = [
    {
      category: "frontend",
      list: [
        {
          id: 0,
          name: "react",
          url: "react-url",
          description: "react-description",
        },
        {
          id: 1,
          name: "vue",
          url: "vue-url",
          description: "vue-description",
        },
      ],
    },
    {
      category: "backend",
      list: [
        {
          id: 2,
          name: "php",
          url: "php-url",
          remark: "php-remark",
          description: "php-description",
        },
        {
          id: 3,
          name: "django",
          url: "django-url",
          description: "django-description",
        }
      ],
    }
  ];
  const [selectedTechs, setSelectedTechs] = useState([]);
  const onAddTech = (e) => {
    console.log("Add tech", e);
    setSelectedTechs(selectedTechs => [...selectedTechs, e]);
  };
  const onDeleteTech = (e) => {
    console.log("Delete tech", e);
    setSelectedTechs(selectedTechs => selectedTechs.filter(item => e.name !== item.name));
  };
  return (
    <>
      <TechList techs={techs} selectedTechs={selectedTechs} onAddTech={onAddTech} />
      <SelectedTechList selectedTechs={selectedTechs} onDeleteTech={onDeleteTech} />
    </>
  );
};

IndexPage.propTypes = {};

export default IndexPage;
