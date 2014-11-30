var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');

var CHANGE_EVENT = 'change';

var _people = {};

/**
 * id of selected person
 */
var _selected = -1;

var PeopleStore = merge(EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  get: function(id) {
    return _people[id];
  },

  getAll: function() {
    return _people;
  },

  getSelected: function() {
    return _selected;
  },

  removeItem: function(id) {

    _people = _people.filter(function(person) {
      if (person.id === id) {
        return false;
      }

      return true;
    });
  }, 

  addItem: function(name) {
    var lastId;
    if (_people.length === 0) {
      lastId = 1; 
    } else {
      var lastPerson = _people.slice().pop();
      lastId = lastPerson.id;
    }

    var newId = lastId+1;

    _people.push({name: name, id: newId});
  }
});


PeopleStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {

    case "RECEIVE_ALL_PEOPLE":
      _people = action.rawPeople;
      PeopleStore.emitChange();
      break;

    case "SELECT_PERSON":
      _selected = action.key;
      PeopleStore.emitChange();
      break;

    case "REMOVE_PERSON":
      PeopleStore.removeItem(action.key);
      PeopleStore.emitChange();
      break;

    case "ADD_PERSON":
      PeopleStore.addItem(action.name);
      PeopleStore.emitChange();
      break;

    default:
      // do nothing
  }

});

module.exports = PeopleStore;
