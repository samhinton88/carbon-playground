import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore, { injectAsyncReducer} from './redux/store';
import asyncReducer from './redux/reducers/async_reducer';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore({});

injectAsyncReducer(store, 'aysncStateObj', asyncReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
