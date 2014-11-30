/** @jsx React.DOM */

var React = require('react');

var PeopleStore = require('../stores/PeopleStore');
var PeopleActionCreators = require('../actions/PeopleActionCreators');

var Person = React.createClass({

  selectThis: function() {
    PeopleActionCreators.selectPerson(this.props.person.id);
  },

  render: function() {
    return (
        <div className={this.getClassName()}>
          <p onClick={this.selectThis}>{this.props.person.name}</p>
        </div>
      );
  },

  getClassName: function() {
    if (this.props.person.id == this.props.selectedId) {
      return "selected person";
    }

    return "person";
  }
});

module.exports = Person;
