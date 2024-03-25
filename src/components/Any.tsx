import useCounterStore from "../hooks/useCounterStore";

export default function Any() {
    const { counterStore, increment, decrement } = useCounterStore();

    return (
        <>
            <div>Any</div>

            <p>
                <button onClick={() => decrement()}> - </button>
                Counter: {counterStore.counter}
                <button onClick={() => increment()}> + </button>
            </p>
        </>
    );
}