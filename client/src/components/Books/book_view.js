import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBookWithReviewer } from '../../actions';


class BookView extends Component {

	componentDidMount(){
		this.props.dispatch(getBookWithReviewer(this.props.match.params.id));
	}

	render() {
		console.log(this.props)
		return (
			<div>
				Book View
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		books: state.books
	}
}

export default connect(mapStateToProps)(BookView);