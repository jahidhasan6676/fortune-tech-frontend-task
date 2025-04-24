import React from 'react';
import Banner from '../components/home/Banner';
import StatsCardSection from '../components/home/StatsCardSection';
import SuppliersLoveSection from '../components/SuppliersLoveSection';

const Home = () => {
    return (
        <div>
            <Banner/>
            <StatsCardSection/>
            <SuppliersLoveSection/>
        </div>
    );
};

export default Home;