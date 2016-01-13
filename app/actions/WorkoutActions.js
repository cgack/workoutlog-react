import AppDispatcher from '../dispatcher/AppDispatcher';
import WorkoutConstants from '../constants/workoutconstants';

var WorkoutActions = {
  define: function(definition) {
    AppDispatcher.dispatch({
      actionType: WorkoutConstants.WORKOUT_CREATE,
      definition: definition
    });
  }
}

export default WorkoutActions
