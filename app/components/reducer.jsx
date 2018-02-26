import { Map } from "immutable";
import { fromJS } from "immutable";
import { Storage } from "./storage.js";

let initialState = Object.assign(Storage, {
  currentUser: null,
  menuItems: [
    { name: "Главная", link: "/", order: 1 },
    { name: "Каталог", link: "/catalogue/1/1", order: 3 },
    { name: "Компания", link: "#", order: 2 },
    { name: "Спецпредложения", link: "#", order: 5 },
    { name: "Новости", link: "#", order: 4 },
    { name: "Доставка", link: "#", order: 6 },
    { name: "Контакты", link: "#", order: 7 }
  ]
});

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
    case "GET_INITIAL_INFO":
      let cat = state
        .getIn(["catalogue", "categories"])
        .find(val => val.get("id") == action.catId);
      let subCat = cat
        .get("subcategories")
        .find(val => val.get("id") == action.subCatId);
      return state.set(
        "activeCategory",
        fromJS({
          catName: cat.get("name"),
          subCatName: subCat.get("name"),
          fields: subCat.get("fields"),
          totalNumber: subCat.get("fields").length,
          items: subCat.get("goods")
        })
      );
  }
  return state;
};

module.exports = reducer;
