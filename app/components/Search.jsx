import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.updateSearch = this.updateSearch.bind(this);

    this.state = {
      value: ""
    };
  }

  updateSearch(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <div className="header-search">
        <input
          id="header-search"
          type="text"
          onChange={this.updateSearch}
          value={this.state.value}
          placeholder="Поиск:"
        />
      </div>
    );
  }
}

module.exports = Search;
