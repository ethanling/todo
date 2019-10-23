import React, { useState, useEffect } from 'react';

// This context will change the theme of the app based on the time of day for the user
// For now, just changes the background gradient

const themes = {
    dawn: {
        backgroundImage:
            "linear-gradient(179.4deg, rgba(255,145,113,1) -16.9%, rgba(130,156,255,1) 119.9%)"
    },
    day: {
        backgroundImage:
            "linear-gradient( 179.4deg,  rgba(111,214,255,1) -16.9%, rgba(75,68,255,1)119.9% )"
    },
    dusk: {
        backgroundImage:
            "linear-gradient( 179.4deg,  rgba(12,20,69,1) -16.9%, rgba(71,30,84,1) 119.9% )"
    },
    night: {
        backgroundImage:
            "linear-gradient( 179.4deg,  rgba(0,17,24,1) -16.9%, rgba(79,77,136,1)119.9% )"
    }
};

const initialState = {
    time: '',
    theme: themes.day,
};

export const ThemeContext = React.createContext(initialState);

const ThemeProvider = ({ children }) => {
    const [time, setTime] = useState('');

    useEffect(time => {
        // Set theme based on time of day
        // Dawn 6-9, day 9-17, Dusk 17-20, Night 20 - 6
        const currentHour = new Date().getHours();
        if (currentHour < 6 || currentHour > 20) {
            setTime('night');
        } else if (currentHour >= 6 && currentHour <= 9) {
            setTime('dawn');
        } else if (currentHour > 9 && currentHour <= 17) {
            setTime('day');
        } else if (currentHour > 17 && currentHour <= 20) {
            setTime('dusk')
        }
    }, [time])

    const theme = time ? (themes[time]) : ('none');

    return (
        <ThemeContext.Provider value={{ theme }}>
            { children }
        </ThemeContext.Provider>
    )
};

export default ThemeProvider;