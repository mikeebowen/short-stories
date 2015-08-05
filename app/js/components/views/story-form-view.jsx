'use strict';

var React = require('react');
var StoryForm = require('../add-story-form.jsx');
var request = require('superagent');

module.exports = React.createClass({

  getInitialState: function () {
    return {title: 'Add Your Own Story'};
  },

  submit: function (storyObj) {
    request
    .post('/api/stories')
    .send(noteObj)
    .end(function (err, res) {
      if (err) {
        return console.log(err);
      }
    }.bind(this));
  },

  render: function () {
    return (
      <main>
        <h1>{this.state.title}</h1>
        <StoryForm submit={this.submit}/>
      </main>
      );
  }

});


