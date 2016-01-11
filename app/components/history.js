import React from 'react';

class ListItem extends React.Component {
  render() {
    return <li> {this.props.name} - {this.props.result}</li>;
  }
}

class History extends React.Component {
  constructor() {
    super();
    this._mockHistory = [
      {
          "id": 0,
          "name": "Murph",
          "result": "32:18",
          "notes": "painful, but fun"
      },
      {
          "id": 1,
          "name": "Tabata Something Else",
          "type": "reps",
          "result": "421",
          "notes": ""
      }
    ]
  }

  render() {

		return (
			<div>
				<h2>History</h2>
				<ul>
          {this._mockHistory.map(function(result) {
        			var histObj = { name: result.name, result: result.result };
              return <ListItem key={result.id} {...histObj} />
          })}
				</ul>
			</div>
		);
  }
}

export default History
