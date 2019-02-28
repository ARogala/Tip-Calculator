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
	displayResults: false,
	//advanced
	numPeople: '2',
	advancedResults: { numPeople: 2, individual: [{}], total: [{}] }
};

const displayResults = (displayResults = initialState.displayResults, action) => {
	switch (action.type) {
		case 'DISPLAY_RESULTS':
			return true;
		default:
			return false;
	}
};
const basicResultsPreTax = (basicResultsPreTax = initialState.basicResultsPreTax, action) => {
	switch (action.type) {
		case 'GET_BASIC_INPUT_PRETAX':
			//get user input Dinero currency must be in cents
			const numPeople = parseInt(action.payload.numPeople);
			let billAmount = Dinero({ amount: parseFloat(action.payload.billAmount) * 100 });
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
			let billAmount = Dinero({ amount: parseFloat(action.payload.billAmount) * 100 });
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

//advancedResults: { numPeople: 2, individual: [{}], total: [{}] }
const advancedResults = (advancedResults = initialState.advancedResults, action) => {
	switch (action.type) {
		case 'GET_ADVANCED_INPUT':
			//get user input Dinero currency must be in cents
			const numPeople = parseInt(action.payload.numPeople);
			const names = action.payload.names;
			const billAmounts = action.payload.billAmounts;
			const taxPercent = action.payload.taxPercent;
			const tipPercent = action.payload.tipPercent;
			//calculate results
			const individual = [];
			const total = [];
			let totalBillAmount = Dinero({ amount: 0 });
			let totalTaxAmount = Dinero({ amount: 0 });
			let totalTipAmount = Dinero({ amount: 0 });
			for (let i = 0; i < numPeople; i++) {
				const individualBillAmount = Dinero({ amount: parseFloat(billAmounts[i]) * 100 });
				const individualTipAmount = individualBillAmount.percentage(tipPercent);
				const individualTaxAmount = individualBillAmount.percentage(taxPercent);
				const individualTotalAmount = individualBillAmount.add(individualTaxAmount).add(individualTipAmount);
				individual.push({
					name: names[i],
					bill: individualBillAmount.toFormat('$0,0.00'),
					tip: individualTipAmount.toFormat('$0,0.00'),
					tax: individualTaxAmount.toFormat('$0,0.00'),
					total: individualTotalAmount.toFormat('$0,0.00')
				});

				totalBillAmount = individualBillAmount.add(totalBillAmount);
				totalTaxAmount = individualTaxAmount.add(totalTaxAmount);
				totalTipAmount = individualTipAmount.add(totalTipAmount);
			}
			const grandTotalAmount = totalBillAmount.add(totalTaxAmount).add(totalTipAmount);
			total.push({
				totalBill: totalBillAmount.toFormat('$0,0.00'),
				totalTax: totalTaxAmount.toFormat('$0,0.00'),
				totalTip: totalTipAmount.toFormat('$0,0.00'),
				grandTotal: grandTotalAmount.toFormat('$0,0.00')
			});

			//assign results to obj
			const newAdvancedResults = Object.assign({}, advancedResults, {
				numPeople: numPeople,
				individual: individual,
				total: total
			});
			console.log('orig: ', advancedResults);
			console.log('new: ', newAdvancedResults);
			//return new state
			return newAdvancedResults;
		default:
			return advancedResults;
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

const numPeople = (numPeople = initialState.numPeople, action) => {
	switch (action.type) {
		case 'GET_NUM_PEOPLE':
			return action.payload;
		default:
			return numPeople;
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
