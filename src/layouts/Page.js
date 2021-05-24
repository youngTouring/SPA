import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import AdminPage from '../pages/AdminPage';
import ProductPage from '../pages/ProductPage';
import ProductListPage from '../pages/ProductListPage';
import ErrorPage from '../pages/ErrorPage';
import LoginPage from '../pages/LoginPage';

const Page = () => {
    return (
        <>
        <Switch>
            <Route path = '/' exact component = {HomePage}/>
            <Route path = '/products'  component = {ProductListPage}/>
            <Route path = '/admin'  component = {AdminPage}/>
            <Route path = '/product/:nazwa'  component = {ProductPage}/>
            <Route path = '/contacts'  component = {ContactPage}/>
            <Route path = '/login'  component = {LoginPage}/>
            <Route component = {ErrorPage}/>
        </Switch>
        </>
    );
}
 
export default Page;