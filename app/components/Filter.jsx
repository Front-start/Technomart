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
    this.props.updateFilterList(e.target.dataset.id,e.target.textContent);
  }

  selectToggle(e) {
    this.props.updateFilterList(e.target.dataset.id,e.target.textContent);
  }

  componentWillMount() {}

  render() {
    return this.props.filterSet.map((filter, id) => {
      switch (filter.display) {
        case "range":
          return (
            <div className={'filter-item'+' type-'+filter.display} key={id}>
              <span className="filter-header">{filter.name}:</span>
              from: {filter.data.min}, to: {filter.data.max}
            </div>
          );

        case "list":
          return (
            <div className={'filter-instance'+' type-'+filter.display} key={id}>
              <span className="filter-header">{filter.name}:</span>
              {filter.data.values.map((item, n) => {
                return (
                  <span
                    className={
                      this.props.filterSet[id].data.currentValue.indexOf(
                        item
                      ) > -1
                        ? "filter-item checked"
                        : "filter-item"
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
            <div className={'filter-item'+' type-'+filter.display} key={id}>
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
