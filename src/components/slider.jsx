(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define([
      'react',
      'react-addons-css-transition-group', 
      'jquery'], 
      factory
    );

  } else if (typeof exports === 'object') {
    module.exports = factory(
      require('react'),
      require('react-addons-css-transition-group'),
      require('jquery')
    );

  } else {
    root.SliderComponent = factory(
      root.React,
      root.React.addons.CSSTransitionGroup, 
      root.jQuery
    );
  }

}(self, function (React, ReactCSSTransitionGroup, $) {

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
          position: 'absolute',
          top: '-1px',
          transform: 'translate(-1px, 0px)',
          transition: 'transform 0.4s ease'
          width: '40px',
          WebkitBoxShadow: 'none',
        },
        active: {
          transform: 'translate(60px, 0px)',
          transition: 'transform 0.4s ease'
        }
      };

      if (this.props.opts && this.props.opts.onState && this.props.opts.onState.styles) {
        $.extend(styles.active, this.props.opts.onState.styles.sliderComponent);
      }

      if (this.props.opts && this.props.opts.offState && this.props.opts.offState.styles) {
        $.extend(styles.base, this.props.opts.offState.styles.sliderComponent);
      }

      var sliderStyles = $.extend({}, styles.base, this.props.isActive && styles.active);

      return (
        <div className="slider" style={sliderStyles}></div>
      );
    }
  });

}));
