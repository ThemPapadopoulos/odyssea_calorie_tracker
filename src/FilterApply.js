
import "./FilterApply.css";
import React, { useState } from "react";

const FilterApply = (props) => {
      
  const [filter, setFilter] = useState("");

  const filterChangeHandler = (event) => {
        let newFilter = event.target.value
        props.onSetFilter(newFilter)
        setFilter(newFilter)
  }

  return (
    <div>
      <p>
        Type to filter the list:
        <input
          id="filter"
          name="filter"
          type="text"
          value={filter}
          onChange={filterChangeHandler}
        />
      </p>
      <ul>
        
      </ul>
    </div>
  );
};

export default FilterApply;
