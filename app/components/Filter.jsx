import React from "react";
import { connect } from "react-redux";
import actions from "./actions.jsx";

import Slider from "rc-slider";
const Range = Slider.createSliderWithTooltip(Slider.Range);

//import Range from "rc-slider/lib/Range";
//Если загружать только range и не использовать toolip, пропадает стиль правого ползунка

const handleStyle = {
  backgroundColor: "#ababab",
  height: "20px",
  width: "20px",
  border: "9px solid #fff",
  borderRadius: "10px",
  marginLeft: "-10px",
  marginTop: "-9px",
  boxShadow: "0px 2px 2px 0px rgba(0,1,1,0.14)"
};
const trackStyle = { backgroundColor: "#00ca74", height: "2px" };
const railStyle = { backgroundColor: "#d7dcde", height: "2px" };
const dotStyle = {};
const activeDotStyle = {};

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.checkboxToggle = this.checkboxToggle.bind(this);
    this.selectToggle = this.selectToggle.bind(this);
    this.rangeUpdate = this.rangeUpdate.bind(this);
    this.rangeUpdateFields = this.rangeUpdateFields.bind(this);
    this.selectRangeSlider = this.selectRangeSlider.bind(this);

    this.state = {};
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

  rangeUpdateFields(values, id) {
    this.setState({
      ["filter" + id]: values
    });
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
              <div className="range-slider">
                <Range
                  style={{ alignSelf: "center" }}
                  min={filter.data.min}
                  max={filter.data.max}
                  defaultValue={[filter.data.min, filter.data.max]}
                  onAfterChange={value => this.rangeUpdate(value, id)}
                  onChange={value => this.rangeUpdateFields(value, id)}
                  allowCross={false}
                  handleStyle={[handleStyle]}
                  trackStyle={[trackStyle]}
                  railStyle={railStyle}
                  dotStyle={dotStyle}
                  activeDotStyle={activeDotStyle}
                />
              </div>
              <div className="range-slider-minmax">
                <span className="range-slider-min">
                  {this.state["filter" + id]
                    ? this.state["filter" + id][0]
                    : filter.data.min}
                </span>
                {"—"}
                <span className="range-slider-max">
                  {this.state["filter" + id]
                    ? this.state["filter" + id][1]
                    : filter.data.max}
                </span>
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
