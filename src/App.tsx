import { Provider } from 'react-redux';
import './App.css';
import store from './stores/store';
import Counter from './components/Counter';

function App() {
    console.log('App rendered');

    return (
        <>
            <Provider store={store}>
                <h1>app works!</h1>
                <Counter />
            </Provider>
        </>
    );
}

export default App;