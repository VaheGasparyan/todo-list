import {ChangeEvent, Context, createContext, useContext, useState} from "react";
import {ITheme} from "interfaces/themeContextInterface";

export const useInputValue = (initialState: string) => {
    const [inputValue, setInputValue] = useState(initialState);

    const onChange = (event:ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const clear = (value: string) => {
        setInputValue(value);
    }

    return {
        inputValue,
        onChange,
        clear
    }
};

export const ThemeContext: Context<ITheme> = createContext({
    theme: 'light',
    changeTheme: () => {},
});

export const useThemeContext = () => {
    return useContext(ThemeContext);
}