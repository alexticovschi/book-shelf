import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUsers, registerUser } from '../../actions';

class Register extends Component {

    state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        error: ''
    }

    componentDidMount() {
        this.props.dispatch(getUsers());
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.user.registered === false) {
            this.setState({ error: 'Something went wrong!' })
        } else {
            this.setState({
                firstname: '',
                lastname: '',
                email: '',
                password: ''
            })
        }
    }

    onInputFirstname = (e) => this.setState({ firstname: e.target.value });
     
    onInputLastname = (e) => this.setState({ lastname: e.target.value });

    onInputEmail = (e) => this.setState({ email: e.target.value });
    
    onInputPassword = (e) => this.setState({ password: e.target.value });
    
    onSubmitForm = (e) => {
        e.preventDefault();
        this.setState({ error: '' });

        this.props.dispatch(registerUser({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password
        }, this.props.user.registered_users));  
    } 

    showUsers = (user) => (
        user.registered_users ?
            user.registered_users.map(item => (
                <tr key={item._id}>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.email}</td>
                </tr>
            ))
        : null
    )

    render() {
        return (
            <div className="rl_container article">
                <div className="container">
                    <div className="row align-items-center justify-content-center mt-5">
                        <div className="col col-sm-12 col-md-10 col-lg-10 col-xl-8">
                            <form onSubmit={this.onSubmitForm}>
                                <h2>Add User</h2>

                                <div className="form_element">
                                    <input 
                                        type="text"
                                        placeholder="Firstname"
                                        value={this.state.firstname}
                                        onChange={this.onInputFirstname}
                                        />
                                </div>
                                <div className="form_element">
                                    <input 
                                        type="text"
                                        placeholder="Lastname"
                                        value={this.state.lastname}
                                        onChange={this.onInputLastname}
                                        />
                                </div>
                                <div className="form_element">
                                    <input 
                                        type="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.onInputEmail}
                                        />
                                </div>
                                <div className="form_element">
                                    <input 
                                        type="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.onInputPassword}
                                        />
                                </div>

                                <button type="submit">Add User</button>
                                <div className="error">
                                    {this.state.error}
                                </div>
                                <div className="error">
                                    {this.state.error ? 'Please fill the form and try again.' : null}
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="container mt-2">
                        <div className="row align-items-center justify-content-center">
                            <div className="col col-md-8 col-lg-8 col-xl-8">
                                <h4>Current Users: </h4>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Firstname</th>
                                            <th>Lastname</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.showUsers(this.props.user)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
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

export default connect(mapStateToProps)(Register);