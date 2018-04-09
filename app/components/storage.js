export let Storage = {
  page: null,
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
  filterSet: [],
  activeCategory: {
    goodsToDisplay: {},
    goodsToDisplayOnPage: {},
    activeSortField: null
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
              "<h2>Пара слов о перфораторах</h2><p>Перфоратор — универсальный строительный инструмент. Предназначен для сверления и долбления отверстий в кирпиче, бетоне и камне. Существуют электромеханические и пневматические перфораторы. Современные модели могут выполнять функции дрели, шуруповерта и отбойного молотка. В ассортиментном ряду есть выбор «трехрежимников»: в одном устройстве будут совмещены отбойный молоток и ударная дрель.</p>",
            fields: [
              //Описание полей товаров этой подкатегории, нужно для создания фильтров и сортировки
              {
                id: 1,
                key: "price", //Название поля у товара
                name: "Цена", //Название для отображения
                type: "digit", //Тип
                display: "range", //Тип отображения
                sort: true, //Показывать в сортировке
                leftmenu: true //Показывать на панели фильтров
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
                key: "brand",
                name: "Производитель",
                type: "text",
                display: "list",
                sort: false,
                leftmenu: true
              },
              {
                id: 4,
                key: "functions",
                name: "Функционал",
                type: "text",
                display: "list",
                sort: true,
                leftmenu: false
              },
              {
                id: 5,
                key: "power",
                name: "Питание",
                type: "text",
                display: "select",
                default: "Аккумуляторный",
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
              },
              {
                id: 9,
                key: "date",
                name: "Дата добавления",
                type: "digit",
                display: "none",
                sort: false,
                leftmenu: false
              },
              {
                id: 10,
                key: "discount",
                name: "Скидка",
                type: "digit",
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
                image: "/1/1/1.png",
                power: "Аккумуляторный",
                functions: "Сверлит",
                type: "Аккумуляторный",
                date: "2018-04-08T05:13:48+03:00",
                discount: "30"
              },
              {
                id: 2,
                brand: "Интерскол",
                model: "PERFORATR 89000",
                price: 21500,
                image: "/1/1/2.png",
                power: "Сетевой",
                functions: "Долбит",
                type: "Сетевой",
                date: "2018-04-08T05:13:48+03:00",
                discount: "20"
              },
              {
                id: 3,
                brand: "Makita",
                model: "PERFORATR 9000",
                price: 4500,
                image: "/1/1/1.png",
                power: "Сетевой",
                functions: "Сверлит",
                type: "Сетевой",
                date: "2018-04-08T05:13:48+03:00",
                discount: ""
              },
              {
                id: 4,
                brand: "Dewalt",
                model: "DOUBLE PERFORATR 19000",
                price: 15500,
                image: "/1/1/2.png",
                power: "Аккумуляторный",
                functions: "Долбит",
                type: "Аккумуляторный",
                date: "2018-04-08T05:13:48+03:00",
                discount: "15"
              },
              {
                id: 5,
                brand: "Hitachi",
                model: "hochu verstat landingi",
                price: 55800,
                image: "/1/1/1.png",
                power: "Аккумуляторный",
                functions: "Сверлит",
                type: "Аккумуляторный",
                date: "2018-03-08T05:13:48+03:00",
                discount: "50"
              },
              {
                id: 6,
                brand: "BOSCH",
                model: "react",
                price: 72500,
                image: "/1/1/1.png",
                power: "Сетевой",
                functions: "Долбит",
                type: "Сетевой",
                date: "2018-03-08T05:13:48+03:00",
                discount: ""
              },
              {
                id: 7,
                brand: "Makita",
                model: "sosed sverhu",
                price: 65500,
                image: "/1/1/2.png",
                power: "Аккумуляторный",
                functions: "Сверлит",
                type: "Аккумуляторный",
                date: "2018-03-08T05:13:48+03:00",
                discount: "30"
              },
              {
                id: 8,
                brand: "Makita",
                model: "volodin",
                price: 31500,
                image: "/1/1/1.png",
                power: "Сетевой",
                functions: "Сверлит",
                type: "Сетевой",
                date: "2018-03-08T05:13:48+03:00",
                discount: ""
              },
              {
                id: 9,
                brand: "BOSCH",
                model: "brrrr",
                price: 52500,
                image: "/1/1/2.png",
                power: "Аккумуляторный",
                functions: "Сверлит",
                type: "Аккумуляторный",
                date: "2018-04-08T05:13:48+03:00",
                discount: "20"
              },
              {
                id: 10,
                brand: "BOSCH",
                model: "3jn24jn234",
                price: 55500,
                image: "/1/1/2.png",
                power: "Аккумуляторный",
                functions: "Долбит",
                type: "Аккумуляторный",
                date: "2018-04-08T05:13:48+03:00",
                discount: ""
              },
              {
                id: 11,
                brand: "BOSCH",
                model: "TRIPLE PERFORATR 500",
                price: 69500,
                image: "/1/1/1.png",
                power: "Сетевой",
                functions: "Долбит",
                type: "Сетевой",
                date: "2018-04-08T05:13:48+03:00",
                discount: ""
              },
              {
                id: 12,
                brand: "Dewalt",
                model: "dolbit normalno",
                price: 48500,
                image: "/1/1/2.png",
                power: "Сетевой",
                functions: "Долбит",
                type: "Сетевой",
                date: "2018-03-08T05:13:48+03:00",
                discount: ""
              },
              {
                id: 13,
                brand: "Makita",
                model: "dfjngj45",
                price: 47500,
                image: "/1/1/1.png",
                power: "Сетевой",
                functions: "Сверлит",
                type: "Сетевой",
                date: "2018-03-08T05:13:48+03:00",
                discount: "10"
              },
              {
                id: 14,
                brand: "Интерскол",
                model: "interskol ultra",
                price: 14500,
                image: "/1/1/1.png",
                power: "Аккумуляторный",
                functions: "Сверлит",
                type: "Аккумуляторный",
                date: "2018-03-08T05:13:48+03:00",
                discount: ""
              },
              {
                id: 15,
                brand: "Dewalt",
                model: "gref",
                price: 28500,
                image: "/1/1/2.png",
                power: "Аккумуляторный",
                functions: "Долбит",
                type: "Аккумуляторный",
                date: "2018-03-08T05:13:48+03:00",
                discount: "10"
              },
              {
                id: 16,
                brand: "Интерскол",
                model: "32i4mkjlm",
                price: 27500,
                image: "/1/1/1.png",
                power: "Сетевой",
                functions: "Долбит",
                type: "Сетевой",
                date: "2018-03-08T05:13:48+03:00",
                discount: ""
              },
              {
                id: 17,
                brand: "Dewalt",
                model: "ia ustal",
                price: 36500,
                image: "/1/1/2.png",
                power: "Аккумуляторный",
                functions: "Сверлит",
                type: "Аккумуляторный",
                date: "2018-03-08T05:13:48+03:00",
                discount: ""
              },
              {
                id: 18,
                brand: "Интерскол",
                model: "wuerh1",
                price: 25300,
                image: "/1/1/2.png",
                power: "Сетевой",
                functions: "Долбит",
                type: "Сетевой",
                date: "2018-03-08T05:13:48+03:00",
                discount: ""
              },

              {
                id: 19,
                brand: "Dewalt",
                model: "leswr",
                price: 45900,
                image: "/1/1/1.png",
                power: "Аккумуляторный",
                functions: "Сверлит",
                type: "Аккумуляторный",
                date: "2018-03-08T05:13:48+03:00",
                discount: ""
              },
              {
                id: 20,
                brand: "Интерскол",
                model: "x1",
                price: 51500,
                image: "/1/1/1.png",
                power: "Сетевой",
                functions: "Долбит",
                type: "Сетевой",
                date: "2018-03-08T05:13:48+03:00",
                discount: ""
              },
              {
                id: 21,
                brand: "Интерскол",
                model: "XXX_6512",
                price: 26100,
                image: "/1/1/2.png",
                power: "Аккумуляторный",
                functions: "Сверлит",
                type: "Аккумуляторный",
                date: "2018-03-08T05:13:48+03:00",
                discount: ""
              },
              {
                id: 22,
                brand: "Интерскол",
                model: "dokumentacia k immutable.js - govno",
                price: 35400,
                image: "/1/1/2.png",
                power: "Сетевой",
                functions: "Долбит",
                type: "Сетевой",
                date: "2018-04-08T05:13:48+03:00",
                discount: ""
              },

              {
                id: 23,
                brand: "Sdfs 1235",
                model: "2007 is 11 yrs from now",
                price: 22500,
                image: "/1/1/1.png",
                power: "Аккумуляторный",
                functions: "Долбит",
                type: "Аккумуляторный",
                date: "2018-04-08T05:13:48+03:00",
                discount: ""
              },
              {
                id: 24,
                brand: "Dewalt",
                model: "Pr0 drill",
                price: 67500,
                image: "/1/1/2.png",
                power: "Сетевой",
                functions: "Долбит",
                type: "Сетевой",
                date: "2018-04-08T05:13:48+03:00",
                discount: ""
              }
            ]
          }
        ]
      }
    ]
  }
};

// activeCategory > goods - массив объектов всех товаров категории
// filterSet > filter[arr] > filteredItems - id товаров, отфильтрованых фильтром
// activeCategory > goodsToDisplay - товары, для отображения
// activeCategory > goodsToDisplayOnPage - товары, для отображения на странице
