import React from "react";

class Filter extends React.Component {
  render() {
    console.log(this.props.filter.display);
    switch (this.props.filter.display) {
      case "range":
        return (
          <div className="filter-item" key={this.props.filter.id}>
            <span className="filter-header">{this.props.filter.name}:</span>
          </div>
        );

      case "list":
        return (
          <div className="filter-item" key={this.props.filter.id}>
            <span className="filter-header">{this.props.filter.name}:</span>
          </div>
        );

      case "select":
        return (
          <div className="filter-item" key={this.props.filter.id}>
            <span className="filter-header">{this.props.filter.name}:</span>
          </div>
        );
    }
    return null;
  }
}

module.exports = Filter;
