import React from 'react';

import Header from '../components/Header/Header';

interface Props {
    children: React.ReactNode | string;
}

const Layout: React.FC<Props> = (props) => {
    const { children } = props;

    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
};

export default Layout;
