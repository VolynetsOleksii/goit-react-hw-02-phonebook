import React from "react";
import PropTypes from "prop-types";

export const Filter = ({ handleChange, filter }) => (
    <label>
      Find contacts by Name
      <input onChange={handleChange} type="text" name="filter" value={filter} />
    </label>
  );

  Filter.propTypes = {
    handleChange: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
  };