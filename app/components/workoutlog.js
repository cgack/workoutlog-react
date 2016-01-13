import React from 'react';
import Nav from './navigation';
import DefineWorkout from './define';
import StoreWorkout from './store';
import History from './history';
import WorkoutStore from '../stores/WorkoutStore';
import LogStore from '../stores/logstore';

class WorkoutLog extends React.Component {
    constructor() {
      super();
      this.state = {
        view: "define",
        allWorkouts: WorkoutStore.getAll(),
        allLogs: LogStore.getAll()
      };
      this._onNav = this._onNav.bind( this );
      this._onChange = this._onChange.bind( this );
    }
    componentDidMount() {
      WorkoutStore.addChangeListener(this._onChange)
      LogStore.addChangeListener(this._onChange)
    }

    componentWillUnmount() {
      WorkoutStore.removeChangeListener(this._onChange);
      LogStore.removeChangeListener(this._onChange);
    }

    render() {
        return (
          <div>
            <h1>Workout Log</h1>
            <Nav onLogout={this.props.onLogout} onNav={this._onNav}/>
            {this.state.view === "define" ? <DefineWorkout/>: ""}
            {this.state.view === "store" ? <StoreWorkout allWorkouts={this.state.allWorkouts} /> : ""}
            {this.state.view === "history" ? <History allLogs={this.state.allLogs} /> :""}
          </div>
        )
    }

    _onNav( theView ) {
      this.setState( { view: theView });
    }

    _onChange() {
      this.setState({
        view: this.state.view,
        allWorkouts: WorkoutStore.getAll(),
        allLogs: LogStore.getAll()
      });
    }
}

export default WorkoutLog
