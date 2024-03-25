import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../stores/store";

export default function useCounterStore() {
    const counterStore = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch();

    function increment() {
        dispatch({ type: "INCREMENT", payload: 1 });
    }

    function decrement() {
        dispatch({ type: "DECREMENT", payload: 1 });
    }

    function reset() {
        dispatch({ type: "RESET" });
    }


    return { counterStore, increment, decrement };
}