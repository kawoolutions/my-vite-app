import React from "react";

// This is the context we'll use to pass the theme to the Button component.

type Theme = 'light' | 'dark';
type ThemeContextType = [Theme, React.Dispatch<React.SetStateAction<Theme>>];
const ThemeContext = React.createContext<ThemeContextType>(['light', () => {}]);

// This is the context we'll use to pass the theme to the Button component.
export function ThemeContextProvider(props: { children: React.ReactNode }) {
    const [theme, setTheme] = React.useState<Theme>('light');

    return <ThemeContext.Provider value={[theme, setTheme]}>{props.children}</ThemeContext.Provider>;
}

export function useTheme(){
    return React.useContext(ThemeContext);
}
