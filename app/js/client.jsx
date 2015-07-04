'use strict';

var React = require('react');
var request = require('superagent');
var AllStoriesList = require('./components/all_stories_list.jsx');

var App = React.createClass({

  getInitialState: function () {
    return {stories: [], title: 'Short Stories'};
  },

  showAllStories: function () {
    request
    .get('/api/stories/showall')
    .end(function (err, res) {
      if (err) {
        return console.log(err);
      }

      this.setState({stories: res.body});
    }.bind(this))
  },

  componentDidMount: function () {
    this.showAllStories();
  },

  render: function () {
    return (
      <main>
        <h1>{this.state.title}</h1>
        <AllStoriesList data={this.state.stories} />
      </main>
      );
  }

});

React.render(<App />, document.body);
