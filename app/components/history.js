import React from 'react';

class ListItem extends React.Component {
  render() {
    return <li> {this.props.name} - {this.props.result}</li>;
  }
}

class History extends React.Component {

  render() {
    this._logs = [].concat(this.props.allLogs);
		return (
			<div>
				<h2>History</h2>
				<ul>
          {this._logs.map(function(result) {
              return Object.getOwnPropertyNames(result).map(function(res) {
                let obj = result[res];
          			let histObj = { name: obj.name, result: obj.result };
                return <ListItem key={obj.id} {...histObj} />
              })
          })}
				</ul>
			</div>
		);
  }
}

export default History
