import React from "react";

class Breadcrumbs extends React.Component {
  constructor(props) {
    super(props);

    this.state = { path: null };
  }
  componentWillMount() {
    this.setState({ path: this.props.location.pathname.split("/") });
  }

  render() {
    return (
      <div className="breadcrumbs">
        <ul>{this.state.path.map(item => <li key={item}>{item}</li>)}</ul>
      </div>
    );
  }
}

module.exports = Breadcrumbs;
