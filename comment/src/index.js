import React from 'react';
import ReactDom from 'react-dom/client';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const rootElement = document.getElementById('root');
const reactRoot = ReactDom.createRoot(rootElement);
const store = createStore(reducers, applyMiddleware(thunk))

reactRoot.render(
    <Provider store={store}>
        <App/>
    </Provider>
)