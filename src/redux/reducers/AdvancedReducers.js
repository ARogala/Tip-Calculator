import Dinero from 'dinero.js'; //for currency calc
import { GET_NUM_PEOPLE, GET_ADVANCED_INPUT } from '../actions/types';

//set Dinero globals
Dinero.defaultCurrency = 'USD';
Dinero.defaultPrecision = 2;
Dinero.globalLocale = 'en-US';

const initialState = {
	numPeople: '2',
	advancedResults: { numPeople: 2, individual: [{}], total: [{}] }
};

export const numPeople = (numPeople = initialState.numPeople, action) => {
	switch (action.type) {
		case GET_NUM_PEOPLE:
			return action.payload;
		default:
			return numPeople;
	}
};

//advancedResults: { numPeople: 2, individual: [{}], total: [{}] }
export const advancedResults = (advancedResults = initialState.advancedResults, action) => {
	switch (action.type) {
		case GET_ADVANCED_INPUT:
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
			//console.log('orig: ', advancedResults);
			//console.log('new: ', newAdvancedResults);
			//return new state
			return newAdvancedResults;
		default:
			return advancedResults;
	}
};