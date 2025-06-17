import React, { useContext } from 'react';
import { ThemeContext } from '../provider/ThemeProvider';

const useTheme = () => {
    const themeInfo = useContext(ThemeContext);
    return  themeInfo ;
};

export default useTheme;