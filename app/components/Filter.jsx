import React from "react";
import { connect } from "react-redux";
import actions from "./actions.jsx";

import Slider from "rc-slider";
import Tooltip from "rc-tooltip";

const Range = Slider.createSliderWithTooltip(Slider.Range);

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.checkboxToggle = this.checkboxToggle.bind(this);
    this.selectToggle = this.selectToggle.bind(this);
    this.rangeUpdate = this.rangeUpdate.bind(this);
    this.selectRangeSlider = this.selectRangeSlider.bind(this);
  }

  rangeUpdate(value, id) {
    this.props.updateFilterList(id, value[0], value[1]);
    this.props.applyFilter(id);
    this.props.gatherFilteredItems();
    this.props.pageChange(
      this.props.selectedPage * this.props.itemsPerPage,
      (this.props.selectedPage + 1) * this.props.itemsPerPage
    );
  }

  selectRangeSlider(e) {
    console.log(e.target);
    this.setState({ sliderId: e.target.dataset.id });
  }

  checkboxToggle(e) {
    this.props.updateFilterList(e.target.dataset.id, e.target.textContent);
    this.props.applyFilter(e.target.dataset.id);
    this.props.gatherFilteredItems();
    this.props.pageChange(
      this.props.selectedPage * this.props.itemsPerPage,
      (this.props.selectedPage + 1) * this.props.itemsPerPage
    );
  }

  selectToggle(e) {
    this.props.updateFilterList(e.target.dataset.id, e.target.textContent);
    this.props.applyFilter(e.target.dataset.id);
    this.props.gatherFilteredItems();
    this.props.pageChange(
      this.props.selectedPage * this.props.itemsPerPage,
      (this.props.selectedPage + 1) * this.props.itemsPerPage
    );
  }

  render() {
    return this.props.filterSet.map((filter, id) => {
      switch (filter.display) {
        case "range":
          return (
            <div
              className={"filter-instance" + " type-" + filter.display}
              key={id}
            >
              <span className="filter-header">{filter.name}:</span>
              from: {filter.data.min}, to: {filter.data.max}
              <div className="range-slider">
                <Range
                  min={0}
                  max={100000}
                  defaultValue={[220, 77000]}
                  onAfterChange={value => this.rangeUpdate(value, id)}
                  allowCross={false}
                />
              </div>
            </div>
          );

        case "list":
          return (
            <div
              className={"filter-instance" + " type-" + filter.display}
              key={id}
            >
              <span className="filter-header">{filter.name}:</span>
              {filter.data.values.map((item, n) => {
                return (
                  <span
                    className={
                      this.props.filterSet[id].data.currentValue.indexOf(item) >
                      -1
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
            <div
              className={"filter-instance" + " type-" + filter.display}
              key={id}
            >
              <span className="filter-header">{filter.name}:</span>
              {filter.data.values.map((item, n) => (
                <span
                  className={
                    filter.data.currentValue == item
                      ? "filter-item active"
                      : "filter-item"
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
