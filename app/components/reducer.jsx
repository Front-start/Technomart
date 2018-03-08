import { Map } from "immutable";
import { List } from "immutable";
import { Set } from "immutable";
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
    case "GET_CAT":
      let cat = state
        .getIn(["catalogue", "categories"])
        .find(val => val.get("id") == action.catId);
      let subCat = cat
        .get("subcategories")
        .find(val => val.get("id") == action.subCatId);
      return state.set("activeCategory", subCat);
    case "PAGE_CHANGE":
      return state.setIn(
        ["activeCategory", "goodsToDisplay"],
        state
          .getIn(["activeCategory", "goods"])
          .slice(action.itemFrom, action.itemTo)
      );
    case "BUILD_FILTER_LIST":
      let filterArr = [];
      state
        .getIn(["activeCategory", "fields"])
        .filter(item => item.get("leftmenu") == true)
        .map(item => {
          if (item.get("type") == "digit") {
            filterArr.push({
              name: item.get("name"),
              display: item.get("display"),
              data: {
                currentMin: state
                  .getIn(["activeCategory", "goods"])
                  .minBy(item1 => item1.get(item.get("key")))
                  .get(item.get("key")),
                min: state
                  .getIn(["activeCategory", "goods"])
                  .minBy(item1 => item1.get(item.get("key")))
                  .get(item.get("key")),
                max: state
                  .getIn(["activeCategory", "goods"])
                  .maxBy(item1 => item1.get(item.get("key")))
                  .get(item.get("key")),
                currentMax: state
                  .getIn(["activeCategory", "goods"])
                  .maxBy(item1 => item1.get(item.get("key")))
                  .get(item.get("key"))
              }
            });
          } else if (item.get("type") == "select") {
            filterArr.push({
              name: item.get("name"),
              display: item.get("display"),
              data: {
                values: Set().union(
                  state
                    .getIn(["activeCategory", "goods"])
                    .map(item1 => item1.get(item.get("key")))
                ),
                currentValue: item.get("default")
              }
            });
          } else if (item.get("type") == "text") {
            filterArr.push({
              name: item.get("name"),
              display: item.get("display"),
              data: {
                values: Set().union(
                  state
                    .getIn(["activeCategory", "goods"])
                    .map(item1 => item1.get(item.get("key")))
                ),
                currentValues: Set()
              }
            });
          }
        });
      return state.set("filterSet", fromJS(filterArr));
  }
  return state;
};

module.exports = reducer;
