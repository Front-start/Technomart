import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import actions from "./actions.jsx";
import { Map } from "immutable";
import Modal from "react-modal";
Modal.setAppElement(app);

let modalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.55)"
  },
  content: {
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "20% auto",
    border: "none",
    background: "#212a3a",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
    width: "260px"
  }
};

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.updateLoginInput = this.updateLoginInput.bind(this);
    this.updatePasswordInput = this.updatePasswordInput.bind(this);
    this.submit = this.submit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);

    this.state = {
      loginInput: "ravshan",
      passwordInput: "isthebest",
      modalOpen: false
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
    this.setState({
      loginInput: "ravshan",
      passwordInput: "isthebest",
      modalOpen: false
    });
  }
  toggleModal() {
    this.setState({ modalOpen: this.state.modalOpen ? false : true });
  }

  render() {
    if (this.props.user) {
      return (
        <div className="user-info">
          <button className="btn btn-logout" onClick={this.props.logout}>
            {this.props.user.name} {this.props.user.surname}
          </button>
          <div className="user-menu">
            <ul>
              <li>
                <Link to="#">Мои заказы</Link>
              </li>
              <li>
                <Link to="#">Личный кабинет</Link>
              </li>
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className="login-form">
          <button className="btn btn-login" onClick={this.toggleModal}>
            Войти
          </button>
          <Link to="#">
            <button className="btn btn-reg">Регистрация</button>
          </Link>
          <Modal
            isOpen={this.state.modalOpen}
            style={modalStyle}
            onRequestClose={this.toggleModal}
            contentLabel="Modal"
          >
            <div className="login-modal">
              <input
                placeholder="Login"
                defaultValue="ravshan"
                onChange={this.updateLoginInput}
              />
              <input
                placeholder="Password"
                defaultValue="isthebest"
                onChange={this.updatePasswordInput}
              />
              <button className="btn" onClick={this.submit}>
                Залогинироваться
              </button>
            </div>
          </Modal>
        </div>
      );
    }
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
