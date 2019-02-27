import React from 'react';
import { connect } from 'react-redux';

import { getPrePostTaxChoice } from '../redux/actions';

class SettingsAdvanced extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			numPeople: '2'
		};
	}

	handleNumPeopleChange(e) {
		this.setState({ numPeople: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.getPrePostTaxChoice(this.state.prePostTax);
	}

	resetForm() {
		this.setState({
			numPeople: '2'
		});
	}

	render() {
		return (
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
							min="2"
							max="5"
							value={this.state.numPeople}
							onChange={e => this.handleNumPeopleChange(e)}
						/>
					</div>
				</fieldset>
				<div className="appBtnContainer">
					<button className="appBtn" type="submit" value="Submit">
						Submit
					</button>
				</div>
			</form>
		);
	}
}

const mapDispatchToProps = {
	getPrePostTaxChoice: getPrePostTaxChoice
};

export default connect(
	null,
	mapDispatchToProps
)(SettingsAdvanced);
