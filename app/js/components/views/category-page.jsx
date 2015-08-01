'use strict';

var React = require('react');
var request = require('superagent');
var StoriesList = require('../stories_list.jsx');

module.exports = React.createClass({

  getInitialState: function () {
    return {stories: [], title: this.props.category};
  },

  showAllStories: function () {
    request
    .get('/api/stories/' + this.props.category)
    .end(function (err, res) {
      if (err) {
        return console.log(err);
      }

      this.setState({stories: res.body});

    }.bind(this));
  },

  componentDidMount: function () {
    this.showAllStories();
  },

  render: function () {
    return (
      <main>
        <h1>{this.state.title}</h1>
        <StoriesList data={this.state.stories} />
      </main>
      );
  }

});
