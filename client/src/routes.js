import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home/home';
import BookView from './components/Books/book_view';
import Login from './containers/Admin/login';
import Layout from './hoc/layout';

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/books/:id" exact component={BookView}/>
                <Route path="/login" exact component={Login}/>
            </Switch>
        </Layout>
    );
};

export default Routes;