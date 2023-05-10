import {useState, createContext, useEffect} from "react";
import {themeChange} from "utils/themeChange";

import Todo from "todo";

import './App.css';
import {getLocalStorageValue, setLocalStorageValue} from "./utils/setAndGetLocalStorageValue";

export const ThemeContext = createContext({
    theme: 'light',
    changeTheme: () => {},
});

const App = () => {
    const [theme, setTheme] = useState(getLocalStorageValue());

    const changeTheme = () => {
        const newTheme = themeChange(theme);
        setLocalStorageValue(newTheme);
        setTheme(newTheme);
    }

  return (
    <div className={theme === 'light' ? 'App light' : 'App dark'}>
        <ThemeContext.Provider value={{
            theme,
            changeTheme
        }}>
            <Todo />
        </ThemeContext.Provider>
    </div>
  );
}

export default App;
