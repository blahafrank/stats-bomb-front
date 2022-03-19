import axios, { AxiosResponse } from 'axios';

import { API_URL } from '.';

export const getStats = (): Promise<AxiosResponse> => {
    return axios({
        method: 'GET',
        baseURL: API_URL,
        url: `/stats`,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    });
};
