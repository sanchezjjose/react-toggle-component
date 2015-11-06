(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['react', 'react-dom'], factory);

  } else if (typeof exports === 'object') {
    // CommonJS -- Node + Browserify
    module.exports = factory(
      require('react'),
      require('react-dom')
    );

  } else {
    // Browser globals (root is window)
    root.ReactToggle = factory(root.React, root.ReactDOM);

  }

}(this, function (React, ReactDOM) {

	var linkStyle = { 
		backgroundColor: 'cadetblue',
		borderRadius: '4px',
		color: 'white',
		margin: '5px',
		padding: '10px 30px',
    textDecoration: 'none'
	};

  function getToggleButtonComponent(data) {

  	var ToggleButtonForm = React.createClass({
	    render: function() {
	      return (
	        <div className="toggle-button-form">
	        	<ToggleButton data={data} />
	        </div>
	      );
	    }
	  });

	  var ToggleButton = React.createClass({
	    render: function() {
	      return (
	        <div className="toggle-button">
	          <a style={linkStyle} href="#" className="btn btn-on">{this.props.data.button1}</a>
	  				<a style={linkStyle} href="#" className="btn btn-off">{this.props.data.button2}</a>
	        </div>
	      );
	    }
	  });

	  var Toggler = React.createClass({
	    render: function() {
	      return (
	        <div className="toggle-button-component">
		        <ToggleButtonForm />
		      </div>
	      );
	    }
	  });

	  return Toggler;
  }

  function init(elementId) {
  	// TODO: pass in data as part of options
  	var data = { button1 : "In", button2: "Out"}; 
  	var ToggleButton = getToggleButtonComponent(data);

    ReactDOM.render(
      <ToggleButton />,
      document.getElementById(elementId)
    );
  }

  return {
    init : init
  };

}));
