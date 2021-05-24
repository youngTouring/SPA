import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import AdminPage from '../pages/AdminPage';
import ProductPage from '../pages/ProductPage';
import ErrorPage from '../pages/ErrorPage';

const Page = () => {
    return (
        <>
        <Switch>
            <Route path = '/' exact component = {HomePage}/>
            <Route path = '/products'  component = {ProductPage}/>
            <Route path = '/admin'  component = {AdminPage}/>
            <Route path = '/contacts'  component = {ContactPage}/>
            <Route component = {ErrorPage}/>
        </Switch>
        </>
    );
}
 
export default Page;