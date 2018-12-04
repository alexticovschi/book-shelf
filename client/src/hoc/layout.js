import React from 'react';
import Navbar from '../components/Navbar/navbar';

const Layout = (props) => {
    return (
        <div>
            <Navbar/>
            <div className="mt-4">{props.children}</div>
        </div>
    );
};

export default Layout;