import React from 'react';

export default class SignIn extends React.Component {
    render() {
      return (
        <div>
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input className="mdl-textfield__input" type="text" id="username" />
            <label className="mdl-textfield__label" htmlFor="username">Username
            </label>
          </div>
          <div className="mdl-textfield mdl-js-textfield">
            <input type="text" className="mdl-textfield__input" id="password" />
            <label className="mdl-textfield__label"htmlFor="password">Password
            </label>
          </div>
          <div>
            <button
              className="mdl-button mdl-js-button mdl-button--raised"
              id="signIn"
              onClick={this.props.onAuthComplete.bind( null, this._doAuth)}>Sign In</button>
            </div>
        </div>
      );
    }

    _doAuth() {
      return true;
    }
}
