import { combineReducers } from 'redux';
import courseModalReducer from '../modal/reducer';
import coursesReducer from '../courses/reducers';

export const rootReducer = combineReducers({
  courseModalState: courseModalReducer,
  coursesState: coursesReducer,
});
