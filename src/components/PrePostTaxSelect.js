import React from 'react';

class PrePostTaxSelect extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			prePostTax: '--Please Choose an Option--'
		};
	}

	handlePrePostTaxChange(e) {
		this.setState({ prePostTax: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state.prePostTax);
	}

	resetForm() {
		this.setState({
			prePostTax: '--Please Choose an Option--'
		});
	}

	render() {
		return (
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
				<div className="appBtnContainer">
					<button className="appBtn" type="submit" value="Submit">
						Submit
					</button>
				</div>
				<div className="appBtnContainer">
					<button className="appBtn" type="button" value="Reset" onClick={() => this.resetForm()}>
						Cancel
					</button>
				</div>
			</form>
		);
	}
}

export default PrePostTaxSelect;
