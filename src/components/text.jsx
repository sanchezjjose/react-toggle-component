(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['react', 'jquery'], factory);

  } else if (typeof exports === 'object') {
    module.exports = factory(
      require('react')
    );

  } else {
    root.TextComponent = factory(root.React);
  }

}(self, function (React) {

  return React.createClass({

    render: function() {

      const styles = {

        common: {
          fontSize: '15px',
          fontWeight: 'normal',
          top: '11px',
          textShadow: '0 1px 0 rgba(0,0,0,0.2)',
          margin: '0',
          position: 'absolute',
          msUserSelect: 'none',
          MozUserSelect: 'none',
          WebkitUserSelect: 'none',
          msTransition: 'opacity 500ms ease-out',
          MozTransition: 'opacity 500ms ease-out',
          WebkitTransition: 'opacity 500ms ease-out'
        },

        onState: {
          color: '#fff',
          left: '25px',
          right: 'auto'
        },

        offState: {
          color: '#ddd',
          right: '18px',
          left: 'auto'
        },

        visible: {
          opacity: '1',
          visibility: 'visible'
        },
        
        hidden: {
          opacity: '0',
          visibility: 'hidden'
        }
      };

      // TODO: ES6 method here to use make this immutable
      let onStateTextLabel = '';
      let offStateTextLabel = '';

      if (this.props.opts) {
        onStateTextLabel = this.props.opts.onState.text;
        offStateTextLabel = this.props.opts.offState.text;
      }

      if (this.props.opts && this.props.opts.common && this.props.opts.common.styles) {
        Object.assign(styles.common, this.props.opts.common.styles.textComponent);
      }

      if (this.props.opts && this.props.opts.onState && this.props.opts.onState.styles) {
        Object.assign(styles.onState, this.props.opts.onState.styles.textComponent);
      }

      if (this.props.opts && this.props.opts.offState && this.props.opts.offState.styles) {
        Object.assign(styles.offState, this.props.opts.offState.styles.textComponent);
      }

      const onStateTextVisible = this.props.isActive ? styles.visible : styles.hidden;
      const offStateTextVisible = this.props.isActive ? styles.hidden : styles.visible;

      const onStateTextStyle = Object.assign({}, onStateTextVisible, styles.onState, styles.common);   
      const offStateTextStyle = Object.assign({}, offStateTextVisible, styles.offState, styles.common);   

      return (
        <div>
          <span style={onStateTextStyle}> {onStateTextLabel} </span>
          <span style={offStateTextStyle}> {offStateTextLabel} </span>
        </div>
      );
    }
  });

}));
