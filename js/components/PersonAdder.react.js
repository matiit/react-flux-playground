/**
 * @jsx React.DOM
 */

var PeopleStore = require('../stores/PeopleStore');
var PeopleActionCreators = require('../actions/PeopleActionCreators');

var React = require('react');

var Person = require('./Person.react');

var PersonAdder = React.createClass({
  getInitialState: function () {
    return {
      value: ''
    }
  },

  changeValue: function (e) {
    this.setState({value: e.target.value})
  },

  addPerson: function(e) {
    if (e.which != 13) {
      return;
    }
    var name = this.state.value;

    if (name.length < 3) {
      return;
    }

    this.setState({value: ''});

    PeopleActionCreators.addPerson(name);

  },

  render: function() {
    return (
      <input onKeyUp={this.addPerson} className="add-person" placeholder="Type person name and click enter" value={this.state.value} onChange={this.changeValue} />
    );
  },

});

module.exports = PersonAdder;
