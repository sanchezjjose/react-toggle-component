(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['react', 'jquery'], factory);

  } else if (typeof exports === 'object') {
    // CommonJS -- Node + Browserify
    module.exports = factory(
      require('react'),
      require('jquery')
    );

  } else {
    // Browser globals (root is window)
    root.SliderComponent = factory(root.React, root.jQuery);
  }

}(this, function (React, $) {

  return React.createClass({

    render: function() {

      var styles = {
        base: {
          backgroundImage: 'none',
          WebkitBoxShadow: 'none',
          boxShadow: 'none',
          borderColor: '#dfdfdf',
          borderRadius: '50px',
          top: '-1px',
          left: '-1px',
          bottom: '-1px',
          height: 'auto',
          width: '32px',
          border: '1px solid #ececec',
          backgroundColor: '#fff',
          display: 'inline-block',
          position: 'absolute'
        },
        active: {
          left: 'auto',
          right: '-1px'
        }
      };

      var sliderStyles = $.extend({}, styles.base, this.props.isActive && styles.active);

      return (
        React.createElement("div", {className: "slider", style: sliderStyles})
      );
    }
  });

}));
