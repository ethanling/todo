import React, { useContext } from 'react';
// Theme
import { ThemeContext } from '../../context/ThemeProvider';
// Components
import Nav from '../layout/Nav';
import Content from '../layout/Content';
import Footer from '../layout/Footer';

const Main = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div 
            className="App"
            style={{
                backgroundImage: theme.backgroundImage   
            }}
        >
            <Nav />
            <Content />
            <Footer />
        </div>
    )
}

export default Main;