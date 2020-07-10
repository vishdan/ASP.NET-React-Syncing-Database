import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import View from './components/View';
import AddData from './components/AddData_Scanner';

import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/view' component={View} />
        <Route path='/add' component={AddData} />
    </Layout>
);
