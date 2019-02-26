import React from 'react';
import { connect } from 'react-redux';

import { getBasicInputPreTax, getBasicInputPostTax } from '../redux/actions';

class Basic extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			numPeople: '1',
			billAmout: '',
			taxPercent: '',
			tipPercent: ''
		};
	}

	handleNumPeopleChange(e) {
		this.setState({ numPeople: e.target.value });
	}

	handleBillAmountChange(e) {
		this.setState({ billAmout: e.target.value });
	}

	handleTaxPercentChange(e) {
		this.setState({ taxPercent: e.target.value });
	}

	handleTipPercentChange(e) {
		this.setState({ tipPercent: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		const prePostTaxChoice = this.props.prePostTaxChoice;
		if (prePostTaxChoice === 'Tip on pre-tax bill amount') {
			this.props.getBasicInputPreTax(
				this.state.numPeople,
				this.state.billAmout,
				this.state.taxPercent,
				this.state.tipPercent
			);
		} else if (prePostTaxChoice === 'Tip on post-tax bill amount') {
			this.props.getBasicInputPostTax(this.state.numPeople, this.state.billAmout, this.state.tipPercent);
		}
		// console.log('Num Ppl: ', this.state.numPeople);
		// console.log('Bill Amount: ', this.state.billAmout);
		// console.log('Tax Percent: ', this.state.taxPercent);
		// console.log('Tip Percent: ', this.state.tipPercent);
	}

	resetForm() {
		this.setState({
			numPeople: '1',
			billAmout: '',
			taxPercent: '',
			tipPercent: ''
		});
	}

	render() {
		console.log(this.props.prePostTaxChoice);
		const prePostTaxChoice = this.props.prePostTaxChoice;
		return (
			<div>
				<form className="TipCalcForm" onSubmit={e => this.handleSubmit(e)}>
					<fieldset className="TipCalcForm__fieldset">
						<legend className="TipCalcForm__legend">Choose the number of people splitting the bill:</legend>
						<label className="TipCalcForm__label" htmlFor="numPeopleInput">
							Number of people splitting the bill
						</label>
						<input
							className="TipCalcForm__input"
							type="number"
							id="numPeopleInput"
							min="1"
							value={this.state.numPeople}
							onChange={e => this.handleNumPeopleChange(e)}
						/>
					</fieldset>
					<fieldset className="TipCalcForm__fieldset">
						<legend className="TipCalcForm__legend">Enter Bill Amount:</legend>
						<label className="TipCalcForm__label" htmlFor="billAmoutInput">
							Bill Amount
						</label>
						<input
							className="TipCalcForm__input"
							type="number"
							id="billAmoutInput"
							min="0"
							step="0.01"
							value={this.state.billAmout}
							onChange={e => this.handleBillAmountChange(e)}
						/>
					</fieldset>
					{prePostTaxChoice === 'Tip on pre-tax bill amount' ? (
						<fieldset className="TipCalcForm__fieldset">
							<legend className="TipCalcForm__legend">Enter Tax Percent:</legend>
							<label className="TipCalcForm__label" htmlFor="taxPercentInput">
								Tax Percent
							</label>
							<input
								className="TipCalcForm__input"
								type="number"
								id="taxPercentInput"
								min="0"
								step="0.001"
								value={this.state.taxPercent}
								onChange={e => this.handleTaxPercentChange(e)}
							/>
						</fieldset>
					) : null}

					<fieldset className="TipCalcForm__fieldset">
						<legend className="TipCalcForm__legend">Enter Tip Percent:</legend>
						<label className="TipCalcForm__label" htmlFor="tipPercentInput">
							Tip Percent
						</label>
						<input
							className="TipCalcForm__input"
							type="number"
							id="tipPercentInput"
							min="0"
							step="0.5"
							value={this.state.tipPercent}
							onChange={e => this.handleTipPercentChange(e)}
						/>
					</fieldset>

					<div className="appBtnContainer">
						<button className="appBtn" type="submit" value="Submit">
							Calculate
						</button>
					</div>
					<div className="appBtnContainer">
						<button className="appBtn" type="button" value="Reset" onClick={() => this.resetForm()}>
							Cancel
						</button>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		prePostTaxChoice: state.prePostTaxChoice
	};
};

const mapDispatchToProps = {
	getBasicInputPreTax: getBasicInputPreTax,
	getBasicInputPostTax: getBasicInputPostTax
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Basic);
