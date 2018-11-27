

import { createStore } from 'redux';
import rootReducer from '.././reducers/TheRootReducer.js';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
    );
}