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
    case "ADD_USER": //Добавляет объект пользователя в массив пользователей
      return state.update("users", value => value.push(Map(action.user)));
    case "LOGIN_ATTEMPT": //Ищет пользователя в массиве пользователей, проверяет пароль, меняет currentUser
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
    case "LOGOUT": //Очищает currentUser
      return state.merge({ currentUser: null });
    case "GET_CAT": //Меняет объект activeCategory на данные из категории, соответствующей значениям из match
      let cat = state
        .getIn(["catalogue", "categories"])
        .find(val => val.get("id") == action.catId);
      let subCat = cat
        .get("subcategories")
        .find(val => val.get("id") == action.subCatId);
      return state.set("activeCategory", subCat);
    case "PAGE_CHANGE": //Копирует нужные объекты отфильтрованых товаров в массив для вывода
      return state.withMutations(map =>
        map
          .setIn(["activeCategory", "page"], [action.itemFrom, action.itemTo])
          .setIn(
            ["activeCategory", "goodsToDisplay"],
            state
              .getIn(["activeCategory", "goods"])
              .filter(tovar =>
                state
                  .getIn(["activeCategory", "filteredGoods"])
                  .has(tovar.get("id"))
              )
              .slice(action.itemFrom, action.itemTo)
          )
      );
    case "BUILD_FILTER_LIST":
      //Создается массив объектов с данными для отображения фильтров. Пока варианта 3.
      //На этом этапе можно было бы и не фильтровать, но пусть пока будет.
      let filterArr = [];
      state
        .getIn(["activeCategory", "fields"])
        .filter(filter => filter.get("leftmenu") == true)
        .map(filter => {
          if (filter.get("type") == "digit") {
            //Измеряется цифрами
            let filterObj = {
              name: filter.get("name"),
              display: filter.get("display"),
              key: filter.get("key"),
              data: {
                currentMin: state //Текущее нижнее значение
                  .getIn(["activeCategory", "goods"])
                  .minBy(tovar => tovar.get(filter.get("key")))
                  .get(filter.get("key")),
                min: state //Минимальное нижнее значение
                  .getIn(["activeCategory", "goods"])
                  .minBy(tovar => tovar.get(filter.get("key")))
                  .get(filter.get("key")),
                max: state //Максимальное верхнее значение
                  .getIn(["activeCategory", "goods"])
                  .maxBy(tovar => tovar.get(filter.get("key")))
                  .get(filter.get("key")),
                currentMax: state //Текущее верхнее значение
                  .getIn(["activeCategory", "goods"])
                  .maxBy(tovar => tovar.get(filter.get("key")))
                  .get(filter.get("key"))
              }
            };
            if (filter.get("display") == "range") {
              //Если фильтр - диапазон, то отфильтруем...
              filterObj.data.filteredItems = Set(
                state
                  .getIn(["activeCategory", "goods"])
                  .filter(
                    tovar =>
                      tovar.get(filter.get("key")) >= filterObj.data.min &&
                      tovar.get(filter.get("key")) <= filterObj.data.max
                  )
                  .map(tovar => tovar.get("id"))
              );
            }
            filterArr.push(filterObj); //И запишем сет из id нужных товаров
          } else if (filter.get("type") == "text") {
            //Если значение - текст, соберем все уникальные значения в сет
            let filterObj = {
              name: filter.get("name"),
              display: filter.get("display"),
              key: filter.get("key"),
              data: {
                values: Set().union(
                  //Все уникальные значения соответствующих полей
                  state
                    .getIn(["activeCategory", "goods"])
                    .sort((a, b) =>
                      a
                        .get(filter.get("key"))
                        .localeCompare(b.get(filter.get("key")))
                    ) //Сортировка для удобства
                    .map(tovar => tovar.get(filter.get("key")))
                ),
                currentValue: Set().union(
                  //Пусть пока будет то же самое
                  state
                    .getIn(["activeCategory", "goods"])
                    .sort((a, b) =>
                      a
                        .get(filter.get("key"))
                        .localeCompare(b.get(filter.get("key")))
                    )
                    .map(tovar => tovar.get(filter.get("key")))
                )
              }
            };
            if (filter.get("display") == "list") {
              //Если список, то значение поля товара должно быть в списке
              filterObj.data.filteredItems = Set(
                state
                  .getIn(["activeCategory", "goods"])
                  .filter(tovar =>
                    filterObj.data.currentValue.has(
                      tovar.get(filter.get("key"))
                    )
                  )
                  .map(tovar => tovar.get("id"))
              );
            } else if (filter.get("display") == "select") {
              //Если список, то значение поля товара должно быть в списке
              filterObj.data.currentValue = filter.get("default");
              filterObj.data.filteredItems = Set(
                state
                  .getIn(["activeCategory", "goods"])
                  .filter(
                    tovar =>
                      tovar.get(filter.get("key")) ==
                      filterObj.data.currentValue
                  )
                  .map(tovar => tovar.get("id"))
              );
            }
            filterArr.push(filterObj);
          }
        });

      return state.set("filterSet", fromJS(filterArr));
    case "UPDATE_FILTER_LIST": //Пользователь настраивает фильтры - меняются их объекты
      let filter = state.get("filterSet").get(action.id);
      if (filter.get("display") == "list") {
        //Если тип фильтра - список, то проверим, есть ли новое значение в списке и добави/удалим
        if (filter.getIn(["data", "currentValue"]).has(action.data1)) {
          return state.updateIn(
            ["filterSet", action.id, "data", "currentValue"],
            set => set.delete(action.data1)
          );
        } else
          return state.updateIn(
            ["filterSet", action.id, "data", "currentValue"],
            set => set.add(action.data1)
          );
      }
      if (filter.get("display") == "select") {
        //Если тип фильтра - селект, то запишем новое значение (если оно новое)
        if (
          state.getIn(["filterSet", action.id, "data", "currentValue"]) ==
          action.data1
        ) {
          return state.updateIn(
            ["filterSet", action.id, "data", "currentValue"],
            x => action.data1
          );
        }
        return state;
      }
    case "GATHER_FILTERED_ITEMS": //Собирает с фильтров отфильтрованые товары в один массив
      let filterCount = state.get("filterSet").size - 1;
      let filteredSet = Set(
        state
          .get("filterSet")
          .get("0")
          .getIn(["data", "filteredItems"])
      );

      if (filterCount > 0) {
        for (let i = 1; i <= filterCount; i++) {
          let set = Set(
            state
              .get("filterSet")
              .get(i)
              .getIn(["data", "filteredItems"])
          );

          filteredSet = filteredSet.intersect(set);
        }
      }
      return state.setIn(["activeCategory", "filteredGoods"], filteredSet);
    case "APPLY_FILTER":
      let filterToApply = state.get("filterSet").get(action.filterId);
      let newSet;
      if (filterToApply.get("display") == "range") {
        newSet = Set(
          state
            .getIn(["activeCategory", "goods"])
            .filter(
              tovar =>
                tovar.get(filterToApply.get("key")) >=
                  filterToApply.getIn(["data", "currentMin"]) &&
                tovar.get(filterToApply.get("key")) <=
                  filterToApply.getIn(["data", "currentMax"])
            )
            .map(tovar => tovar.get("id"))
        );
      } else if (filterToApply.get("display") == "list") {
        newSet = Set(
          state
            .getIn(["activeCategory", "goods"])
            .filter(tovar =>
              filterToApply
                .getIn(["data", "currentValue"])
                .has(tovar.get(filterToApply.get("key")))
            )
            .map(tovar => tovar.get("id"))
        );
      } else if (filterToApply.get("display") == "select") {
        newSet = Set(
          state
            .getIn(["activeCategory", "goods"])
            .filter(
              tovar =>
                tovar.get(filterToApply.get("key")) ==
                filterToApply.getIn(["data", "currentValue"])
            )
            .map(tovar => tovar.get("id"))
        );
      }
      return state.setIn(
        ["filterSet", action.filterId, "data", "filteredItems"],
        newSet
      );
  }
  return state;
};

module.exports = reducer;
