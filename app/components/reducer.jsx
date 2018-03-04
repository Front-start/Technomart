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
          totalNumber: subCat.get("goods").count(),
          items: subCat.get("goods").sortBy(item => {
            return item.toJS().price;
          })
        })
      );
    case "PAGE_CHANGE":
      return state.setIn(
        ["activeCategory", "itemsToDisplay"],
        state
          .getIn(["activeCategory", "items"])
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
                min: state
                  .getIn(["activeCategory", "items"])
                  .minBy(item1 => item1.get(item.get("key")))
                  .get(item.get("key")),
                max: state
                  .getIn(["activeCategory", "items"])
                  .maxBy(item1 => item1.get(item.get("key")))
                  .get(item.get("key"))
              }
            });
          } else {
            filterArr.push({
              name: item.get("name"),
              display: item.get("display"),
              data: Set().union(
                state
                  .getIn(["activeCategory", "items"])
                  .map(item1 => item1.get(item.get("key")))
              )
            });
          }
        });
      return state.setIn(["activeCategory", "filterSet"], fromJS(filterArr));
  }
  return state;
};

module.exports = reducer;
