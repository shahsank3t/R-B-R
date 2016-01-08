define([], function() {
	'use strict';
	//Using ES6
	// class Header extends React.Component {
	// 	getInitialState: function() {
	// 		return {
	// 			myTime: 0
	// 		};
	// 	},
	// 	render: function() {
	// 		var self = this;
	// 		// this.setState(myTime, new Date());
	// 		setInterval(function(){
	// 			self.setState(myTime, new Date());
	// 		},1000)
	// 		return <div className = 'header' > Sample App using BACKBONE + REACT {this.state.myTime.toString()}< /div>;
	// 	}
	// }
	// return Header;
	//Using Pure JS
	return React.createClass({
		displayName: 'Header',
		getInitialState: function(){
			return {
				myTime: new Date()
			};
		},
		componentDidMount: function(){
			var self = this;
			setInterval(function(){self.setState({myTime: new Date()})},1000);
		},
	    render: function() {
	        return (<div className='header'>Sample App using BACKBONE + REACT {this.state.myTime.toString()}</div>);
	    }
	});
});