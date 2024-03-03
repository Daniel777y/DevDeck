import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Tech from "./Tech.jsx"

const TechList = ({ techs, onAddTech }) => {
  const [curCategory, setCurCategory] = useState(0);
  const onNextCategory = () => {
    if (curCategory + 1 < techs.length) {
      setCurCategory(curCategory + 1);
    }
  };
  const onPrevCategory = () => {
    if (curCategory >= 1) {
      setCurCategory(curCategory - 1);
    }
  };
  return (
    <>
      <div>
        <button onClick={onPrevCategory}>{`<`}</button>
        <span>{techs[curCategory].category}</span>
        <button onClick={onNextCategory}>{`>`}</button>
      </div>
      <div>
        {techs[curCategory].list.map(item => 
          <Tech
            key={item.id}
            tech={item}
            onAddTech={onAddTech}
          />
        )}
      </div>
    </>
  );
};

TechList.propTypes = {
  techs: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      list: PropTypes.array.isRequired,
    })
  ),
  selectedTechs: PropTypes.array.isRequired,
  onAddTech: PropTypes.func.isRequired,
};

export default TechList;
