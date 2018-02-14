export let Storage = {
  users: [
    {
      id: 1,
      name: "Rawshane",
      surname: "Juhmshootowe",
      login: "ravshan",
      password: "isthebest",
      bookmarks: [4, 5, 1, 9],
      basket: []
    },
    {
      id: 2,
      name: "Pyotr",
      surname: "Ivanov",
      login: "1",
      password: "2",
      bookmarks: [1, 2, 3, 8],
      basket: [2, 4, 1]
    },
    {
      id: 3,
      name: "Ivan",
      surname: "Petrov",
      login: "vanya",
      password: "dota4life",
      bookmarks: [41, 55, 21, 19],
      basket: [6, 4, 1]
    }
  ],
  catalogue: {
    categories: [
      {
        id: 1,
        name: "Инструмент",
        subcategories: [
          {
            id: 1,
            name: "Перфораторы",
            info:
              "Перфоратор — универсальный строительный инструмент. Предназначен для сверления и долбления отверстий в кирпиче, бетоне и камне.       Существуют электромеханические и пневматические перфораторы. Современные модели могут выполнять функции дрели, шуруповерта и отбойного молотка. В ассортиментном ряду есть выбор «трехрежимников»: в одном устройстве будут совмещены отбойный молоток и ударная дрель.",
            fields: [
              {
                id: 1,
                name: "Цена",
                type: "digit",
                display: "range",
                sort: true,
                leftmenu: true
              },
              {
                id: 2,
                name: "Тип",
                type: "text",
                display: "list",
                sort: true,
                leftmenu: false
              },
              {
                id: 3,
                name: "Функционал",
                type: "text",
                display: "list",
                sort: true,
                leftmenu: false
              },
              {
                id: 4,
                name: "Производитель",
                type: "text",
                display: "list",
                sort: false,
                leftmenu: true
              },
              {
                id: 5,
                name: "Питание",
                type: "text",
                display: "select",
                sort: false,
                leftmenu: true
              }
            ],
            goods: []
          }
        ]
      }
    ]
  }
};
