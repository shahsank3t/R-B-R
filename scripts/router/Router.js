define([
	'require',
	'backbone',
], function(require, Backbone) {	
	var rRender;
	var AppRouter = Backbone.Router.extend({
		routes: {
			'' : 'dashboard',
			'!/dashboard' : 'dashboard',
			'*actions': 'defaultAction'
		},
		initialize: function() {
			rRender = React.render;
			this.showRegions();
			this.listenTo(this, "route", this.postRouteExecute, this);
		},
		showRegions: function() {
			this.renderHeader();
			this.renderFooter();
		},
		renderHeader: function(){
			require(['jsx!views/Header'], function(Header){
				ReactDOM.render(React.createElement(Header), App.Header);
			});
		},
		renderFooter: function(){
			require(['jsx!views/Footer'], function(Footer){
				ReactDOM.render(React.createElement(Footer), App.Footer);
			});
		},
		execute: function(callback, args) {
			this.preRouteExecute();
			if (callback) callback.apply(this, args);
			this.postRouteExecute();
		},
		preRouteExecute: function() {},
		postRouteExecute: function(name, args) {},

		/**
		 * Define route handlers here
		 */
		
		dashboard: function(){
			require(['jsx!views/Dashboard'], function(Dashboard){
				ReactDOM.render(React.createElement(Dashboard), App.Container);
			});
		},
		defaultAction: function(actions) {
		},
	});

	return AppRouter;

});