import { Map } from "immutable";
import { fromJS } from "immutable";
import { Storage } from "./storage.js";

let initialState = Object.assign(Storage, {
  currentUser: null,
  items: []
});

console.log(initialState);

var reducer = function(state = new Map(fromJS(initialState)), action) {
  switch (action.type) {
    case "ADD_USER":
      return state.update("users", value => value.push(Map(action.user)));
    case "LOGIN_ATTEMPT":
      let id = state
        .get("users")
        .findIndex(user => user.get("login") == action.login);
      if (id != -1) {
        if (
          state
            .get("users")
            .get(id)
            .get("password") == action.password
        ) {
          return state.merge({ currentUser: state.get("users").get(id) });
        } else {
          alert("Пароль неверный");
        }
      } else {
        alert("Пользователь не найден");
      }
      break;
    case "LOGOUT":
      return state.merge({ currentUser: null });
  }
  return state;
};

module.exports = reducer;
