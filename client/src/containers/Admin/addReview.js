import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addReview, clearNewBook } from '../../actions';

class AddReview extends Component {

	state = {
		formdata: {
			name: '',
			author: '',
			review: '',
			pages: '',
			rating: '',
			price: ''
		}
	}

	componentWillUnmount() {
		this.props.dispatch(clearNewBook());
	}
	

	onShowNewBook = (book) => (
		book.post ?
			<div className="conf_link">
				<Link to={`/books/${book.bookId}`}>Review added! Click the link to see the post</Link>
			</div>
		: null
	);

	onHandleInput = (e, name) => {
		const newFormdata = {
			...this.state.formdata
		}
		newFormdata[name] = e.target.value;

		this.setState({ formdata: newFormdata })
	}

	onSubmitForm = (e) => {
		e.preventDefault();

		this.props.dispatch(addReview({
			...this.state.formdata,
			ownerId: this.props.user.login.id
		}));
	}

	render() {
		let formdata = this.state;
		return (
			<div className="rl_container article">
				<form onSubmit={this.onSubmitForm}>
					<h2>Add a review</h2>

					<div className="form_element">
						<input 
							type="text"
							placeholder="Enter book name"
							value={formdata.name}
							onChange={(e) => this.onHandleInput(e,'name')}
						/>
					</div>

					<div className="form_element">
						<input 
							type="text"
							placeholder="Enter author"
							value={formdata.author}
							onChange={(e) => this.onHandleInput(e,'author')}
						/>
					</div>		

					<textarea 
						placeholder="Add review"
						value={formdata.review}
						onChange={(e) => this.onHandleInput(e,'review')}	
					/>

					<div className="form_element">
						<input 
							type="number"
							placeholder="Enter pages"
							value={formdata.pages}
							onChange={(e) => this.onHandleInput(e,'pages')}
						/>
					</div>	

					<div className="form_element">
						<select 
							value={formdata.rating}
							onChange={(e) => this.onHandleInput(e,'rating')}
							>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
					</div>

					<div className="form_element">
						<input 
							type="number"
							placeholder="Enter price"
							value={formdata.price}
							onChange={(e) => this.onHandleInput(e,'price')}
						/>
					</div>	

					<button type="submit">Add Review</button>	
					{this.props.books.newbook ? this.onShowNewBook(this.props.books.newbook) : null}
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		books: state.books
	}
}

export default connect(mapStateToProps)(AddReview);