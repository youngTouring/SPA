import React from 'react';
import { Route, Switch } from 'react-router-dom';
import img1 from '../images/header1.jpg'
import img2 from '../images/header2.jpg'
import img3 from '../images/header3.jpg'
import '../styles/Header.css';

const Header = () => {
    //losowanie obrazków na stronie:
    // const images = [img1, img2, img3];
    // const index = Math.floor(Math.random() * 3);
    // const img = images[index]
    return (
        <>
        <Switch>
            <Route path = '/contacts' render = {() => (
                <img src = {img2} alt = 'miasto'/>
            )}/>
            <Route path = '/products' render = {() => (
                <img src = {img1} alt = 'miasto'/>
            )}/>
            <Route path = '/admin' render = {() => (
                <img src = {img3} alt = 'miasto'/>
            )}/>
            <Route path = '/' exact render = {() => (
                <img src = {img3} alt = 'miasto'/>
            )}/>
            <Route path = '/' render = {() => (
                <img src = {img1} alt = 'miasto'/>
            )}/>
        </Switch>
        {/* losowanie obrazków na stronie: */}
        {/* <img src = {img} alt = 'header'></img> */}

        </>
    );
}
 
export default Header;