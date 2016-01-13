import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import WorkoutConstants from '../constants/workoutconstants';
import assign from 'object-assign';

var CHANGE_EVENT = 'change';
var _workouts = {};

function define(definition) {
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _workouts[id] = {
    id: id,
    name: definition.name,
    type: definition.type,
    description: definition.description
  }
}

var WorkoutStore = assign({}, EventEmitter.prototype, {
    getAll: function() {
      return _workouts;
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
    case WorkoutConstants.WORKOUT_CREATE:
      if (action.definition) {
        define(action.definition);
        WorkoutStore.emitChange();
      }
      break;
    default:
      // noop
  }
});

export default WorkoutStore;
