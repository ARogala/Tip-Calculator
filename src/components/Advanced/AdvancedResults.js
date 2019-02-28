import React from 'react';
import { connect } from 'react-redux';

class AdvancedResults extends React.Component {
	render() {
		console.log(this.props.advancedResults);
		return (
			<div>
				<p>Enter bill information and click calculate.</p>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { advancedResults: state.advancedResults };
};

export default connect(
	mapStateToProps,
	null
)(AdvancedResults);
