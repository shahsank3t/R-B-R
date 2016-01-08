define([], function() {
	return React.createClass({
		componentDidMount: function() {
			this.props.collection.on('add remove change reset', this.forceUpdate.bind(this, null));
		},
		render: function() {
			return ( <table>
				<thead>
					<tr>
						{this.getHeaderTDs()}
					</tr>
				</thead>
				<tbody>
					{this.getRows()}
				</tbody>
			</table> );
		},
		getRows: function(){
			var self = this;
			var rows = this.props.collection.map(function(model, i) {
				var tds = self.getRowsTDs(model);
				return (<tr key={i}>{tds}</tr>);
			});
			return rows;			
		},
		getRowsTDs: function(model){
			var tds = this.props.columns.map(function(column, i){
				var content = column.component ? <column.component model={model} column={column}/> : model.get(column.name);
				return (<td key={i}>{content}</td>);
			});
			return tds;
		},
		getHeaderTDs: function(){
			var tds = this.props.columns.map(function(column, i){
				return (<td key={i}>{column.title}</td>);
			});
			return tds;			
		}
	});
});