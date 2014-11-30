/**
 * @jsx React.DOM
 */

var PeopleStore = require('../stores/PeopleStore');
var PeopleActionCreators = require('../actions/PeopleActionCreators');

var React = require('react');

var Person = require('./Person.react');

function getStateFromStores() {
  return {
    people: PeopleStore.getAll(),
    selected: PeopleStore.getSelected()
  };
}
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

    return (
      <div className="people">
        <h1>List of people</h1>
        {personNodes}
      </div>
    );
  },

  _onChange: function() {
    this.setState(getStateFromStores());
  }

});

module.exports = People;
