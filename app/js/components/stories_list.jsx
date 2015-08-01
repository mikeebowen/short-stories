'use strict';

var React = require('react');
var Story = require('./story.jsx');

module.exports = React.createClass({
  renderStories: function () {
    return this.props.data.map(function (story) {
      return <Story data={story} key={story._id} />
    });
  },

  render: function () {
    return (
      <ul>
        {this.renderStories()}
      </ul>
    );
  }

})
