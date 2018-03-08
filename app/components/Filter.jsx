import React from "react";
import { connect } from "react-redux";
import actions from "./actions.jsx";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.checkboxToggle = this.checkboxToggle.bind(this);
    this.selectToggle = this.selectToggle.bind(this);
  }

  checkboxToggle(e) {
    let id = e.target.dataset.id;
    let text = e.target.textContent;
  }

  selectToggle(e) {
    let id = e.target.dataset.id;
    let text = e.target.textContent;
  }

  componentWillMount() {}

  render() {
    return this.props.filterSet.map((filter, id) => {
      switch (filter.display) {
        case "range":
          return (
            <div className="filter-item" key={id}>
              <span className="filter-header">{filter.name}:</span>
              from: {filter.data.min}, to: {filter.data.max}
            </div>
          );

        case "list":
          filter.data.values.sort(function(a, b) {
            return a.localeCompare(b);
          });
          return (
            <div className="filter-item" key={id}>
              <span className="filter-header">{filter.name}:</span>
              {filter.data.values.map((item, n) => {
                return (
                  <span
                    className={
                      this.props.filterSet[id].data.currentValues.indexOf(
                        item
                      ) >= 0
                        ? "checked"
                        : ""
                    }
                    data-id={id}
                    onClick={this.checkboxToggle}
                    key={n}
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          );

        case "select":
          return (
            <div className="filter-item" key={id}>
              <span className="filter-header">{filter.name}:</span>
              {filter.data.values.map((item, n) => (
                <span
                  className={
                    this.props.filterSet[id].data.current == { item }
                      ? "active"
                      : ""
                  }
                  onClick={this.selectToggle}
                  data-id={id}
                  key={n}
                >
                  {item}
                </span>
              ))}
            </div>
          );
      }
      return null;
    });
  }
}

function mapStateToProps(state) {
  return {
    filterSet: state.get("filterSet").toJS()
  };
}

module.exports = connect(mapStateToProps, actions)(Filter);
