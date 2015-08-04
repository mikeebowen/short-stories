'use strict';

var React = require('react');

module.exports = React.createClass({

  submitHandler: function (event) {
    event.preventDefault();

    var author = React.findDOMNode(this.refs.authorField).value.trim();
    var categories = React.findDOMNode(this.refs.categories).value.trim();
    var storyTitle = React.findDOMNode(this.refs.storyTitle).value.trim();
    var storyText = React.findDOMNode(this.refs.storyText).value.trim();

    render: function () {

      return(
        <form onSubmit={this.submitHandler}>
          <input type="checkbox" ref="categories" value="fiction">Fiction</input>
          <input type="checkbox" ref="categories" value="fiction">CreepyPasta</input>
          <input type="checkbox" ref="categories" value="fiction">Horror</input>
          <input type="checkbox" ref="categories" value="fiction">Monsters</input>
          <input ref="storyTitle" placeholder="Title" />
          <input ref="author" placeholder="Author" />
          <vbox>
            <label value="Write your Creepypasta!" />
            <textbox ref="storyText" />
          </vbox>
        </form>
        )
    };
  }

});
