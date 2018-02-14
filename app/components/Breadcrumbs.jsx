import React from "react";

import { connect } from "react-redux";
import actions from "./actions.jsx";

class Breadcrumbs extends React.Component {
  constructor(props) {
    super(props);

    this.state = { path: null };
  }
  componentWillMount() {
    let pathArray = ["", "Каталог"];
    pathArray.push(this.props.category);
    pathArray.push(this.props.subCategory);
    this.setState({ path: pathArray });
  }

  render() {
    return (
      <div className="breadcrumbs">
        <ul>
          <li />
          {this.state.path.map(
            item => (!!item == true ? <li key={item}>{item}</li> : "")
          )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let catsIds = window.location.pathname.split("/");
  let cats, catNumber, catName, subCatNumber, subCatName;
  if (catsIds[2] == true) {
    cats = state.getIn(["catalogue", "categories"]);
    catNumber = cats.findIndex(item => item.get("id") == catsIds[2]);
    catName = cats.get(catNumber).get("name");
    if (catsIds[3] == true) {
      subCatNumber = cats
        .get(catNumber)
        .get("subcategories")
        .findIndex(item => item.get("id") == catsIds[3]);

      subCatName = cats
        .get(catNumber)
        .get("subcategories")
        .get(subCatNumber)
        .get("name");
      return {
        category: catsIds[2] && catName ? catName : "",
        subCategory: catsIds[3] && subCatName ? subCatName : ""
      };
    }
  }
  return {
    category: catsIds[2] && catName ? catName : "",
    subCategory: catsIds[3] && subCatName ? subCatName : ""
  };
}

module.exports = connect(mapStateToProps, actions)(Breadcrumbs);
