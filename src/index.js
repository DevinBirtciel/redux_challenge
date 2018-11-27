/*
 * Copyright (C) McKesson Corporation Inc - All Rights Reserved 2018-2019
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import {Provider} from 'react-redux';
import Elements from './containers/Elements';
import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <Elements />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
