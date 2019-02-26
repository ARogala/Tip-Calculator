import { combineReducers } from 'redux';
import Dinero from 'dinero.js'; //for currency calc

//set Dinero globals
Dinero.defaultCurrency = 'USD';
Dinero.defaultPrecision = 2;
Dinero.globalLocale = 'en-US';

const initialState = {
	prePostTaxChoice: 'Tip on pre-tax bill amount',
	basicResultsPreTax: { numPeople: 1, billAmount: 0, taxAmount: 0, tipAmount: 0, splitAmount: 0, total: 0 },
	basicResultsPostTax: { numPeople: 1, billAmount: 0, tipAmount: 0, splitAmount: 0, total: 0 },
	displayResults: false
};

const displayResults = (displayResults = initialState.displayResults, action) => {
	switch (action.type) {
		case 'DISPLAY_RESULTS': 
			return true
		default:
			return false
	}
}
const basicResultsPreTax = (basicResultsPreTax = initialState.basicResultsPreTax, action) => {
	switch (action.type) {
		case 'GET_BASIC_INPUT_PRETAX':
			//get user input Dinero currency must be in cents
			const numPeople = parseInt(action.payload.numPeople);
			let billAmount = Dinero({ amount: parseFloat(action.payload.billAmount)*100 });
			const taxPercent = parseFloat(action.payload.taxPercent);
			const tipPercent = parseFloat(action.payload.tipPercent);
			//calc results
			let taxAmount = billAmount.percentage(taxPercent);
			let tipAmount = billAmount.percentage(tipPercent);
			let total = billAmount.add(taxAmount).add(tipAmount);
			let splitAmount = total.divide(numPeople);
			//format results
			billAmount = billAmount.toFormat('$0,0.00');
			taxAmount = taxAmount.toFormat('$0,0.00');
			tipAmount = tipAmount.toFormat('$0,0.00');
			total = total.toFormat('$0,0.00');
			splitAmount = splitAmount.toFormat('$0,0.00');

			//assign to obj
			const newBasicResultsPreTax = Object.assign({}, basicResultsPreTax, {
				numPeople: numPeople,
				billAmount: billAmount,
				taxAmount: taxAmount,
				tipAmount: tipAmount,
				splitAmount: splitAmount,
				total: total
			});
			//console.log('orig: ', basicResultsPreTax);
			//console.log('new: ', newBasicResultsPreTax);
			//return new state
			return newBasicResultsPreTax;
		default:
			return basicResultsPreTax;
	}
};

const basicResultsPostTax = (basicResultsPostTax = initialState.basicResultsPostTax, action) => {
	switch (action.type) {
		case 'GET_BASIC_INPUT_POSTTAX':
			//get user input Dinero currency must be in cents
			const numPeople = parseInt(action.payload.numPeople);
			let billAmount = Dinero({ amount: parseFloat(action.payload.billAmount)*100 });
			const tipPercent = parseFloat(action.payload.tipPercent);
			//calc results
			let tipAmount = billAmount.percentage(tipPercent);
			let total = billAmount.add(tipAmount);
			let splitAmount = total.divide(numPeople);
			//format results
			billAmount = billAmount.toFormat('$0,0.00');
			tipAmount = tipAmount.toFormat('$0,0.00');
			total = total.toFormat('$0,0.00');
			splitAmount = splitAmount.toFormat('$0,0.00');

			//assign to obj
			const newBasicResultsPostTax = Object.assign({}, basicResultsPostTax, {
				numPeople: numPeople,
				billAmount: billAmount,
				tipAmount: tipAmount,
				splitAmount: splitAmount,
				total: total
			});
			//console.log('orig: ', basicResultsPostTax);
			//console.log('new: ', newBasicResultsPostTax);
			//return new state
			return newBasicResultsPostTax;
		default:
			return basicResultsPostTax;
	}
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
	prePostTaxChoice: prePostTaxChoice,
	basicResultsPreTax: basicResultsPreTax,
	basicResultsPostTax: basicResultsPostTax,
	displayResults: displayResults
});
