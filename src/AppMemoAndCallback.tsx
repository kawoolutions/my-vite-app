// useMemo, useCallback, memo

import React from 'react';
import { useState, useMemo, useCallback } from 'react';

function MemoAndCallbackDemo() {
    console.log('MemoAndCallbackDemo rendered');

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    const memoizedValue = useMemo(() => {
        console.log('memoizedValue called');
        return count * 2;
    }, [count]);

    const memoizedCallback = useCallback(() => {
        console.log('memoizedCallback called', count);
    }, [count]);

    return (
        <div>
            <h2>Memo and Callback demo</h2>
            <p>Count: {count}</p>
            <p>Name: {name}</p>
            <p>Memoized value: {memoizedValue}</p>
            <button onClick={() => setCount(count + 1)}>Increment count</button>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <ChildComponent memoizedCallback={memoizedCallback} />
            <hr></hr>
            <MemoizedChildComponent memoizedCallback={memoizedCallback} />
        </div>
    );
}

function ChildComponent({ memoizedCallback }: { memoizedCallback: () => void }) {
    console.log('ChildComponent rendered');
    return (
        <div>
            <h3>ChildComponent</h3>
            <button onClick={memoizedCallback}>Call memoizedCallback</button>
        </div>
    );
}

const MemoizedChildComponent = React.memo(ChildComponent);

function App() {
    console.log('App rendered');
    return (
        <>
            <h1>app works!</h1>
            <MemoAndCallbackDemo />
        </>
    );
}

export default App;