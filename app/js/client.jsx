'use strict';

var React = require('react');
var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;
var MainPage = require('./components/views/main-page.jsx');
var CategoryPage = require('./components/views/category-page.jsx');
var FormPage = require('./components/views/story-form-page.jsx');

var App = React.createClass({

  render: function () {
    return (
      <Locations hash>
        <Location path="/" handler={MainPage} />
        <Location path="/stories/:category" handler={CategoryPage} />
        <Location path="/addstory" handler={FormPage} />
      </Locations>
    )
  }
})

React.render(<App />, document.body)
