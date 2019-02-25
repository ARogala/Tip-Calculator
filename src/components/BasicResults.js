import React from 'react';

class BasicResults extends React.Component {
	render() {
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

export default BasicResults;
