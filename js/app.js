/**
 * @jsx React.DOM
 */
 
// This file bootstraps the entire application.

var People = require('./components/People.react');
var PeopleStartingData = require('./PeopleStartingData');
var PeopleWebAPIUtils = require('./utils/PeopleWebAPIUtils');
var React = require('react');

PeopleStartingData.init();

PeopleWebAPIUtils.getAllPeople();

React.render(
  <People />,
  document.getElementById('react')
);
