import React from 'react';

class Basic extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			prePostTax: '--Please Choose an Option--',
			numPeople: 1,
			billAmout: 0,
			taxPercent: 0,
			tipPercent: 0
		};
	}

	handlePrePostTaxChange(e) {
		this.setState({ prePostTax: e.target.value });
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
		console.log(this.state.prePostTax);
		console.log('Num Ppl: ', this.state.numPeople);
		console.log('Bill Amount: ', this.state.billAmout);
		console.log('Tax Percent: ', this.state.taxPercent);
		console.log('Tip Percent: ', this.state.tipPercent);
	}

	resetForm() {
		this.setState({
			prePostTax: '--Please Choose an Option--',
			numPeople: 1,
			billAmout: 0,
			taxPercent: 0,
			tipPercent: 0
		});
	}

	render() {
		return (
			<div>
				<p>
					The basic tip calculator will split the bill evenly between the number of people selected on a Pre
					or Post tax basis. Take care to enter the proper bill amount. (Pre or Post tax amount)
				</p>
				<form className="TipCalcForm" onSubmit={e => this.handleSubmit(e)}>
					<fieldset className="TipCalcForm__fieldset">
						<legend className="TipCalcForm__legend">Tip on pre or post tax bill amount?</legend>
						<label className="TipCalcForm__label" htmlFor="prePostTaxSelect">
							Choose:
						</label>
						<div className="TipCalcForm__select-div">
							<select
								className="TipCalcForm__select"
								id="prePostTaxSelect"
								value={this.state.prePostTax}
								onChange={e => this.handlePrePostTaxChange(e)}
							>
								<option value="--Please Choose an Option--" disabled>
									--Please Choose an Option--
								</option>
								<option value="Tip on pre-tax bill amount">Tip on pre-tax bill amount</option>
								<option value="Tip on post-tax bill amount">Tip on post-tax bill amount</option>
							</select>
						</div>
					</fieldset>
					<fieldset className="TipCalcForm__fieldset">
						<legend className="TipCalcForm__legend">Choose number of people splitting the bill</legend>
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
						<label className="TipCalcForm__label" htmlFor="billAmoutInput">Bill Amount</label>
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
					<fieldset className="TipCalcForm__fieldset">
						<legend className="TipCalcForm__legend">Enter Tax Percent:</legend>
						<label className="TipCalcForm__label" htmlFor="taxPercentInput">Tax Percent</label>
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

					<fieldset className="TipCalcForm__fieldset">
						<legend className="TipCalcForm__legend">Enter Tip Percent:</legend>
						<label className="TipCalcForm__label" htmlFor="tipPercentInput">Tip Percent</label>
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

export default Basic;
