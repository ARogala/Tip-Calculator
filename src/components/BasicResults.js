import React from 'react';
import { connect } from 'react-redux';

class BasicResults extends React.Component {
	render() {
		console.log('pre: ', this.props.basicResultsPreTax);
		console.log('post: ', this.props.basicResultsPostTax);
		console.log(this.props.prePostTaxChoice);
		const prePostTaxChoice = this.props.prePostTaxChoice;
		return(
			<div>
				<ul>
					<li>Bill Summary</li>
					<ul>
						<li>Bill Amount: </li>
						<li>Tax: </li>
						<li>Tip: </li>
						<li>Split Amount: </li>
						<li>Total: </li>
					</ul>
				</ul>
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

export default connect(mapStateToProps,null)(BasicResults);
