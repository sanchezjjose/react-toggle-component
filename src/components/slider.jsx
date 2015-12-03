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
          backgroundColor: '#fff',
          backgroundImage: 'none',
          border: '1px solid #ececec',
          borderColor: '#dfdfdf',
          borderRadius: '50px',
          bottom: '-1px',
          boxShadow: 'none',
          display: 'inline-block',
          height: 'auto',
          left: '-1px',
          position: 'absolute',
          top: '-1px',
          width: '40px',
          WebkitBoxShadow: 'none'
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
