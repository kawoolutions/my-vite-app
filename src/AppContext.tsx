import {ThemeContextProvider, useTheme} from "./ThemeSwitcher.tsx";

function App() {
    return (
        <>
            {/* We'll use the ThemeContext.Provider to pass the theme to the Button component. JSX COMMENT */}
            <ThemeContextProvider> {/* change mode here */}
                <h1>App works</h1>
                <ThemeSwitcher />
                <Contact />
            </ThemeContextProvider>
        </>
    );
}

function Contact() {
    return (
        <>
            <h2>Contact works</h2>
            <Button text="Click me"/>
        </>
    );
}

// We'll use the context to access the theme in the Button component.
type ButtonProps = {
    text: string;
};

function Button({ text }: ButtonProps) {
// function Button({ text } : { text: string}) {

    const [theme] = useTheme();
    return (
        <>
            <button className={theme}>
                {text} ({theme})
            </button>
        </>
    );
}

function ThemeSwitcher() {
    const [theme, setTheme] = useTheme();

    return (
        <>
            Current theme: {theme} -
            <button onClick={() => setTheme('light')}>Light</button>
            <button onClick={() => setTheme('dark')}>Dark</button>
        </>
    );
}

export default App;
