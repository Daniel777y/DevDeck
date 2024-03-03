import React, { useState } from "react";
import PropTypes from "prop-types";

import Tech from "./Tech.jsx"

import "../styles/list.css";

const TechList = ({ displayTechs, onAddTech }) => {
  const perPage = 10;
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
  return (
    <div className="list-container">
      <div className="list-header">Techs</div>
      <div className="pagination">
        <button onClick={onPrevPage}>{`<`}</button>
        <span> Page {curPage + 1} </span>
        <button onClick={onNextPage}>{`>`}</button>
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
