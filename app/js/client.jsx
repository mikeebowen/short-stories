'use strict';

var React = require('react');
var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;
var MainPage = require('./components/views/main-page.jsx');
var CategoryPage = require('./components/views/category-page.jsx');

var App = React.createClass({

  render: function () {
    return (
      <Locations hash>
        <Location path="/" handler={MainPage} />
        <Location path="/category" handler={CategoryPage} />
      </Locations>
    )
  }
})

React.render(<App />, document.body)
