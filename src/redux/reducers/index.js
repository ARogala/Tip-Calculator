import { combineReducers } from 'redux';

const initialState = {
	tip: 4,
	prePostTaxChoice: 'Tip on pre-tax bill amount'
};

const calcTip = (tip = initialState.tip, action) => {
	return tip;
};

const prePostTaxChoice = (prePostTaxChoice = initialState.prePostTaxChoice, action) => {
	switch (action.type) {
		case 'PRE_POST_TAX_CHOICE':
			return action.payload;
		default:
			return prePostTaxChoice;
	}
};

export default combineReducers({
	calcTip: calcTip,
	prePostTaxChoice: prePostTaxChoice
});
