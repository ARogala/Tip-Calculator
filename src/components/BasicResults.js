import React from 'react';
import { connect } from 'react-redux';

class BasicResults extends React.Component {
	render() {
		//console.log('pre: ', this.props.basicResultsPreTax);
		//console.log('post: ', this.props.basicResultsPostTax);
		//console.log(this.props.prePostTaxChoice);

		const prePostTaxChoice = this.props.prePostTaxChoice;
		const basicResultsPreTax = this.props.basicResultsPreTax;
		const basicResultsPostTax = this.props.basicResultsPostTax;

		return (
			<div>
				{prePostTaxChoice === 'Tip on pre-tax bill amount' ? (
					<ul>
						<li>Bill Summary</li>
						<ul>
							<li>Pre Tax Bill Amount: {basicResultsPreTax.billAmount}</li>
							<li>Tax: {basicResultsPreTax.taxAmount}</li>
							<li>Tip: {basicResultsPreTax.tipAmount}</li>
							<li>Split bill between: {basicResultsPreTax.numPeople}</li>
							<li>Split Amount: {basicResultsPreTax.splitAmount}</li>
							<li>Total: {basicResultsPreTax.total}</li>
						</ul>
					</ul>
				) : (
					<ul>
						<li>Bill Summary</li>
						<ul>
							<li>Post Tax Bill Amount: ${basicResultsPostTax.billAmount}</li>
							<li>Tip: ${basicResultsPostTax.tipAmount}</li>
							<li>Split bill between: {basicResultsPostTax.numPeople}</li>
							<li>Split Amount: ${basicResultsPostTax.splitAmount}</li>
							<li>Total: ${basicResultsPostTax.total}</li>
						</ul>
					</ul>
				)}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		prePostTaxChoice: state.prePostTaxChoice,
		basicResultsPreTax: state.basicResultsPreTax,
		basicResultsPostTax: state.basicResultsPostTax
	};
};

export default connect(
	mapStateToProps,
	null
)(BasicResults);
