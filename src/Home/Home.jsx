import React from 'react';

import Gallery from './Gallery';
import Categroy from './Categroy';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Categroy></Categroy>
        </div>
    );
};

export default Home;