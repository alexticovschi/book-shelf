import React from 'react';
import axios from 'axios'

const Logout = (props) => {
    axios.get(`/api/logout`)
         .then(req => setTimeout(() => props.history.push('/'),2000))

    return (
        <div className="logout_container">
            <img className="logout_img" src="/images/cats.jpg" width="300" alt="logout"/>
        </div>
    )
}

export default Logout;
