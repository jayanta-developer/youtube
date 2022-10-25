import React from "react";

class SearchBar extends React.Component {
  state = { term: "" }

  fromSubmit = e => {
    e.preventDefault();
    this.props.onFromSubmit(this.state.term)
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.fromSubmit}>
          <div className="field">
            <label> Video Search</label>
            <input value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value })
              }}
            />
          </div>
        </form>
      </div>
    )
  }
}
export default SearchBar;
