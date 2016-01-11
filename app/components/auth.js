import React from 'react';
import SignIn from './signin';
import CreateAccount from './createaccount';

export default class Authentication extends React.Component {
    render() {
      return (
        <div>
          <SignIn onAuthComplete={this.props.onAuthComplete}/>
          <CreateAccount onAuthComplete={this.props.onAuthComplete}/>
        </div>
      );
    }
}
