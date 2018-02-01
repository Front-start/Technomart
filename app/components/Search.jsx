import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.updateSearch = this.updateSearch.bind(this);
    this.toggleFocus = this.toggleFocus.bind(this);

    this.state = {
      value: "",
      class: ""
    };
  }

  toggleFocus() {
    this.setState({ class: this.state.class == "focusOn" ? "" : "focusOn" });
  }

  updateSearch(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <div className={"header-search " + this.state.class}>
        <input
          id="header-search"
          type="text"
          onChange={this.updateSearch}
          onFocus={this.toggleFocus}
          onBlur={this.toggleFocus}
          value={this.state.value}
          placeholder="Поиск:"
        />
      </div>
    );
  }
}

module.exports = Search;
