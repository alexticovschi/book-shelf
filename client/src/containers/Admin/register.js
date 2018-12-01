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

    onInputEmail = (event) => {

    }
    
    onInputPassword = (event) => {
        
    } 

    onInputFirstname = (event) => {
        
    }  
     
    onInputLastname = (event) => {
        
    }

    onSubmitForm = (event) => {
        event.preventDefault();
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
        console.log(this.props);
        return (
            <div className="rl_container">
                <form onSubmit={this.onSubmitForm}>
                    <h2>Add User</h2>

                </form>
                <div className="current_users">
                    <h4>Current Users: </h4>
                    <table>
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
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Register);