import { App, AppActionPayloads, AppActionTypes, AppStatus, StateAction } from '../../types';

const initState: App = { status: AppStatus.INIT };

export const appReducer = (state: App = initState, action: StateAction<AppActionPayloads>): App => {
    switch (action.type) {
        case AppActionTypes.SET_APP: {
            const app = action.payload;

            return { ...(app as App) };
        }

        case AppActionTypes.SET_APP_STATUS: {
            const status = action.payload;

            return { ...state, status: status as AppStatus };
        }

        default: {
            return { ...state };
        }
    }
};
