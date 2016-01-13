import React from 'react';
import WorkoutActions from '../actions/WorkoutActions';

export default class DefineWorkout extends React.Component {
  constructor() {
    super();
    this.state = {
      workout:  {
        name: "",
        type: "",
        description:""
      }
    };
    this._save = this._save.bind( this );
    this._onChange = this._onChange.bind( this );
  }
  render() {
    return  (
	        <div id="defineWorkouts" >
	        	<h2>Define Workout</h2>
	            <label htmlFor="name">Define Name
		            <input
                  value={this.state.workout.name}
                  onChange={this._onChange}
                  type="text" id="name" />
	            </label>
	            <label htmlFor="type">Define Type
		            <input
                  value={this.state.workout.type}
                  onChange={this._onChange}
                  id="type" type="text" />
	            </label>
	            <label htmlFor="description">Description</label>
	            <textarea
                  onChange={this._onChange}
                value={this.state.workout.description} id="description" ></textarea>
	            <button id="saveDefinition" onClick={this._save}>Save Definition</button>
	        </div>
        );
  }

  _save() {
      WorkoutActions.define(this.state.workout);
  }

  _onChange(event) {
    var workout = this.state.workout;
    workout[event.target.id] = event.target.value;
    this.setState({
      workout: workout
    });
  }
}
