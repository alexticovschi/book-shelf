import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserPosts } from '../../actions';
import moment from 'moment-js';
import { Link } from 'react-router-dom';


class UserPosts extends Component {

	componentDidMount(){
		this.props.dispatch(getUserPosts(this.props.user.login.id));
	}

	showUserPosts = (user) => (
		user.user_posts ? 
			user.user_posts.map(item => (
				<tr key={item._id}>
					<td><Link to={`/user/edit-post/${item._id}`}>{item.name}</Link></td>
					<td>{item.author}</td>
					<td>{moment(item.createdAt).format('MM/DD/YY')}</td>	
				</tr>
			))
		: null
	)

	render() {
		let user = this.props.user;
		return (
			<div className="container mb-5">
				<h3 className="title mb-4">Your Reviews:</h3>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Author</th>
							<th>Date</th>
						</tr>
					</thead>
					<tbody>
						{this.showUserPosts(user)}
					</tbody>
				</table>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(UserPosts);