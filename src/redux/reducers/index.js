import { combineReducers } from 'redux';

const initialState = {
	tip: 4
};

const calcTip = (tip = initialState.tip, action) => {
	return tip;
}

export default combineReducers({
	calcTip: calcTip
});
