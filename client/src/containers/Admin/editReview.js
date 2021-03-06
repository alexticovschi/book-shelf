import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBookReview, clearReview, deleteBookReview, updateBookReview } from '../../actions';

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

    deleteReview = () => {
        this.props.dispatch(deleteBookReview(this.props.match.params.id));
    }

    redirectUser = () => {
        setTimeout(() => this.props.history.push('/user/user-reviews'), 1000);
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
        console.log(nextProps)
        const reviewdata = { ...nextProps.books.book };
        this.setState({ formdata: reviewdata })
    }

	render() {
        const formdata = this.state.formdata;
        const book = this.props.books.book;
        const updated_review = this.props.books.updated_review;
        const review_deleted = this.props.books.review_deleted;
		return (
			<div className="rl_container article">
				<div className="container">
					<div className="row align-items-center justify-content-center">
						<div className="col col-sm-12 col-md-10 col-lg-8 col-xl-8">
							{ 
								updated_review ?   
									<div className="edit_confirm">
										Review Updated, <Link to={`/books/${book._id}`}>Click here to view the Post!</Link>
									</div>
								: null
							}
							{
								review_deleted ?
									<div className="red_tag">
										Review Deleted!
										{this.redirectUser()}
									</div>
								: null
							}
							<form onSubmit={this.onSubmitForm} className="mt-2">
								<h2>Edit Review</h2>

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
									rows="6"
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
										style={{padding: "16px 0px"}}
										value={formdata.rating || ''}
										onChange={(e) => this.onHandleInput(e,'rating')}
									>
										<option value="0">Rate this Book</option>
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
									<div className="button" onClick={this.deleteReview}>Delete review</div>
								</div>
							</form>
						</div>
					</div>	
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		books: state.books
	}
}

export default connect(mapStateToProps)(EditReview);