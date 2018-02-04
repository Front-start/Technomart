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

module.exports = { importUser, login, logout };
