import React from 'react';
import AboutUs from './AboutUs';
import CollageCard from './CollageCard';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className='w-11/12 mx-auto'>
            <CollageCard></CollageCard>
            <AboutUs></AboutUs>
            </div>
        </div>
    );
};

export default Home;