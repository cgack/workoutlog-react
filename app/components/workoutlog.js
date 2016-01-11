import React from 'react';
import Nav from './navigation';
import DefineWorkout from './define';
import StoreWorkout from './store';
import History from './history';

class WorkoutLog extends React.Component {
    constructor() {
      super();
      this.state = { view: "define" }
      this._onNav = this._onNav.bind( this );
    }

    render() {
        return (
          <div>
            <h1>Workout Log</h1>
            <Nav onLogout={this.props.onLogout} onNav={this._onNav}/>
            {this.state.view === "define" ? <DefineWorkout/>: ""}
            {this.state.view === "store" ? <StoreWorkout /> : ""}
            {this.state.view === "history" ? <History /> :""}
          </div>
        )
    }

    _onNav( theView ) {
      this.setState( { view: theView });
    }
}

export default WorkoutLog
