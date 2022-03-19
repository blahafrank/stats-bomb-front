import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setAppStatus, wrapper } from '../redux';
import { AppStatus } from '../types';

export interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = ({}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAppStatus(AppStatus.ON_CLIENT));
    }, []);

    return (
        <div>
            <h1>This is HomePage.</h1>
        </div>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
    store.dispatch(setAppStatus(AppStatus.ON_SERVER));
});

export default HomePage;
