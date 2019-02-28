import React from 'react';
import { connect } from 'react-redux';

class BasicResults extends React.Component {
	renderPreTaxResulst = basicResultsPreTax => {
		return (
			<div>
				<ul>
					<li>Bill Summary</li>
					<ul>
						<li>Pre Tax Bill Amount: {basicResultsPreTax.billAmount}</li>
						<li>Tax: {basicResultsPreTax.taxAmount}</li>
						<li>Tip: {basicResultsPreTax.tipAmount}</li>
						<li>Bill split between: {basicResultsPreTax.numPeople}</li>
						<li>Split Amount: {basicResultsPreTax.splitAmount}</li>
						<li>Total: {basicResultsPreTax.total}</li>
					</ul>
				</ul>
			</div>
		);
	};

	renderPostTaxResults = basicResultsPostTax => {
		return (
			<div>
				<ul>
					<li>Bill Summary</li>
					<ul>
						<li>Post Tax Bill Amount: {basicResultsPostTax.billAmount}</li>
						<li>Tip: {basicResultsPostTax.tipAmount}</li>
						<li>Bill split between: {basicResultsPostTax.numPeople}</li>
						<li>Split Amount: {basicResultsPostTax.splitAmount}</li>
						<li>Total: {basicResultsPostTax.total}</li>
					</ul>
				</ul>
			</div>
		);
	};

	render() {
		//console.log('pre: ', this.props.basicResultsPreTax);
		//console.log('post: ', this.props.basicResultsPostTax);
		//console.log(this.props.prePostTaxChoice);
		//console.log(this.props.displayBasicResults);

		const prePostTaxChoice = this.props.prePostTaxChoice;
		const displayBasicResults = this.props.displayBasicResults;
		const basicResultsPreTax = this.props.basicResultsPreTax;
		const basicResultsPostTax = this.props.basicResultsPostTax;

		if (displayBasicResults && prePostTaxChoice === 'Tip on pre-tax bill amount') {
			return this.renderPreTaxResulst(basicResultsPreTax);
		} else if (displayBasicResults && prePostTaxChoice === 'Tip on post-tax bill amount') {
			return this.renderPostTaxResults(basicResultsPostTax);
		} else {
			return (
				<div>
					<p>Enter bill information and click calculate.</p>
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		prePostTaxChoice: state.prePostTaxChoice,
		basicResultsPreTax: state.basicResultsPreTax,
		basicResultsPostTax: state.basicResultsPostTax,
		displayBasicResults: state.displayBasicResults
	};
};

export default connect(
	mapStateToProps,
	null
)(BasicResults);
