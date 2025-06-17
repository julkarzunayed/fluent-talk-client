import React, { createContext, useState } from 'react';
export const ThemeContext = createContext()
const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false);
    const themeInfo = {
        isDark,
        setIsDark,
    }
    return (
        <ThemeContext value={themeInfo}>
            {children}
        </ThemeContext>
    );
};

export default ThemeProvider;