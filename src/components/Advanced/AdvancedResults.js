import React from 'react';
import { connect } from 'react-redux';

class AdvancedResults extends React.Component {
	renderAdvancedResults(advancedResults) {
		const individual = advancedResults.individual.map((person, index) => {
			return (
				<ul className="results__billsummary" key={index}>
					<li className="results__title">{person.name} Summary</li>
					<ul className="results__details">
						<li>Bill: {person.bill}</li>
						<li>Tax: {person.tax}</li>
						<li>Tip: {person.tip}</li>
						<li>Total: {person.total}</li>
					</ul>
				</ul>
			);
		});
		return (
			<div className="results">
				<ul className="results__billsummary">
					<li className="results__title">Bill Summary</li>
					<ul className="results__details">
						<li>Bill: {advancedResults.total[0].totalBill}</li>
						<li>Tax: {advancedResults.total[0].totalTax}</li>
						<li>Tip: {advancedResults.total[0].totalTip}</li>
						<li>Total: {advancedResults.total[0].grandTotal}</li>
					</ul>
				</ul>
				{individual}
			</div>
		);
	}

	render() {
		//console.log(this.props.advancedResults);
		//console.log(this.props.displayAdvancedResults);
		if (this.props.displayAdvancedResults) {
			return this.renderAdvancedResults(this.props.advancedResults);
		} else {
			return (
				<div className="results">
					<p>Enter bill information and click calculate.</p>
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		advancedResults: state.advancedResults,
		displayAdvancedResults: state.displayAdvancedResults
	};
};

export default connect(
	mapStateToProps,
	null
)(AdvancedResults);
