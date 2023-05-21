import React from 'react';

import Gallery from './Gallery';
import Categroy from './Categroy';
import Banner from './Banner/Banner';
import Testomonial from '../Layout/Testomonial';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Categroy></Categroy>
            <Testomonial></Testomonial>
            
            
        </div>
    );
};

export default Home;