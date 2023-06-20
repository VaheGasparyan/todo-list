import {FC, useState} from "react";

import {ThemeContext} from "customHooks";

import {IThemeContextInterface} from "interfaces/themeContextInterface";
import {getLocalStorageValue, setLocalStorageValue} from "utils/setAndGetLocalStorageValue";
import {themeChange} from "utils/themeChange";

export const ThemeContextProvider:FC<IThemeContextInterface> = ({ children }) => {
    const [theme, setTheme] = useState(getLocalStorageValue());

    const changeTheme = () => {
        const newTheme = themeChange(theme);
        setLocalStorageValue(newTheme);
        setTheme(newTheme);
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            changeTheme
        }}>
            { children }
        </ThemeContext.Provider>
    );
};
