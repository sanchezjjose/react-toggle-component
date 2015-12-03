(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['react', 'jquery'], factory);

  } else if (typeof exports === 'object') {
    module.exports = factory(
      require('react'),
      require('jquery')
    );

  } else {
    root.TextComponent = factory(root.React, root.jQuery);
  }

}(self, function (React, $) {

  return React.createClass({

    render: function() {

      var styles = {
        base: {
          color: '#555',
          fontSize: '16px',
          fontWeight: 'normal',
          top: '10px',
          textShadow: '0 1px 0 rgba(0,0,0,0.2)',
          margin: '0',
          position: 'absolute',
          right: '20px',
          msUserSelect: 'none',
          MozUserSelect: 'none',
          WebkitUserSelect: 'none'
        },
        active: {
          visibility: 'hidden'
        },
        onText: {
          color: '#fff',
          left: '28px',
          right: 'auto',
          textShadow: '0 1px 0 rgba(0,0,0,0.5)'
        },
        offText: {
          color: '#555',
          textShadow: '0 1px 0 rgba(0,0,0,0.2)'
        }
      };

      if (this.props.opts && this.props.opts.onState && this.props.opts.onState.styles) {
        $.extend(styles.onText, this.props.opts.onState.styles.textComponent);
      }

      if (this.props.opts && this.props.opts.offState && this.props.opts.offState.styles) {
        $.extend(styles.offText, this.props.opts.offState.styles.textComponent);
      }

      var onStateTextStyle = $.extend({}, styles.base, (!this.props.isActive && styles.active) || styles.onText),
          offStateTextStyle = $.extend({}, styles.base, (this.props.isActive && styles.active) || styles.offText),
          onStateTextValue = '',
          offStateTextValue = '';

      if (this.props.opts && this.props.opts.onState) {
        onStateTextValue = this.props.opts.onState.text;
      }

      if (this.props.opts && this.props.opts.offState) {
        offStateTextValue = this.props.opts.offState.text;
      }

      return (
        <div>
          <p className="onText status" style={onStateTextStyle}> {onStateTextValue} </p>
          <p className="offText status" style={offStateTextStyle}> {offStateTextValue} </p>
        </div>
      );
    }
  });

}));
