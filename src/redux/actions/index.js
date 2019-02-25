export const getBasicInput = (numPeople, billAmount, taxPercent, tipPercent) => {
	return {
		type: 'GET_BASIC_INPUT',
		payload: {
			numPeople: numPeople,
			billAmount: billAmount,
			taxPercent: taxPercent,
			tipPercent: tipPercent
		}
	};
};
