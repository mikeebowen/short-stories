'use strict';

var React = require('react');

//create story component
module.exports = React.createClass({
  render: function () {
    return (
        <li>
        <h2>{this.props.data.storyTitle}</h2>
        <h3>By: {this.props.data.author}</h3>
        <p>{this.props.data.storyText}</p>
        </li>
      );
  }
})
