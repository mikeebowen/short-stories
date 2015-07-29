// 'use strict';

// var React = require('react');
// var App = require('./components/views/app.jsx');

// React.render(<App />, document.body);

'use strict';

var React = require('react');
var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;
var MainPage = require('./components/views/app.jsx');

var App = React.createClass({

  render: function () {
    return (
      <Locations>
        <Location path="/" handler={MainPage} />
        <Location path="/taco" handler={MainPage} />
      </Locations>
    )
  }
})

React.render(React.createElement(App), document.body)

