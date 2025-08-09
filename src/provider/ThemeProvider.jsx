import React, { createContext, useEffect, useState } from 'react';
export const ThemeContext = createContext()
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        const localTheme = storedTheme || 'light';
        document.documentElement.setAttribute('data-theme', localTheme);
        setTheme(localTheme);
    }, [])

    const themeChanger = (e) => {
        e.preventDefault();
        const currentTheme = document.documentElement.getAttribute("data-theme")
        const newTheme = currentTheme === 'light' ? 'dark' : 'light'
        document.documentElement.setAttribute("data-theme", newTheme);
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }
    console.log(theme)

    const themeInfo = {
        theme,
        themeChanger
    }
    return (
        <ThemeContext value={themeInfo}>
            {children}
        </ThemeContext>
    );
};

export default ThemeProvider;