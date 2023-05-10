import {useState, createContext} from "react";
import {themeChange} from "utils/themeChange";

import Todo from "todo";

import './App.css';

export const ThemeContext = createContext({
    theme: 'light',
    changeTheme: () => {},
});

const App = () => {
    const [theme, setTheme] = useState('light');

    const changeTheme = () => {
        setTheme(themeChange(theme));
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
