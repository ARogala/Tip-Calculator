import React from 'react';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';

import { getBasicInputPreTax, getBasicInputPostTax, displayBasicResults } from '../../redux/actions';

class Basic extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			numPeople: '1',
			billAmount: '',
			taxPercent: '',
			tipPercent: ''
		};
	}

	alertUser = () => {
		toast.error('Please enter all your bill information.', {
			position: toast.POSITION.TOP_CENTER
		});
	};

	cheap = () => {
		toast.info('So did your service suck or are you just cheap!!', {
			position: toast.POSITION.TOP_CENTER
		});
	};

	notBad = () => {
		toast.info('Ok not bad that is a respectable tip!', {
			position: toast.POSITION.TOP_CENTER
		});
	};

	great = () => {
		toast.info('WOW Daddy Warbucks is a big spender!!', {
			position: toast.POSITION.TOP_CENTER
		});
	};

	tauntUser(tipPercent) {
		const percent = parseFloat(tipPercent);
		if (percent <= 15) {
			this.cheap();
		} else if (percent > 15 && percent <= 18) {
			this.notBad();
		} else if (percent > 18) {
			this.great();
		}
	}

	handleNumPeopleChange(e) {
		this.setState({ numPeople: e.target.value });
	}

	handleBillAmountChange(e) {
		this.setState({ billAmount: e.target.value });
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
		const numPeople = this.state.numPeople;
		const billAmount = this.state.billAmount;
		const taxPercent = this.state.taxPercent;
		const tipPercent = this.state.tipPercent;

		if (
			prePostTaxChoice === 'Tip on pre-tax bill amount' &&
			billAmount !== '' &&
			taxPercent !== '' &&
			tipPercent !== ''
		) {
			this.props.getBasicInputPreTax(numPeople, billAmount, taxPercent, tipPercent);
			this.tauntUser(tipPercent);
			this.props.displayBasicResults();
		} else if (prePostTaxChoice === 'Tip on post-tax bill amount' && billAmount !== '' && tipPercent !== '') {
			this.props.getBasicInputPostTax(numPeople, billAmount, tipPercent);
			this.tauntUser(tipPercent);
			this.props.displayBasicResults();
		} else {
			this.alertUser();
		}
		//console.log('Num Ppl: ', numPeople);
		//console.log('Bill Amount: ', billAmount);
		//console.log('Tax Percent: ', taxPercent);
		//console.log('Tip Percent: ', tipPercent);
	}

	resetForm() {
		this.setState({
			numPeople: '1',
			billAmount: '',
			taxPercent: '',
			tipPercent: ''
		});
	}

	render() {
		//console.log(this.props.prePostTaxChoice);
		const prePostTaxChoice = this.props.prePostTaxChoice;
		return (
			<div>
				<form className="TipCalcForm" onSubmit={e => this.handleSubmit(e)}>
					<fieldset className="TipCalcForm__fieldset">
						<legend className="TipCalcForm__legend">Number of people splitting the bill:</legend>
						<label className="TipCalcForm__label" htmlFor="numPeopleInput">
							Number of people splitting the bill
						</label>
						<div className="TipCalcForm__input-div">
							<input
								className="TipCalcForm__input"
								type="number"
								id="numPeopleInput"
								min="1"
								value={this.state.numPeople}
								onChange={e => this.handleNumPeopleChange(e)}
							/>
						</div>
					</fieldset>
					<fieldset className="TipCalcForm__fieldset">
						<legend className="TipCalcForm__legend">Enter Bill Amount:</legend>
						<label className="TipCalcForm__label" htmlFor="billAmountInput">
							Bill Amount
						</label>
						<div className="TipCalcForm__input-div">
							<input
								className="TipCalcForm__input"
								type="number"
								id="billAmountInput"
								min="0"
								step="0.01"
								value={this.state.billAmount}
								onChange={e => this.handleBillAmountChange(e)}
							/>
						</div>
					</fieldset>
					{prePostTaxChoice === 'Tip on pre-tax bill amount' ? (
						<fieldset className="TipCalcForm__fieldset">
							<legend className="TipCalcForm__legend">Enter Tax Percent:</legend>
							<label className="TipCalcForm__label" htmlFor="taxPercentInput">
								Tax Percent
							</label>
							<div className="TipCalcForm__input-div">
								<input
									className="TipCalcForm__input"
									type="number"
									id="taxPercentInput"
									min="0"
									step="0.001"
									value={this.state.taxPercent}
									onChange={e => this.handleTaxPercentChange(e)}
								/>
							</div>
						</fieldset>
					) : null}

					<fieldset className="TipCalcForm__fieldset">
						<legend className="TipCalcForm__legend">Enter Tip Percent:</legend>
						<label className="TipCalcForm__label" htmlFor="tipPercentInput">
							Tip Percent
						</label>
						<div className="TipCalcForm__input-div">
							<input
								className="TipCalcForm__input"
								type="number"
								id="tipPercentInput"
								min="0"
								step="0.5"
								value={this.state.tipPercent}
								onChange={e => this.handleTipPercentChange(e)}
							/>
						</div>
					</fieldset>

					<div className="appBtnContainer">
						<button className="appBtn" type="submit" value="Submit">
							Calculate
						</button>
					</div>
					<div className="appBtnContainer">
						<button className="appBtn" type="button" value="Reset" onClick={() => this.resetForm()}>
							Clear
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
	getBasicInputPostTax: getBasicInputPostTax,
	displayBasicResults: displayBasicResults
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Basic);
