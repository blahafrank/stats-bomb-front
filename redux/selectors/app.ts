import { App, AppStatus, RootState } from '../../types';

export const selectApp = (state: RootState): App => state.app;

export const selectAppStatus = (state: RootState): AppStatus => selectApp(state).status;
