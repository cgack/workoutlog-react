import React from 'react';
import { render } from 'react-dom';
import Authentication from './components/auth';
import WorkoutLog from './components/workoutlog';

class App extends React.Component {
  constructor() {
    super();
    this.state = { signedIn: false }
    // bind this to our non-React method
    this._onAuthComplete = this._onAuthComplete.bind(this);
    this._onLogout = this._onLogout.bind(this);
  }
  
  render() {
      return (<div>
        {
          this.state.signedIn ?
          <WorkoutLog onLogout={this._onLogout}/> :
          <Authentication onAuthComplete={this._onAuthComplete} />
        }
      </div> )
  }
  _onAuthComplete( result ) {
    if (result()) {
      this.setState({ signedIn: true });
    }
  }

  _onLogout() {
    this.setState( { signedIn: false });
  }
}

render( <App/>, document.getElementById('container'));
