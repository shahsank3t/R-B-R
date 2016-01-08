define([], function() {
	'use strict';
	return React.createClass({
		displayName: 'Form',
		mixins: [React.addons.LinkedStateMixin],
		getInitialState: function(){
			return {
				name: 'T Bag',
				id: 2
			};
		},
		handleSubmit: function(e){
			coll.add(this.state);
			this.setState({id: ++this.state.id});
		},
		render: function() {
			return ( <div>
				<div className="row">
					<div className="form-group text-center">
						<legend>Employee Creation Form</legend>
					</div>
				</div>
				<div className="row">
					<div className="form-group">
						<div className="col-md-2"></div>
						<label className="col-sm-3 control-label">Id:</label>
						<div className="col-sm-5">
							<input type="text" className="form-control" valueLink={this.linkState('id')} disabled/>
						</div>
						<div className="col-md-2"></div>
					</div>
				</div>
				<div className="row">
					<div className="form-group">
						<div className="col-md-2"></div>
						<label className="col-sm-3 control-label">Name:</label>
						<div className="col-sm-5">
							<input type="text" className="form-control" valueLink={this.linkState('name')}/>
						</div>
						<div className="col-md-2"></div>
					</div>
				</div>
				<div className="row">
					<div className="form-group">
						<div className="col-sm-offset-5 col-sm-6">
							<button type="button" className="btn btn-default" onClick={this.handleSubmit}>Submit</button>
						</div>
					</div>
				</div> 
			</div>);
		},
	});
});