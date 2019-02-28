import { combineReducers } from 'redux';
import { prePostTaxChoice, basicResultsPreTax, basicResultsPostTax } from './BasicReducers';
import { numPeople, advancedResults } from './AdvancedReducers';

const initialState = {
	displayResults: false
};

const displayResults = (displayResults = initialState.displayResults, action) => {
	switch (action.type) {
		case 'DISPLAY_RESULTS':
			return true;
		default:
			return false;
	}
};

export default combineReducers({
	prePostTaxChoice: prePostTaxChoice,
	basicResultsPreTax: basicResultsPreTax,
	basicResultsPostTax: basicResultsPostTax,
	displayResults: displayResults,
	//advanced
	numPeople: numPeople,
	advancedResults: advancedResults
});
