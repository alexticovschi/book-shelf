import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBookReview, clearReview, deleteReview, updateBookReview } from '../../actions';

class EditReview extends PureComponent {

	state = {
		formdata: {}
	}

	onHandleInput = (e, name) => {
		const newFormdata = {
			...this.state.formdata
        }
		newFormdata[name] = e.target.value;

		this.setState({ formdata: newFormdata })
	}

	onSubmitForm = (e) => {
		e.preventDefault();
        
        this.props.dispatch(updateBookReview(this.state.formdata));
    }

    componentDidMount(){
        this.props.dispatch(getBookReview(this.props.match.params.id));
    }

    componentWillUnmount(){
        this.props.dispatch(clearReview());
    }

    // static getDerivedStateFromProps(nextProps) {
    //     const reviewdata = { ...nextProps.books.book };
    //     return { formdata: reviewdata }
    // }

    componentWillReceiveProps(nextProps) {
        const reviewdata = { ...nextProps.books.book };
        this.setState({ formdata: reviewdata })
    }

	render() {
        const formdata = this.state.formdata;
        const book = this.props.books.book;
        const updated_review = this.props.books.updated_review;
		return (
			<div className="rl_container article">
                { 
                    updated_review ?   
                        <div className="edit_confirm">
                            Review Updated, <Link to={`/books/${book._id}`}>Click here to view the Post!</Link>
                        </div>
                    : null
                }
				<form onSubmit={this.onSubmitForm}>
					<h2>Edit review</h2>

					<div className="form_element">
						<input 
							type="text"
							placeholder="Enter book name"
							value={formdata.name || ''}
							onChange={(e) => this.onHandleInput(e,'name')}
						/>
					</div>

					<div className="form_element">
						<input 
							type="text"
							placeholder="Enter author"
							value={formdata.author || ''}
							onChange={(e) => this.onHandleInput(e,'author')}
						/>
					</div>		

					<textarea 
						placeholder="Add review"
						value={formdata.review || ''}
						onChange={(e) => this.onHandleInput(e,'review')}	
					/>

					<div className="form_element">
						<input 
							type="number"
							placeholder="Enter pages"
							value={formdata.pages || ''}
							onChange={(e) => this.onHandleInput(e,'pages')}
						/>
					</div>	

					<div className="form_element">
						<select 
							value={formdata.rating || ''}
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
							value={formdata.price || ''}
							onChange={(e) => this.onHandleInput(e,'price')}
						/>
					</div>	

					<button type="submit">Edit Review</button>	
                    <div className="delete_post">
                        <div className="button">Delete review</div>
                    </div>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	// console.log(state);
	return {
		books: state.books
	}
}

export default connect(mapStateToProps)(EditReview);