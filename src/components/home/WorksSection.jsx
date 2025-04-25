import React from 'react';
import { FaUserPlus, FaListUl, FaShoppingBag, FaTruck, FaMoneyBillWave } from 'react-icons/fa';

const WorksSection = () => {
  const steps = [
    {
      number: '1',
      icon: <FaUserPlus className="text-white text-xl" />,
      title: 'Create Account',
      details: [
        'All you need is:',
        '- GSTIN (for GST sellers) or Enrolment ID / UIN (for non-GST sellers)',
        '- Bank Account'
      ]
    },
    {
      number: '2',
      icon: <FaListUl className="text-white text-xl" />,
      title: 'List Products',
      details: ['List the products you want to sell in your supplier panel']
    },
    {
      number: '3',
      icon: <FaShoppingBag className="text-white text-xl" />,
      title: 'Get Orders',
      details: ['Start getting orders from crores of Indians actively shopping on our platform.']
    },
    {
      number: '4',
      icon: <FaTruck className="text-white text-xl" />,
      title: 'Lowest Cost Shipping',
      details: ['Products are shipped to customers at lowest costs']
    },
    {
      number: '5',
      icon: <FaMoneyBillWave className="text-white text-xl" />,
      title: 'Receive Payments',
      details: ['Payments are deposited directly to your bank account following a 7-day payment cycle from order delivery.']
    }
  ];

  return (
    <div className="w-11/12 mx-auto mb-20 ">
        <h1 className="text-2xl lg:text-3xl font-bold text-center text-[#5e0523] mb-8">How it works</h1>
        
        <div className="bg-[#ecf1ff] rounded-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {steps.map((step, index) => (
            <div key={index} className="p-5">
              <div className="mb-5">
                <div className="bg-[#5e0523]  rounded-full w-12 h-12 flex items-center justify-center">
                  <span className=" text-white font-bold text-xl">{step.number}</span>
                  
                </div>
               
              </div>
              
              <div className="flex-1 ">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h2>
                <ul className="space-y-2 text-gray-600">
                  {step.details.map((detail, i) => (
                    <li key={i} className={i === 0 ? 'font-medium' : ''}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default WorksSection;