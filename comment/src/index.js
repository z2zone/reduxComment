import React from 'react';
import ReactDom from 'react-dom/client';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './components/App';
import reducers from './reducers';

const rootElement = document.getElementById('root');
const reactRoot = ReactDom.createRoot(rootElement);

reactRoot.render(
    <Provider store={createStore(reducers)}>
        <App/>
    </Provider>
)