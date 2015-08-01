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

// var ReactRouter = require('react-router');
// var Router = ReactRouter.Router;
// var Route = ReactRouter.Route;
// var Link = ReactRouter.Link;

// var App = React.createClass({

//   render: function () {
//     return (
//       <Router history={history}>
//         <Route path="/" component={MainPage} />
//         <Route path="about" component={CategoryPage} />
//       <Route path="*" component={NoMatch} />
//       </Router>
//       )
//   }
// })

// React.render(<App />, document.body);
