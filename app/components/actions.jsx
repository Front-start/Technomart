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

var getInitialInfo = function(catId, subCatId, numberOfItems) {
  return {
    type: "GET_INITIAL_INFO",
    catId,
    subCatId,
    numberOfItems
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
  getInitialInfo,
  pageChange,
  buildFilterList
};
