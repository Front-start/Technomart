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
  activeCategory: {
    fields: [],
    items: [],
    itemsToDisplay: []
  },
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
                key: "price",
                name: "Цена",
                type: "digit",
                display: "range",
                sort: true,
                leftmenu: true
              },
              {
                id: 2,
                key: "type",
                name: "Тип",
                type: "text",
                display: "list",
                sort: true,
                leftmenu: false
              },
              {
                id: 3,
                key: "functions",
                name: "Функционал",
                type: "text",
                display: "list",
                sort: true,
                leftmenu: false
              },
              {
                id: 4,
                key: "brand",
                name: "Производитель",
                type: "text",
                display: "list",
                sort: false,
                leftmenu: true
              },
              {
                id: 5,
                key: "power",
                name: "Питание",
                type: "text",
                display: "select",
                sort: false,
                leftmenu: true
              },
              {
                id: 6,
                key: "id",
                name: "ID",
                type: "digit",
                display: "none",
                sort: false,
                leftmenu: false
              },
              {
                id: 7,
                key: "model",
                name: "Модель",
                type: "digit",
                display: "none",
                sort: false,
                leftmenu: false
              },
              {
                id: 8,
                key: "image",
                name: "Картинка",
                type: "image",
                display: "none",
                sort: false,
                leftmenu: false
              }
            ],
            goods: [
              {
                id: 1,
                brand: "BOSCH",
                model: "BFG 3000",
                price: 22500,
                image: "/images/goods/perf/asd.jpg",
                power: "Аккумуляторный",
                functions: "",
                type: "Аккумуляторный"
              },
              {
                id: 2,
                brand: "Интерскол",
                model: "PERFORATR 89000",
                price: 21500,
                image: "/images/goods/perf/asd.jpg",
                power: "Сетевой",
                functions: "",
                type: "Сетевой"
              },
              {
                id: 3,
                brand: "Makita",
                model: "PERFORATR 9000",
                price: 4500,
                image: "/images/goods/perf/asd.jpg",
                power: "Сетевой",
                functions: "",
                type: "Сетевой"
              },
              {
                id: 4,
                brand: "Dewalt",
                model: "DOUBLE PERFORATR 19000",
                price: 25500,
                image: "/images/goods/perf/asd.jpg",
                power: "Аккумуляторный",
                functions: "",
                type: "Аккумуляторный"
              },
              {
                id: 5,
                brand: "Hitachi",
                model: "hochu verstat landingi",
                price: 25800,
                image: "/images/goods/perf/asd.jpg",
                power: "Аккумуляторный",
                functions: "",
                type: "Аккумуляторный"
              },
              {
                id: 6,
                brand: "BOSCH",
                model: "react",
                price: 72500,
                image: "/images/goods/perf/asd.jpg",
                power: "Сетевой",
                functions: "",
                type: "Сетевой"
              },
              {
                id: 7,
                brand: "Makita",
                model: "sosed sverhu",
                price: 25500,
                image: "/images/goods/perf/asd.jpg",
                power: "Аккумуляторный",
                functions: "",
                type: "Аккумуляторный"
              },
              {
                id: 8,
                brand: "Makita",
                model: "volodin",
                price: 21500,
                image: "/images/goods/perf/asd.jpg",
                power: "Сетевой",
                functions: "",
                type: "Сетевой"
              },
              {
                id: 9,
                brand: "BOSCH",
                model: "brrrr",
                price: 12500,
                image: "/images/goods/perf/asd.jpg",
                power: "Аккумуляторный",
                functions: "",
                type: "Аккумуляторный"
              },
              {
                id: 10,
                brand: "BOSCH",
                model: "3jn24jn234",
                price: 15500,
                image: "/images/goods/perf/asd.jpg",
                power: "Аккумуляторный",
                functions: "",
                type: "Аккумуляторный"
              },
              {
                id: 11,
                brand: "BOSCH",
                model: "TRIPLE PERFORATR 500",
                price: 19500,
                image: "/images/goods/perf/asd.jpg",
                power: "Сетевой",
                functions: "",
                type: "Сетевой"
              },
              {
                id: 12,
                brand: "Dewalt",
                model: "dolbit normalno",
                price: 18500,
                image: "/images/goods/perf/asd.jpg",
                power: "Сетевой",
                functions: "",
                type: "Сетевой"
              },
              {
                id: 13,
                brand: "Makita",
                model: "dfjngj45",
                price: 17500,
                image: "/images/goods/perf/asd.jpg",
                power: "Сетевой",
                functions: "",
                type: "Сетевой"
              },
              {
                id: 14,
                brand: "Интерскол",
                model: "interskol ultra",
                price: 14500,
                image: "/images/goods/perf/asd.jpg",
                power: "Аккумуляторный",
                functions: "",
                type: "Аккумуляторный"
              },
              {
                id: 15,
                brand: "Dewalt",
                model: "gref",
                price: 28500,
                image: "/images/goods/perf/asd.jpg",
                power: "Аккумуляторный",
                functions: "",
                type: "Аккумуляторный"
              },
              {
                id: 16,
                brand: "Интерскол",
                model: "32i4mkjlm",
                price: 27500,
                image: "/images/goods/perf/asd.jpg",
                power: "Сетевой",
                functions: "",
                type: "Сетевой"
              },
              {
                id: 17,
                brand: "Dewalt",
                model: "ia ustal",
                price: 26500,
                image: "/images/goods/perf/asd.jpg",
                power: "Аккумуляторный",
                functions: "",
                type: "Аккумуляторный"
              },
              {
                id: 18,
                brand: "Интерскол",
                model: "wuerh1",
                price: 25300,
                image: "/images/goods/perf/asd.jpg",
                power: "Сетевой",
                functions: "",
                type: "Сетевой"
              },

              {
                id: 19,
                brand: "Dewalt",
                model: "leswr",
                price: 25900,
                image: "/images/goods/perf/asd.jpg",
                power: "Аккумуляторный",
                functions: "",
                type: "Аккумуляторный"
              },
              {
                id: 20,
                brand: "Интерскол",
                model: "x1",
                price: 21500,
                image: "/images/goods/perf/asd.jpg",
                power: "Сетевой",
                functions: "",
                type: "Сетевой"
              },
              {
                id: 21,
                brand: "Интерскол",
                model: "XXX_6512",
                price: 26100,
                image: "/images/goods/perf/asd.jpg",
                power: "Аккумуляторный",
                functions: "",
                type: "Аккумуляторный"
              },
              {
                id: 22,
                brand: "Интерскол",
                model: "dokumentacia k immutable.js - govno",
                price: 25400,
                image: "/images/goods/perf/asd.jpg",
                power: "Сетевой",
                functions: "",
                type: "Сетевой"
              },

              {
                id: 23,
                brand: "Sdfs 1235",
                model: "2007 is 11 yrs from now",
                price: 22500,
                image: "/images/goods/perf/asd.jpg",
                power: "Аккумуляторный",
                functions: "",
                type: "Аккумуляторный"
              },
              {
                id: 24,
                brand: "Dewalt",
                model: "Pr0 drill",
                price: 27500,
                image: "/images/goods/perf/asd.jpg",
                power: "Сетевой",
                functions: "",
                type: "Сетевой"
              }
            ]
          }
        ]
      }
    ]
  }
};
