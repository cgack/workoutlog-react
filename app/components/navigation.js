import React from 'react';

class Navigation extends React.Component {
    constructor() {
      super();
      this._nav = this._nav.bind(this);
    }

    render() {
      return (
  			<ul>
  				<li><a href="#" onClick={this.props.onNav.bind(null, this._nav("define"))}>Define A Workout</a></li>
  				<li><a href="#"onClick={this.props.onNav.bind(null, this._nav("store"))}>Record A Workout</a></li>
  				<li><a href="#"onClick={this.props.onNav.bind(null, this._nav("history"))}>View History</a></li>
  	      <li><a href="#" onClick={this.props.onLogout}>Logout</a></li>
  			</ul>
  		);
    }

    _nav( view ) {
        return view;
    }
}

export default Navigation
