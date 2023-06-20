import {ReactNode} from "react";

export interface IThemeContextInterface {
    children?: ReactNode
}

export interface ITheme {
    theme: string;
    changeTheme: () => void
}