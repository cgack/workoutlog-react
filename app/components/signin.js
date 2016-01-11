import React from 'react';

export default class SignIn extends React.Component {
    render() {
      return (
        <div>
          <label htmlFor="username">Username
            <input type="text" id="username" />
          </label>
          <label htmlFor="password">Password
            <input type="text" id="password" />
          </label>
          <button id="signIn" onClick={this.props.onAuthComplete.bind( null, this._doAuth)}>Sign In</button>
        </div>
      );
    }

    _doAuth() {
      return true;
    }
}
