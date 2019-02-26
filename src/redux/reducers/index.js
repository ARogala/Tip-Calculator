import { combineReducers } from 'redux';

const initialState = {
	prePostTaxChoice: 'Tip on pre-tax bill amount',
	basicResultsPreTax: { numPeople: 1, billAmount: 0, taxAmount: 0, tipAmount: 0, splitAmount: 0, total: 0 },
	basicResultsPostTax: { numPeople: 1, billAmount: 0, tipAmount: 0, splitAmount: 0, total: 0 }
};

const basicResultsPreTax = (basicResultsPreTax = initialState.basicResultsPreTax, action) => {
	switch (action.type) {
		case 'GET_BASIC_INPUT_PRETAX':
			//get user input
			const numPeople = parseInt(action.payload.numPeople);
			const billAmount = parseFloat(action.payload.billAmount);
			const taxPercent = parseFloat(action.payload.taxPercent);
			const tipPercent = parseFloat(action.payload.tipPercent);
			//calc results
			const taxAmount = billAmount * (taxPercent / 100);
			const tipAmount = billAmount * (tipPercent / 100);
			const total = billAmount + taxAmount + tipAmount;
			const splitAmount = total / numPeople;
			//assign to obj
			const newBasicResultsPreTax = Object.assign({}, basicResultsPreTax, {
				numPeople: numPeople,
				billAmount: billAmount,
				taxAmount: taxAmount,
				tipAmount: tipAmount,
				splitAmount: splitAmount,
				total: total
			});
			console.log('orig: ', basicResultsPreTax);
			console.log('new: ', newBasicResultsPreTax);
			//return new state
			return newBasicResultsPreTax;
		default:
			return basicResultsPreTax;
	}
};

const basicResultsPostTax = (basicResultsPostTax = initialState.basicResultsPostTax, action) => {
	switch (action.type) {
		case 'GET_BASIC_INPUT_POSTTAX':
			//get user input
			const numPeople = parseInt(action.payload.numPeople);
			const billAmount = parseFloat(action.payload.billAmount);
			const tipPercent = parseFloat(action.payload.tipPercent);
			//calc results
			const tipAmount = billAmount * (tipPercent / 100);
			const total = billAmount + tipAmount;
			const splitAmount = total / numPeople;
			//assign to obj
			const newBasicResultsPostTax = Object.assign({}, basicResultsPostTax, {
				numPeople: numPeople,
				billAmount: billAmount,
				tipAmount: tipAmount,
				splitAmount: splitAmount,
				total: total
			});
			console.log('orig: ', basicResultsPostTax);
			console.log('new: ', newBasicResultsPostTax);
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
	basicResultsPostTax: basicResultsPostTax
});
