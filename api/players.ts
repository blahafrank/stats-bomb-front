import axios, { AxiosResponse } from 'axios';

import { API_URL } from '.';

export const getPlayers = (): Promise<AxiosResponse> => {
    return axios({
        method: 'GET',
        baseURL: API_URL,
        url: `/players`,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    });
};
