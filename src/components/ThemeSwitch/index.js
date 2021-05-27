import React, {useContext} from 'react';
import {AppContext} from '../../providers/context';
import {THEMES} from '../../providers/themes/themeList';
import {saveToStorage} from '../../utils/sessionStorage'

export const ThemeSwitch = () => {
    const {state, dispatch} = useContext(AppContext);

    const setTheme = (themeName) => {
        dispatch({
            type: 'setTheme',
            themeName
        });

        saveToStorage('themeName', themeName);
    }

    return (
        <>
            <button onClick={() => setTheme(THEMES.LIGHT)}>Light</button>
            <button onClick={() => setTheme(THEMES.DARK)}>Dark</button>
        </>
    )
}