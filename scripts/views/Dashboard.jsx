define([
	'jsx!views/Table',
	'jsx!views/Form'
	],function(Table, Form){
	'use strict';
	return React.createClass({
		displayName: 'Dashboard',
		getInitialState: function(){
			window.coll = new Backbone.Collection({"id":1, name: "avd"});
			return {};
		},
		getColumns: function(){
			return [
				{name: 'id', title: 'Id'},
				{name: 'name', title: 'Name'},
				{name: 'action', title: 'Action', component: React.createClass({
					handleDelete: function(e){
						coll.remove(+e.currentTarget.dataset.id);
					},
					render: function(){
						return (<button type="button" data-id={this.props.model.get('id')} onClick={this.handleDelete} className="btn btn-danger btn-sm" title="Delete"><i className="fa fa-trash"></i></button>);
					}
				})}];
		},
		render: function() {
			return (<div className="content">
				<div className="container">
					<Form />
					<Table className="table table-striped table-bordered" collection={coll} columns={this.getColumns()} />
				</div>
			</div>);
	    }
	});
});