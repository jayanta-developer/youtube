import React, { useState } from "react";

const SearchBar = ({ onFromSubmit }) => {
  const [term, setTerm] = useState('')

  const fromSubmit = (e) => {
    e.preventDefault();
    onFromSubmit(term)
  }

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={fromSubmit}>
        <div className="field">
          <label> Video Search</label>
          <input value={term}
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  )

}
export default SearchBar;
