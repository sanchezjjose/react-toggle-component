(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define([
      'react',
      'react-addons-css-transition-group'], 
      factory
    );

  } else if (typeof exports === 'object') {
    module.exports = factory(
      require('react'),
      require('react-addons-css-transition-group')
    );

  } else {
    root.SliderComponent = factory(
      root.React,
      root.React.addons.CSSTransitionGroup
    );
  }

}(self, function (React, ReactCSSTransitionGroup) {

  return React.createClass({

    render: function() {

      const styles = {

        common: {
          backgroundColor: '#fff',
          backgroundImage: 'none',
          border: '1px solid #ececec',
          borderColor: '#dfdfdf',
          borderRadius: '50px',
          bottom: '-1px',
          boxShadow: 'none',
          display: 'block',
          height: '100%',
          position: 'relative',
          top: '-1px',
          transition: 'transform 0.4s ease',
          width: '40px',
          WebkitBoxShadow: 'none'
        },

        onState: {
          transform: 'translate(60px, 0px)'
        },

        offState: {
          transform: 'translate(0px, 0px)'
        }
      };

      if (this.props.opts && this.props.opts.common && this.props.opts.common.styles) {
        Object.assign(styles.common, this.props.opts.common.styles.sliderComponent);
      }

      if (this.props.opts && this.props.opts.onState && this.props.opts.onState.styles) {
        Object.assign(styles.onState, this.props.opts.onState.styles.sliderComponent);
      }

      if (this.props.opts && this.props.opts.offState && this.props.opts.offState.styles) {
        Object.assign(styles.offState, this.props.opts.offState.styles.sliderComponent);
      }

      const sliderStyles = Object.assign({}, styles.offState, this.props.isActive && styles.onState, styles.common);

      return (
        <div style={sliderStyles}></div>
      );
    }
  });

}));
