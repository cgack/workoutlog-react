import React from 'react';
import LogActions from '../actions/logactions';

class Option extends React.Component {
  render() {
    return <option>{this.props.value}</option>;
  }
}

class StoreWorkout extends React.Component {
  constructor() {
    super();
    this.state = {
      log: {
        "name": "",
        "result": "",
        "notes": "",
        "date": ""
      }
    }
    this._storeWorkout = this._storeWorkout.bind( this );
    this._onChange = this._onChange.bind( this );
    this._onSelectChange = this._onSelectChange.bind( this );
  }

  render() {
     this._workouts= [].concat(this.props.allWorkouts);
		return (

			<div id="logWorkout" className="tabview">
				<h2>Record Workout</h2>
	        	<label htmlFor="chooseWorkout">Workout:</label>
	        	<select name="chooseWorkout" onChange={this._onSelectChange} id="chooseWorkout">
              {this._workouts.map(function(result) {
                  return Object.getOwnPropertyNames(result).map(function(res){
                    let obj = result[res];
                    return <Option key={obj.id}  value={obj.name} />;
                  })
              })}
	        	</select>
	        	<label htmlFor="result">Result:</label>
	            <input id="result" onChange={this._onChange} type="text" />
	            <input id="date" onChange={this._onChange} type="date" />
	        	<label htmlFor="notes">Notes:</label>
	        	<textarea id="notes" onChange={this._onChange}></textarea>
	        	<button onClick={this._storeWorkout}>Store</button>
	        </div>
		);
  }

  _onSelectChange( event ) {
      console.log(event.target.options[event.target.selectedIndex].text);
      var log = this.state.log;
      log.name = event.target.options[event.target.selectedIndex].text;
      this.setState({ log: log });
  }

  _onChange( event ) {
    var log = this.state.log;
    log[event.target.id] = event.target.value;
    this.setState({
      log: log
    });
  }
  _storeWorkout() {
    LogActions.store(this.state.log);
  }
}

export default StoreWorkout
