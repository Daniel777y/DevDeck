import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import SelectedTech from "./SelectedTech.jsx"
import Pagination from "./Pagination.jsx"

import "../styles/list.css";
import "../styles/pagination.css";

const SelectedTechList = ({ selectedTechs, onDeleteTech, onClear }) => {
  const perPage = 5;
  const [curPage, setCurPage] = useState(0);
  const onNextPage = () => {
    if (curPage + 1 < selectedTechs.length / perPage) {
      setCurPage(curPage + 1);
    }
  };
  useEffect(() => {
    // curPage should be at the last page
    if (selectedTechs.length === 0) {
      setCurPage(0);
    } else {
      setCurPage(Math.floor((selectedTechs.length - 1) / perPage));
    }
    //console.log(selectedTechs, curPage, selectedTechs.slice(perPage * curPage, Math.min(selectedTechs.length, perPage * (curPage + 1))));
  }, [selectedTechs]);
  const onPrevPage = () => {
    if (curPage - 1 >= 0) {
      setCurPage(curPage - 1);
    }
  };
  return (
    <div className="list-container selected-tech-list">
      <div className="list-header">
        <button className="selected-tech-list-btn clear-btn" onClick={onClear}>Clear</button>
        <button className="selected-tech-list-btn go-btn">Start</button>
      </div>
      <Pagination curPage={curPage} onPrevPage={onPrevPage} onNextPage={onNextPage} />
      <div className="list-items">
        {selectedTechs.slice(perPage * curPage, Math.min(selectedTechs.length, perPage * (curPage + 1))).map(item =>
          <SelectedTech key={item.id} tech={item} onDeleteTech={onDeleteTech} />
        )}
      </div>
    </div>
  );
};

SelectedTechList.propTypes = {
  selectedTechs: PropTypes.array.isRequired,
  onDeleteTech: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default SelectedTechList;
