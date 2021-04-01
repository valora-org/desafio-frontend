import { combineReducers } from 'redux';
import wallet from './wallet/reducer';
import chart from './chart/reducer';
import history from './history/reducer';

export default combineReducers({
	wallet,
	chart,
	history
});