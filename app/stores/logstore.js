import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import LogConstants from '../constants/LogConstants';
import assign from 'object-assign';

var CHANGE_EVENT = 'change';
var _logs = {};

function store(log) {
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _logs[id] = {
    id: id,
    name: log.name,
    result: log.result,
    date: log.date,
    notes: log.notes
  }
}

var LogStore = assign({}, EventEmitter.prototype, {
    getAll: function() {
      return _logs;
    },

    emitChange: function() {
      this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function( callback ) {
      this.removeListener(CHANGE_EVENT, callback);
    }
});


AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case LogConstants.LOG_NEW:
      if (action.log) {
        store(action.log);
        LogStore.emitChange();
      }
      break;
    default:
      //noop
  }
});

export default LogStore;
