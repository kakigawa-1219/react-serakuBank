import React from 'react';
import Header from '../header';
import Nav from '../nav';
import Main from '../main';
import Footer from '../footer';

const Home = () => {
    return(
        <div className="container">
        <Header/>
        <Nav/>
        <Main/>
        <Footer/>
        </div>
    )
}

export default Home
