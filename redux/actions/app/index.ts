import { App, AppActionTypes, AppStatus, StateAction } from '../../../types';

export const setApp = (app: App): StateAction<App> => ({
    type: AppActionTypes.SET_APP,
    payload: { ...app },
});

export const setAppStatus = (status: AppStatus): StateAction<AppStatus> => ({
    type: AppActionTypes.SET_APP_STATUS,
    payload: status,
});
