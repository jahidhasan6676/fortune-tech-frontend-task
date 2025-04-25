import React from 'react';
import { AiFillSound } from 'react-icons/ai';
import { PiMoneyFill } from 'react-icons/pi';

const SupplierRewardsSection = () => {
    return (
        <div className="w-full bg-[#f4f8ff] mb-20 lg:h-[310px]">
            <div className='w-11/12 mx-auto py-10 lg:py-0 lg:flex gap-10 space-y-10 lg:space-y-0'>
                {/* left side */}
                <div className='flex-1 flex items-center'>
                    <h1 className="text-2xl md:text-4xl font-bold text-[#5f0624]">
                        Exclusive Supplier+ Rewards <br /> for the first 30 days
                    </h1>
                </div>

                {/* right side */}
                <div className="flex-1 md:flex gap-5 space-y-5 md:space-y-0">
                    {/* Reward 1 */}
                    <div className="border border-gray-200 bg-white rounded-lg p-5 lg:w-[270px] h-[310px] lg:mt-[-30px]">
                        <p><AiFillSound className='text-[40px] text-[#5f0624] -rotate-45' /></p>
                        <h1 className="text-2xl font-semibold  mb-3">
                            Free catalog visibility of ₹600
                        </h1>
                        <p className="text-[17px] text-gray-500">
                            Run advertisements for your catalogs to increase the visibility of your products and get more orders. Currently, not available for sellers who don't have a Regular GSTIN.
                        </p>
                    </div>

                    {/* Reward 2 - Duplicate of first one as in the image */}
                    <div className="border border-gray-300 bg-white rounded-lg p-5 lg:w-[270px] h-[310px] lg:mt-[30px]">
                        <p><PiMoneyFill className='text-[40px] text-[#5f0624]' /></p>
                        <h1 className="text-2xl font-semibold mb-3">
                            Free catalog visibility of ₹600
                        </h1>
                        <p className="text-[17px] text-gray-600">
                            Run advertisements for your catalogs to increase the visibility of your products and get more orders. Currently, not available for sellers who don't have a Regular GSTIN.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupplierRewardsSection;