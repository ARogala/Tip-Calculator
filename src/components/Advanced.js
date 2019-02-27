import React from 'react';


class Advanced extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			numPeople: '2'
		};
	}
	render() {
		return(
			<div>
				<form>
					<fieldset className="TipCalcForm__fieldset">
						<legend className="TipCalcForm__legend">Enter Bill Amount:</legend>
						<label className="TipCalcForm__label" htmlFor="billAmoutInput">
							Bill Amount
						</label>
						<div className="TipCalcForm__input-div">
							<input
								className="TipCalcForm__input"
								type="number"
								id="billAmoutInput"
								min="0"
								step="0.01"
								value={this.state.billAmout}
								onChange={e => this.handleBillAmountChange(e)}
							/>
						</div>
					</fieldset>
				</form>
			</div>
		);
	}
}

export default Advanced;