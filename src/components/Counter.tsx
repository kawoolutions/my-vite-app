import useCounterStore from "../hooks/useCounterStore.ts";

export default function Counter() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { counterStore, increment, decrement } = useCounterStore();

    return (
        <>
            <p>
                <button onClick={() => decrement()}> - </button>
                Counter: {counterStore.counter}
                <button onClick={() => increment()}> + </button>
            </p>
        </>
    );
}