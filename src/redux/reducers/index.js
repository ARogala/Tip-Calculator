import { combineReducers } from 'redux';

const initialState = {
	tip: 4,
	prePostTaxChoice: 'Tip on pre-tax bill amount'
};

const calcTip = (tip = initialState.tip, action) => {
	return tip;
};

const setPrePostTaxChoice = (prePostTaxChoice = initialState.prePostTaxChoice, action) => {
	switch (action.type) {
		case 'PRE_POST_TAX_CHOICE':
			console.log(action.payload);
			return action.payload;
		default:
			console.log(prePostTaxChoice);
			return prePostTaxChoice;
	}
};

export default combineReducers({
	calcTip: calcTip,
	setPrePostTaxChoice: setPrePostTaxChoice
});
