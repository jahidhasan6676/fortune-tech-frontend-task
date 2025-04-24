import React from 'react';
import Banner from '../components/home/Banner';
import StatsCardSection from '../components/home/StatsCardSection';
import SuppliersLoveSection from '../components/home/SuppliersLoveSection';
import PopularCategoriesSection from '../components/home/PopularCategoriesSection';
import SupportSection from '../components/home/SupportSection';

const Home = () => {
    return (
        <div>
            <Banner/>
            <StatsCardSection/>
            <SuppliersLoveSection/>
            <PopularCategoriesSection/>
            <SupportSection/>
        </div>
    );
};

export default Home;