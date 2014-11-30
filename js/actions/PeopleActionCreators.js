var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {

  receiveAllPeople: function(rawPeople) {
    AppDispatcher.handleServerAction({
      type: "RECEIVE_ALL_PEOPLE",
      rawPeople: rawPeople
    });
  },

  selectPerson: function(key) {
    AppDispatcher.handleServerAction({
      type: "SELECT_PERSON",
      key: key
    });
  },
};

