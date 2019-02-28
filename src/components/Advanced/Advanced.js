import React from 'react';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';

import { getAdvancedInput, displayAdvancedResults } from '../../redux/actions';

class Advanced extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			billAmount1: '',
			billAmount2: '',
			billAmount3: '',
			billAmount4: '',
			billAmount5: '',
			name1: '',
			name2: '',
			name3: '',
			name4: '',
			name5: '',
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

	//get state name and set it on input jsx
	setInputValueName(index) {
		if (index === 1) {
			return this.state.name1;
		} else if (index === 2) {
			return this.state.name2;
		} else if (index === 3) {
			return this.state.name3;
		} else if (index === 4) {
			return this.state.name4;
		} else if (index === 5) {
			return this.state.name5;
		}
	}

	//get state bill amount and set it on input jsx
	setInputValueBillAmount(index) {
		if (index === 1) {
			return this.state.billAmount1;
		} else if (index === 2) {
			return this.state.billAmount2;
		} else if (index === 3) {
			return this.state.billAmount3;
		} else if (index === 4) {
			return this.state.billAmount4;
		} else if (index === 5) {
			return this.state.billAmount5;
		}
	}
	//bill amount change
	handleBillAmountChange(e, index) {
		if (index === 1) {
			this.setState({ billAmount1: e.target.value });
		} else if (index === 2) {
			this.setState({ billAmount2: e.target.value });
		} else if (index === 3) {
			this.setState({ billAmount3: e.target.value });
		} else if (index === 4) {
			this.setState({ billAmount4: e.target.value });
		} else if (index === 5) {
			this.setState({ billAmount5: e.target.value });
		}
	}

	//name change
	handleNameChange(e, index) {
		if (index === 1) {
			this.setState({ name1: e.target.value });
		} else if (index === 2) {
			this.setState({ name2: e.target.value });
		} else if (index === 3) {
			this.setState({ name3: e.target.value });
		} else if (index === 4) {
			this.setState({ name4: e.target.value });
		} else if (index === 5) {
			this.setState({ name5: e.target.value });
		}
	}

	handleTaxPercentChange(e) {
		this.setState({ taxPercent: e.target.value });
	}

	handleTipPercentChange(e) {
		this.setState({ tipPercent: e.target.value });
	}

	handleSubmit(e, numPeople) {
		e.preventDefault();
		const getAdvancedInput = this.props.getAdvancedInput;
		const displayAdvancedResults = this.props.displayAdvancedResults;
		const taxPercent = this.state.taxPercent;
		const tipPercent = this.state.tipPercent;
		const name1 = this.state.name1;
		const name2 = this.state.name2;
		const name3 = this.state.name3;
		const name4 = this.state.name4;
		const name5 = this.state.name5;
		const billAmount1 = this.state.billAmount1;
		const billAmount2 = this.state.billAmount2;
		const billAmount3 = this.state.billAmount3;
		const billAmount4 = this.state.billAmount4;
		const billAmount5 = this.state.billAmount5;

		if (
			numPeople === 2 &&
			name1 !== '' &&
			name2 !== '' &&
			billAmount1 !== '' &&
			billAmount2 !== '' &&
			taxPercent !== '' &&
			tipPercent !== ''
		) {
			const names = [name1, name2];
			const billAmounts = [billAmount1, billAmount2];
			getAdvancedInput(numPeople, names, billAmounts, taxPercent, tipPercent);
			this.tauntUser(tipPercent);
			displayAdvancedResults();
		} else if (
			numPeople === 3 &&
			name1 !== '' &&
			name2 !== '' &&
			name3 !== '' &&
			billAmount1 !== '' &&
			billAmount2 !== '' &&
			billAmount3 !== '' &&
			taxPercent !== '' &&
			tipPercent !== ''
		) {
			const names = [name1, name2, name3];
			const billAmounts = [billAmount1, billAmount2, billAmount3];
			getAdvancedInput(numPeople, names, billAmounts, taxPercent, tipPercent);
			this.tauntUser(tipPercent);
			displayAdvancedResults();
		} else if (
			numPeople === 4 &&
			name1 !== '' &&
			name2 !== '' &&
			name3 !== '' &&
			name4 !== '' &&
			billAmount1 !== '' &&
			billAmount2 !== '' &&
			billAmount3 !== '' &&
			billAmount4 !== '' &&
			taxPercent !== '' &&
			tipPercent !== ''
		) {
			const names = [name1, name2, name3, name4];
			const billAmounts = [billAmount1, billAmount2, billAmount3, billAmount4];
			getAdvancedInput(numPeople, names, billAmounts, taxPercent, tipPercent);
			this.tauntUser(tipPercent);
			displayAdvancedResults();
		} else if (
			numPeople === 5 &&
			name1 !== '' &&
			name2 !== '' &&
			name3 !== '' &&
			name4 !== '' &&
			name5 !== '' &&
			billAmount1 !== '' &&
			billAmount2 !== '' &&
			billAmount3 !== '' &&
			billAmount4 !== '' &&
			billAmount5 !== '' &&
			taxPercent !== '' &&
			tipPercent !== ''
		) {
			const names = [name1, name2, name3, name4, name5];
			const billAmounts = [billAmount1, billAmount2, billAmount3, billAmount4, billAmount5];
			getAdvancedInput(numPeople, names, billAmounts, taxPercent, tipPercent);
			this.tauntUser(tipPercent);
			displayAdvancedResults();
		} else {
			this.alertUser();
		}
	}

	resetForm() {
		this.setState({
			billAmount1: '',
			billAmount2: '',
			billAmount3: '',
			billAmount4: '',
			billAmount5: '',
			name1: '',
			name2: '',
			name3: '',
			name4: '',
			name5: '',
			taxPercent: '',
			tipPercent: ''
		});
	}

	renderNameBillAmountInputs(numPeople) {
		const nameBillAmountInput = Array.from({ length: numPeople }).map((_, index) => {
			return (
				<fieldset className="TipCalcForm__fieldset" key={index}>
					<legend className="TipCalcForm__legend">{`Enter Person${index + 1} Name and Bill Amount:`}</legend>

					<label className="TipCalcForm__label-advanced" htmlFor={`nameInput${index + 1}`}>
						{`Person${index + 1} Name`}
					</label>
					<div className="TipCalcForm__input-div">
						<input
							className="TipCalcForm__input"
							type="text"
							id={`nameInput${index + 1}`}
							value={this.setInputValueName(index + 1)}
							onChange={e => this.handleNameChange(e, index + 1)}
						/>
					</div>
					<label className="TipCalcForm__label-advanced" htmlFor={`billAmountInput${index + 1}`}>
						{`Person${index + 1} Bill Amount`}
					</label>
					<div className="TipCalcForm__input-div">
						<input
							className="TipCalcForm__input"
							type="number"
							id={`billAmountInput${index + 1}`}
							min="0"
							step="0.01"
							value={this.setInputValueBillAmount(index + 1)}
							onChange={e => this.handleBillAmountChange(e, index + 1)}
						/>
					</div>
				</fieldset>
			);
		});
		return nameBillAmountInput;
	}

	render() {
		const numPeople = parseInt(this.props.numPeople);
		return (
			<div>
				<form className="TipCalcForm" onSubmit={e => this.handleSubmit(e, numPeople)}>
					{this.renderNameBillAmountInputs(numPeople)}
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
		numPeople: state.numPeople
	};
};

const mapDispatchToProps = {
	getAdvancedInput: getAdvancedInput,
	displayAdvancedResults: displayAdvancedResults
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Advanced);
