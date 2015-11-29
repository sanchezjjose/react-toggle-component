(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['react', 'jquery'], factory);

  } else if (typeof exports === 'object') {
    module.exports = factory(
      require('react'),
      require('jquery')
    );

  } else {
    root.SliderComponent = factory(root.React, root.jQuery);
  }

}(self, function (React, $) {

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
        <div className="slider" style={sliderStyles}></div>
      );
    }
  });

}));
