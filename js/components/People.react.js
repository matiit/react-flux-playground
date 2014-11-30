/**
 * @jsx React.DOM
 */

var PeopleStore = require('../stores/PeopleStore');
var PeopleActionCreators = require('../actions/PeopleActionCreators');

var React = require('react');

var Person = require('./Person.react');
var PersonAdder = require('./PersonAdder.react');

function getStateFromStores() {
  return {
    people: PeopleStore.getAll(),
    selected: PeopleStore.getSelected()
  };
};

var People = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    PeopleStore.addChangeListener(this._onChange);
  },

  render: function() {
    var personNodes = this.state.people.map(function (person) {
      return (
          <Person person={person} selectedId={this.state.selected} />
        );
    }.bind(this));

    if (this.state.people.length === 0) {
      personNodes = "No people to display.";
    }

    return (
      <div className="people">
        <h1>List of people</h1>
        {personNodes}
        <PersonAdder />
      </div>
    );
  },

  _onChange: function() {
    this.setState(getStateFromStores());
  }

});

module.exports = People;
