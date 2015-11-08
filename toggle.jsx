(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['react', 'react-dom', 'jquery'], factory);

  } else if (typeof exports === 'object') {
    // CommonJS -- Node + Browserify
    module.exports = factory(
      require('react'),
      require('react-dom'),
      require('jquery')
    );

  } else {
    // Browser globals (root is window)
    root.ReactToggle = factory(root.React, root.ReactDOM, root.jQuery);

  }

}(this, function (React, ReactDOM, $) {

	var buttonStyle = {
		backgroundColor: 'cadetblue',
    border: '3px solid cadetblue',
		borderRadius: '4',
		color: 'white',
		fontFamily: 'sans-serif',
		fontSize: '16',
		margin: '5',
		padding: '10px 30px',
    textDecoration: 'none'
	};

	var onStateButtonStyle = $.extend(true, {}, buttonStyle);
	var offStateButtonStyle = $.extend(true, {}, buttonStyle);

	var onStateTextValue = 'On';
	var offStateTextValue = 'Off';

	function merge(objA, objB) {
		for (var keyA in objA) {
		  for (var keyB in objB) {
		    if (keyA === keyB) objA[keyA] = objB[keyB];
		  }
		}
	}

	function bindEvents(onStateHttpRequest, offStateHttpRequest) {
		$('.toggle-button-component .btn-on').click(function (ev) {
      ev.preventDefault();

      // TODO: return a Promise? or need some two-way data binding here.
	    $.post(onStateHttpRequest.url, onStateHttpRequest.postData).done(function(data) {
	      console.log(data);
	    });
	  });

	  $('.toggle-button-component .btn-off').click(function (ev) {
      ev.preventDefault();

      // TODO: return a Promise? or need some two-way data binding here.
	    $.post(offStateHttpRequest.url, offStateHttpRequest.postData).done(function(data) {
	      console.log(data);
	    });
	  });
	}

  function renderToggleButtonComponent(domElement, opts) {

	  var ToggleButton = React.createClass({
	    render: function() {
	    	
		  	if (this.props.opts) {
		  		if (this.props.opts.onState && this.props.opts.onState.buttonTextValue) {
		  			onStateTextValue = this.props.opts.onState.buttonTextValue;
		  		}
		  		if (this.props.opts.offState && this.props.opts.offState.buttonTextValue) {
		  			offStateTextValue = this.props.opts.offState.buttonTextValue;		
		  		}
		  		if (this.props.opts.onState && this.props.opts.onState.buttonStyle) {
		  			merge(onStateButtonStyle, this.props.opts.onState.buttonStyle);
		  		}
		  		if (this.props.opts.offState && this.props.opts.offState.buttonStyle) {
		  			merge(offStateButtonStyle, this.props.opts.offState.buttonStyle);
		  		}
		  	}

	      return (
	        <div className="toggle-button">
	          <input type="submit" style={onStateButtonStyle} className="btn btn-on" value={onStateTextValue} />
	  				<input type="submit" style={offStateButtonStyle} className="btn btn-off" value={offStateTextValue} />
	        </div>
	      );
	    }
	  });

	  var ToggleButtonComponent = React.createClass({
	    render: function() {
	      return (
	        <div className="toggle-button-component">
		        <ToggleButton opts={this.props.opts} />
		      </div>
	      );
	    }
	  });

	  ReactDOM.render(
      <ToggleButtonComponent opts={opts} />,
      domElement
    );
  }

  function init(domElement, onStateHttpRequest, offStateHttpRequest, opts) {
    renderToggleButtonComponent(domElement, opts);
    bindEvents(onStateHttpRequest, offStateHttpRequest);
  }

  return {
    init : init
  };

}));
