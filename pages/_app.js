import React from 'react';

import { wrapper } from '../redux';

// eslint-disable-next-line react/prop-types
const AppWrapper = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default wrapper.withRedux(AppWrapper);
