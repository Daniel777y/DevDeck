import React, { useState } from "react";
import PropTypes from "prop-types";

import Tech from "./Tech.jsx"
import CreateTechForm from "./CreateTechForm.jsx"

import "../styles/list.css";
import "../styles/pagination.css";

const TechList = ({ displayTechs, onAddTech }) => {
  const perPage = 5;
  const [curPage, setCurPage] = useState(0);
  const onNextPage = () => {
    if (curPage + 1 < displayTechs.length / perPage) {
      setCurPage(curPage + 1);
    }
  };
  const onPrevPage = () => {
    if (curPage >= 1) {
      setCurPage(curPage - 1);
    }
  };
  const onCreateTech = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="list-container techs-list">
      <div className="list-header">
        <span className="list-header-text">Techs</span>
      </div>
      <div className="techs-list-subheader">
        <div className="pagination">
          <button className="pagination-btn" onClick={onPrevPage}>&lt;</button>
          <span className="pagination-text"> Page {curPage + 1} </span>
          <button className="pagination-btn" onClick={onNextPage}>&gt;</button>
        </div>
        <CreateTechForm onCreateTech={onCreateTech} />
      </div>
      <div className="list-items">
        {displayTechs.slice(perPage * curPage, Math.min(displayTechs.length, perPage * (curPage + 1))).map(item => 
          <Tech
            key={item.id}
            tech={item}
            onAddTech={onAddTech}
          />
        )}
      </div>
    </div>
  );
};

TechList.propTypes = {
  displayTechs: PropTypes.array.isRequired,
  onAddTech: PropTypes.func.isRequired,
};

export default TechList;
