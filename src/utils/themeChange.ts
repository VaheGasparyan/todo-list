import {CONSTANTS} from "../constants";

export const themeChange = (theme: string) => {
    if(theme === CONSTANTS.light) {
        return CONSTANTS.dark;
    } else {
        return CONSTANTS.light
    }
}