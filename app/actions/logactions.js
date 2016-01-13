import AppDispatcher from '../dispatcher/AppDispatcher';
import LogConstants from '../constants/LogConstants';

var LogActions = {
  // log is an object
  store: function(log) {
    AppDispatcher.dispatch({
      actionType: LogConstants.LOG_NEW,
      log: log
    });
  }
};

export default LogActions;
