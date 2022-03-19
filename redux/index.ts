export * from './reducers';
export * from './actions';

import { createStore, applyMiddleware } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';

import { RootState, StateAction, AllActionPayloads, AppStatus } from '../types';
import { rootReducer } from './reducers';
import { selectAppStatus } from './selectors';

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');

        return composeWithDevTools(applyMiddleware(...middleware));
    }

    return applyMiddleware(...middleware);
};

const reducer = (state: RootState, action: StateAction<AllActionPayloads>) => {
    if (action.type === HYDRATE) {
        let nextState = {
            ...state,
            ...(action.payload as RootState),
        };

        if (selectAppStatus(state) !== AppStatus.INIT) nextState = state;

        return nextState;
    } else {
        return rootReducer(state, action);
    }
};

const initStore = () => createStore(reducer, bindMiddleware([thunkMiddleware]));

export const wrapper = createWrapper(initStore);
