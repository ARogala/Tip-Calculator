import React from 'react';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';

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
		};
	}
	render() {
		console.log(this.props.numPeople);
		return (
			<div>
				<form>
					<fieldset className="TipCalcForm__fieldset">
						<legend className="TipCalcForm__legend">Enter Name and Bill Amount:</legend>

						<label className="TipCalcForm__label-advanced" htmlFor="nameInput">
							Name
						</label>
						<div className="TipCalcForm__input-div">
							<input
								className="TipCalcForm__input"
								type="text"
								id="nameInput"
								value={this.state.billAmount}
								onChange={e => this.handleNameChange(e)}
							/>
						</div>
						<label className="TipCalcForm__label-advanced" htmlFor="billAmountInput">
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

export default connect(
	mapStateToProps,
	null
)(Advanced);
