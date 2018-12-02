import React from 'react';
import Navbar from '../components/Header/Sidenav/navbar';

const Layout = (props) => {
    return (
        <div>
            <Navbar/>
            <div className="mt-5">{props.children}</div>
        </div>
    );
};

export default Layout;