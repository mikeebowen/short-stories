webpackJsonp([1],{

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(178);

	//create story component
	module.exports = React.createClass({displayName: "module.exports",
	  render: function () {
	    return (
	        React.createElement("li", null, 
	        React.createElement("h2", null, this.props.data.storyTitle), 
	        React.createElement("h3", null, "By: ", this.props.data.author), 
	        React.createElement("h4", null, "Categories: ", this.props.data.categories), 
	        React.createElement("p", null, this.props.data.storyText)
	        )
	      );
	  }
	})


/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(9);


/***/ }

});