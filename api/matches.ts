import axios, { AxiosResponse } from 'axios';

import { API_URL } from '.';

export const getMatches = (): Promise<AxiosResponse> => {
    return axios({
        method: 'GET',
        baseURL: API_URL,
        url: `/matches`,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    });
};
