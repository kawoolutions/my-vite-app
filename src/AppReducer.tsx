import { useReducer } from "react";

type counterAction = "increment" | "decrement" | "reset";

function counterReducer(state: number, action: counterAction) {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return 0;
    }
}

function App() {
    const [counter, dispatchCounter] = useReducer(counterReducer, 0);

    function increment() {
        dispatchCounter("increment");
    }

    function decrement() {
        dispatchCounter("decrement");
    }

    function reset() {
        dispatchCounter("reset");
    }

    return (
        <>
            <h1>App works</h1>

            <button onClick={increment}> ➕ {counter} </button>
            <button onClick={decrement}> ➖ {counter} </button>
            <button onClick={reset}> 🗑️ {counter} </button>
        </>
    );
}

export default App;
