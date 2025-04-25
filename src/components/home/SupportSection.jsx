import React from 'react';
import { FaHeadset, FaEnvelope } from 'react-icons/fa';

const SupportSection = () => {
    return (
        <div className=" bg-[#f4f8ff] mb-20">
            <div className="w-11/12 mx-auto py-14 md:flex gap-10">
                <div className="flex-1 flex items-center ">
                    <h1 className="text-2xl md:text-4xl font-bold text-[#5f0624]">
                        Care Me Supplier Support <br /> Available 24/7
                    </h1>

                </div>

                <div className='flex-1'>
                    <p className="text-lg text-gray-500 ">
                        Meesho supplier support is available to solve all your doubts and issues <br /> before and after you start your online selling business.
                    </p>


                    <div className='flex items-center gap-2 mt-4'>
                        <div>
                            <p className='bg-[#5e0523] p-2 rounded-sm'><FaEnvelope className="text-white" /></p>
                        </div>
                        <div>
                            <p className="text-[#5e0523] text-sm">You can reach out to</p>
                            <p
                                href="mailto:support@caremebd.com"
                                className="text-sm">
                                support@caremebd.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportSection;