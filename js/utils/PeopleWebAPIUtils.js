

var PeopleActionCreators = require('../actions/PeopleActionCreators');

module.exports = {

  getAllPeople: function() {
    // simulate retrieving data from a database
    var rawPeople = JSON.parse(localStorage.getItem('people'));

    // simulate success callback
    PeopleActionCreators.receiveAllPeople(rawPeople);
  }

};

