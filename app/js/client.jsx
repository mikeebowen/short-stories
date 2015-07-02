'use strict';

var React = require('react');

var App = React.createClass({

  render: function () {
    return (
      <main>
        <h1>Hello From React</h1>
      </main>
      );
  }

});

React.render(<App />, document.body);
