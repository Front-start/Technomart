import React from "react";
import { connect } from "react-redux";
import actions from "./actions.jsx";

class Filter extends React.Component {
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
          return (
            <div className="filter-item" key={id}>
              <span className="filter-header">{filter.name}:</span>
              List: {filter.data.map(item => item)}
            </div>
          );

        case "select":
          return (
            <div className="filter-item" key={id}>
              <span className="filter-header">{filter.name}:</span>
              <select>
                {filter.data.map((item, n) => (
                  <option key={n} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          );
      }
      return null;
    });
  }
}

function mapStateToProps(state) {
  return {
    filterSet: state.getIn(["activeCategory", "filterSet"]).toJS()
  };
}

module.exports = connect(mapStateToProps, actions)(Filter);
