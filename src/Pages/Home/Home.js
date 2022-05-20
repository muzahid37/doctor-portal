import React from 'react';
import Banner from './Banner';
import Info from './info';
import Services from './Services';
import Treatements from './Treatements';

const Home = () => {
    return (
        <div className='px-12'>
            <h2>this is home page</h2>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Treatements></Treatements>
        </div>
    );
};

export default Home;