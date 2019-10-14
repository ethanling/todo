import React from 'react';
// Components
import Nav from '../layout/Nav';
import Content from '../layout/Content';
import Footer from '../layout/Footer';

const Main = () => {
    return (
        <div className="App">
            <Nav />
            <Content />
            <Footer />
        </div>
    )
}

export default Main;