import React from 'react';
import ReactDom from 'react-dom/client';
import {Provider} from 'react-redux';
import {createsStore} from 'redux';

import App from './components/App';
import reducers from './reducers';

const rootElement = document.getElementById('root');
const reactRoot = ReactDom.createRoot(rootElement);

reactRoot.render(
    <Provider store={createsStore(reducers)}>
        <App/>
    </Provider>,
    document.querySelector('#root')
)