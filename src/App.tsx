import {useState, createContext} from "react";
import {themeChange} from "utils/themeChange";
import {getLocalStorageValue, setLocalStorageValue} from "utils/setAndGetLocalStorageValue";

import Todo from "todo";

import './App.css';

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
