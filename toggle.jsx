var React = require("react/addons");
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
require("./styles.less");

var Toggler = React.createClass({

  render: function() {
    return (
      <div className="react-toggle-container">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});
      

module.exports = Toggler;
