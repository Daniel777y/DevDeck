import React from "react";
import PropTypes from "prop-types";

import "../styles/pagination.css";

const Pagination = ({ curPage, onPrevPage, onNextPage }) => {
  return (
    <div className="pagination">
      <button className="pagination-btn" onClick={onPrevPage}>&lt;</button>
      <span className="pagination-text">Page {curPage + 1}</span>
      <button className="pagination-btn" onClick={onNextPage}>&gt;</button>
    </div>
  );
};

Pagination.propTypes = {
  curPage: PropTypes.number.isRequired,
  onPrevPage: PropTypes.func.isRequired,
  onNextPage: PropTypes.func.isRequired,
};

export default Pagination;
