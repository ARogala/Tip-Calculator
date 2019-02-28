import { GET_ADVANCED_INPUT, GET_NUM_PEOPLE } from './types';

export const getAdvancedInput = (numPeople, names, billAmounts, taxPercent, tipPercent) => {
	return {
		type: GET_ADVANCED_INPUT,
		payload: {
			numPeople: numPeople,
			names: names,
			billAmounts: billAmounts,
			taxPercent: taxPercent,
			tipPercent: tipPercent
		}
	};
};

export const getNumPeople = numPeople => {
	return {
		type: GET_NUM_PEOPLE,
		payload: numPeople
	};
};
