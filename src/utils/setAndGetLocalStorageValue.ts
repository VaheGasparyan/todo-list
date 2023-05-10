const getLocalStorageValue = () => {
    const theme = localStorage.getItem('theme')
    if(theme) {
        return theme;
    }

    return 'dark'
}

const setLocalStorageValue = (theme: string) => {
    localStorage.setItem('theme', theme);
}

export { getLocalStorageValue, setLocalStorageValue };