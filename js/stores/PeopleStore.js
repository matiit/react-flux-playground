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

    default:
      // do nothing
  }

});

module.exports = PeopleStore;
