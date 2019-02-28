import { GET_BASIC_INPUT_PRETAX, GET_BASIC_INPUT_POSTTAX, PRE_POST_TAX_CHOICE } from './types';

export const getBasicInputPreTax = (numPeople, billAmount, taxPercent, tipPercent) => {
	return {
		type: GET_BASIC_INPUT_PRETAX,
		payload: {
			numPeople: numPeople,
			billAmount: billAmount,
			taxPercent: taxPercent,
			tipPercent: tipPercent
		}
	};
};

export const getBasicInputPostTax = (numPeople, billAmount, tipPercent) => {
	return {
		type: GET_BASIC_INPUT_POSTTAX,
		payload: {
			numPeople: numPeople,
			billAmount: billAmount,
			tipPercent: tipPercent
		}
	};
};

export const getPrePostTaxChoice = prePostTax => {
	return {
		type: PRE_POST_TAX_CHOICE,
		payload: prePostTax
	};
};
