import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const PopularCategoriesSection = () => {
  const categories = [
    { name: 'Sell Sarees Online' },
    { name: 'Sell Tshirts Online' },
    { name: 'Sell Watches Online' },
    { name: 'Sell Clothes Online' },
    { name: 'Sell Jewellery Online' },
    { name: 'Sell Shirts Online' },
    { name: 'Sell Electronics Online' },
    { name: 'Sell Socks Online' }
  ];

  return (
    <div className="w-11/12 mx-auto pb-20">
        <h1 className="text-2xl md:text-4xl font-bold text-[#5e0523] mb-8">
          Popular Categories to Sell Online
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-800 font-medium">{category.name}</span>
                <FaAngleRight className="text-gray-400" />
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default PopularCategoriesSection;