import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loginUser } from '../../actions';

class Login extends Component {

	state = {
		email: '',
		password: '',
		error: '',
		success: false
	}

	submitForm = (e) => {
		e.preventDefault();
		this.props.dispatch(loginUser(this.state));
	}

	static getDerivedStateFromProps(nextProps){
		if (nextProps.user.login && nextProps.user.login.isAuth) {
			nextProps.history.push('/user');
		} 
		return null;
	}

	render() {
		let user = this.props.user;
		return (
			<div className="rl_container mt-5">
				<h2 className="text-center lg mt-5">Login</h2>
				<div className="row justify-content-center align-items-center">
    				<div className="col col-sm-8 col-md-8 col-lg-8 col-xl-8 mt-2">
						<form onSubmit={this.submitForm}>
							<div className="form_element">
								<input 
									onChange={(e) => this.setState({ email: e.target.value })}
									type="email"
									placeholder="Enter your mail"
									value={this.state.email}
								/>
							</div>

							<div className="form_element">
								<input 
									onChange={(e) => this.setState({ password: e.target.value })}
									type="password"
									placeholder="Enter your password"
									value={this.state.password}
								/>
							</div>											
							<button type="submit">Log In</button>

							<div className="error">
								{ user.login ? <div>{user.login.message}</div> : null }
							</div>

						</form>
					</div>
				</div>
			</div>

		)
	}
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Login);
