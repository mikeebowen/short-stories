'use strict';

var React = require('react');

module.exports = React.createClass({

  submitHandler: function (event) {
    event.preventDefault();

    var author = React.findDOMNode(this.refs.author).value.trim();
    var categories = React.findDOMNode(this.refs.categories).value.trim();
    var storyTitle = React.findDOMNode(this.refs.storyTitle).value.trim();
    var storyText = React.findDOMNode(this.refs.storyText).value.trim();

    this.props.submit({author: author, categories: categories, storyTitle: storyTitle, storyText: storyText});

  },

  render: function () {

    return(
      <form onSubmit={this.submitHandler}>
        <input ref="categories" placeholder="Category" />
        <br />
        <input ref="storyTitle" placeholder="Title" />
        <br />
        <input ref="author" placeholder="Author" />
        <br />
        <input ref="storyText" placeholder="Add your story here"/>
        <br />
        <input type="submit" value="Save Story"></input>
      </form>
      )
  }

});
