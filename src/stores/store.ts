import { configureStore, combineReducers } from "@reduxjs/toolkit";

type ActionType = { type: string; payload: number };

const counterInitialState = { counter: Number(localStorage.getItem("counter") || 0) };
const counterReducer = (state = counterInitialState, action: ActionType) => {
    let _state = { ...state};
    switch (action.type) {
        case "RESET":
            _state = { counter: 0 };
            break;
        case "INCREMENT":
            _state = { counter: state.counter + 1 };
            break;
        case "DECREMENT":
            _state = { counter: state.counter - 1 };
            break;
        case "INCREMENT_BY":
            _state = { counter: state.counter + action.payload };
            break;
        default:
            _state = state;
            break;
    }

    localStorage.setItem("counter", _state.counter.toString());

    return _state;
};

const rootReducer = combineReducers({ counter: counterReducer });
const store = configureStore({ reducer: rootReducer });

export default store;

export type RootState = ReturnType<typeof store.getState>;