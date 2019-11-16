import { combineReducers } from 'redux';
import courseModalReducer from '../modal/reducer';

export const rootReducer = combineReducers({
  courseModalState: courseModalReducer,
});
