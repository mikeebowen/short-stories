'use strict';

var React = require('react');

//create story component
module.exports = React.createClass({
  render: function () {
    return (
        <div>
        <h2>{this.props.data.storyTitle}</h2>
        <h3>By: {this.props.data.author}</h3>
        <h4>Categories: {this.props.data.categories}</h4>
        <p>{this.props.data.storyText}</p>
        </div>
      );
  }
})
