export const getPrePostTaxChoice = prePostTax => {
	return {
		type: 'PRE_POST_TAX_CHOICE',
		payload: prePostTax
	};
};

export const displayResults = () => {
	return {
		type: 'DISPLAY_RESULTS'
	};
};

export const getBasicInputPreTax = (numPeople, billAmount, taxPercent, tipPercent) => {
	return {
		type: 'GET_BASIC_INPUT_PRETAX',
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
		type: 'GET_BASIC_INPUT_POSTTAX',
		payload: {
			numPeople: numPeople,
			billAmount: billAmount,
			tipPercent: tipPercent
		}
	};
};
