import React from 'react';
import { FaChartLine } from "react-icons/fa";


const SuppliersLoveSection = () => {
    return (
        <div className="w-11/12 mx-auto mb-20">
            <div className="md:flex gap-10 space-y-10 md:space-y-0">
                <div className='flex-1 flex flex-col justify-center'>
                    <h1 className="text-3xl sm:text-4xl font-bold text-[#5e0523] mb-6">
                        Why Suppliers Love Care Me
                    </h1>

                    <p className="text-lg text-gray-600 mb-4">
                        All the benefits that come with selling on Care Me be <br />
                        are designed to help you sell more, and make it easier <br /> to grow your business.
                    </p>
                </div>

                <div className="flex-1 border rounded-lg border-gray-300 p-8 space-y-6">
                    <div>
                        {/* border-l-4 h-[12px] border-[#ff8002] */}
                        <div className='flex gap-5 mb-3'>
                            <div className='relative mt-[11px]'>
                                <p className='absolute top-[-8px] left-[5px] flex justify-center items-center bg-[#5e0523] w-[22px] h-[22px] rounded-full text-white text-[10px]'>0%</p>
                                <p className=''><i class="fa-solid fa-hand-holding text-[30px] text-[#5e0523] "></i></p>
                            </div>
                            <h2 className="text-2xl font-semibold  ">
                                0% Commission Fee
                            </h2>

                        </div>

                        <div className="pl-[59px]">
                            <p className="text-gray-700">
                                Suppliers selling on Care Me keep 100% of their profit by not paying any commission
                            </p>
                        </div>
                    </div>

                    <hr className='border-gray-300' />

                    <div>
                        <div className='flex gap-5 mb-3'>
                            <p className='mt-1'><i class="fa-solid fa-file-shield text-[#5e0523] text-[30px]"></i></p>
                            <h2 className="text-2xl font-semibold">
                            0 Penalty Charges
                        </h2>
                        </div>
                        
                        <div className="pl-[59px]">
                            <p className="text-gray-700">
                                Suppliers selling on Care Me keep 100% of their profit by not paying any commission
                            </p>
                        </div>
                    </div>

                    <hr className='border-gray-300' />

                    <div>
                        <div className='flex gap-5 mb-3'>
                            <p className='text-[30px] text-[#5e0523] mt-1'><FaChartLine/></p>
                            <h1 className="text-[22px] font-semibold">
                            Growth for Every Supplier
                        </h1>
                        </div>
                        
                        <div className="pl-[59px] ">
                            <p className="text-gray-700">
                                From small to large and unbranded to branded, and now open for Sellers who don't have a Regular GSTIN too, Care Me fuels growth for all suppliers.
                            </p>
                        </div>
                    </div>

                    <hr className='border-gray-300' />

                    <div>
                        <div className='flex gap-5 mb-3'>
                            <p className='mt-1'><i class="fa-solid fa-handshake text-[30px] text-[#5e0523]"></i></p>
                            <h1 className="text-[22px] font-semibold">
                                Ease of Doing Business
                            </h1>
                        </div>
                        <ul className=" pl-[59px] space-y-1 text-gray-700">
                            <li><i class="fa-solid fa-check text-[13px] text-[#5e0523]"></i> Easy Product Listing</li>
                            <li><i class="fa-solid fa-check text-[13px] text-[#5e0523]"></i> Lowest Cost Shipping</li>
                            <li><i class="fa-solid fa-check text-[13px] text-[#5e0523]"></i> 7-Day Payment Cycle from the delivery date</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuppliersLoveSection;