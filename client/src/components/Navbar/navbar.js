import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const Navbar = ({user}) => {

    const items = [
        {
            type: 'navItem',
            icon: 'home',
            text: 'Home',
            link: '/',
            restricted: false
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            text: 'My Profile',
            link: '/user',
            restricted: true
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            text: 'Add Admins',
            link: '/user/register',
            restricted: true
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            text: 'Login',
            link: '/login',
            restricted: false,
            exclude: true
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            text: 'My Reviews',
            link: '/user/user-reviews',
            restricted: true
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            text: 'Add Review',
            link: '/user/add',
            restricted: true
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            text: 'Logout',
            link: '/user/logout',
            restricted: true
        }
    ];

    const element = (item,i) => (
        <div key={i} className={item.type}>
            <Link to={item.link}>
                {item.text}
            </Link>
        </div>
    )

    const showItems = () => (
        user.login ?
            items.map((item,i) => {
                if(user.login.isAuth) {
                    return !item.exclude ? element(item,i) : null;
                } else {
                    return !item.restricted ? element(item,i) : null;
                }
        })
        : null
    )

    return (
        <nav className="navbar navbar-expand-md navbar-dark justify-content-end">
            <Link to='/' className="navbar-brand logo ml-2">Book <span>Shelf</span></Link>
            <div className="ml-auto"></div>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
                <ul className="navbar-nav text-left justify-content-between mr-2">
                    {showItems()}
                </ul>
            </div>
        </nav>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Navbar);
