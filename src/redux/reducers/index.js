import { combineReducers } from 'redux';
import { prePostTaxChoice, basicResultsPreTax, basicResultsPostTax, displayBasicResults } from './BasicReducers';
import { numPeople, displayAdvancedResults, advancedResults } from './AdvancedReducers';

export default combineReducers({
	prePostTaxChoice: prePostTaxChoice,
	basicResultsPreTax: basicResultsPreTax,
	basicResultsPostTax: basicResultsPostTax,
	displayBasicResults: displayBasicResults,
	//advanced
	numPeople: numPeople,
	displayAdvancedResults: displayAdvancedResults,
	advancedResults: advancedResults
});
