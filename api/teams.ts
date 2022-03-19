import axios, { AxiosResponse } from 'axios';

import { API_URL } from '.';

export const getTeams = (): Promise<AxiosResponse> => {
    return axios({
        method: 'GET',
        baseURL: API_URL,
        url: `/teams`,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    });
};
