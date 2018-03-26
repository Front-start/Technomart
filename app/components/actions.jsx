var importUser = function(user) {
  return {
    type: "ADD_USER",
    user
  };
};
var login = function(login, password) {
  return {
    type: "LOGIN_ATTEMPT",
    login,
    password
  };
};
var logout = function() {
  return {
    type: "LOGOUT"
  };
};

var getCat = function(catId, subCatId) {
  return {
    type: "GET_CAT",
    catId,
    subCatId
  };
};

var pageChange = function(itemFrom, itemTo) {
  return {
    type: "PAGE_CHANGE",
    itemFrom,
    itemTo
  };
};

var buildFilterList = function() {
  return {
    type: "BUILD_FILTER_LIST"
  };
};

var updateFilterList = function(id, data1, data2) {
  return {
    type: "UPDATE_FILTER_LIST",
    id,
    data1,
    data2
  };
};

var gatherFilteredItems = function() {
  return {
    type: "GATHER_FILTERED_ITEMS"
  };
};

var applyFilter = function(filterId) {
  return {
    type: "APPLY_FILTER",
    filterId
  };
};

module.exports = {
  importUser,
  login,
  logout,
  getCat,
  pageChange,
  buildFilterList,
  updateFilterList,
  gatherFilteredItems,
  applyFilter
};
