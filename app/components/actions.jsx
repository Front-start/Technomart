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

module.exports = {
  importUser,
  login,
  logout,
  getCat,
  pageChange,
  buildFilterList
};
