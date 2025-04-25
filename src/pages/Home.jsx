import React from 'react';
import Banner from '../components/home/Banner';
import StatsCardSection from '../components/home/StatsCardSection';
import SuppliersLoveSection from '../components/home/SuppliersLoveSection';
import PopularCategoriesSection from '../components/home/PopularCategoriesSection';
import SupportSection from '../components/home/SupportSection';
import WorksSection from '../components/home/WorksSection';
import SupplierRewardsSection from '../components/home/SupplierRewardsSection';
//import Test from "../components/home/Test";

const Home = () => {
    return (
        <div>
            <Banner/>
            <StatsCardSection/>
            <SuppliersLoveSection/>
            <SupplierRewardsSection/>
            <WorksSection/>
            <PopularCategoriesSection/>
            <SupportSection/>
            
            
            {/* <Test/> */}
        </div>
    );
};

export default Home;