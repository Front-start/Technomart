import React from "react";
import { connect } from "react-redux";
import actions from "./actions.jsx";
import { Map } from "immutable";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.updateLoginInput = this.updateLoginInput.bind(this);
    this.updatePasswordInput = this.updatePasswordInput.bind(this);
    this.submit = this.submit.bind(this);

    this.state = {
      loginInput: "",
      passwordInput: ""
    };
  }

  updateLoginInput(e) {
    this.setState({ loginInput: e.target.value });
  }
  updatePasswordInput(e) {
    this.setState({ passwordInput: e.target.value });
  }
  submit() {
    this.props.login(this.state.loginInput, this.state.passwordInput);
  }

  render() {
    return (
      <div>
        <input placeholder="Login" onChange={this.updateLoginInput} />
        <input placeholder="Password" onChange={this.updatePasswordInput} />
        <button onClick={this.submit}>Залогинироваться</button>
        <button onClick={this.props.logout}>Вылогинироваться</button>
        <p>{this.props.user.name}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: Map.isMap(state.get("currentUser"))
      ? state.get("currentUser").toJS()
      : ""
  };
}

module.exports = connect(mapStateToProps, actions)(Login);
