import { HYDRATE } from 'next-redux-wrapper';

import { RootState } from '.';
import { App, AppStatus } from '../app';

export type StateAction<T> = {
    type: AllActionTypes;
    payload?: T;
};

export type AllActionTypes = AppActionTypes | typeof HYDRATE;

export enum AppActionTypes {
    SET_APP = 'SET_APP',
    SET_APP_STATUS = 'SET_APP_STATUS',
}

export type AllActionPayloads = AppActionPayloads | RootState;

export type AppActionPayloads = App | AppStatus;
