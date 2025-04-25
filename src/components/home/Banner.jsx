import React from 'react';
import deliveryMan from "../../assets/deliveryMan.png";

const Banner = () => {
    return (
        <div className="bg-[#eae3e3] w-full mb-20">
            <div className="lg:flex ">
                {/* Left Side */}
                <div className="w-11/12 mx-auto flex flex-col justify-center leftMargin lg:px-[62px] flex-1 mb-10 lg:mb-0 py-10">
                    <h1 className="text-3xl  lg:text-4xl lg:font-bold font-semibold text-gray-900 leading-tight">
                        Sell online to 14 Cr+ customers at <br />
                        <span className="text-[#5e0523]">0% Commission</span>
                    </h1>
                    <p className="mt-6 text-gray-700 text-[18px]">
                        Become a Care Me seller and grow your business across Bangladesh
                    </p>

                    <div className="flex items-center gap-2 mt-4">
                        <span className="bg-[#5e0523] text-white px-3 py-1 text-sm rounded font-semibold">New!</span>
                        <p className="text-gray-700 text-[17px]">
                            Don’t have a GSTIN? You can still sell on Meesho. <span className="text-[#5e0523] font-medium">Know more</span>
                        </p>
                    </div>

                    {/* Mobile number and Button */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-2">
                        <input
                            type="text"
                            placeholder="Enter your mobile number"
                            className="px-4 py-3 rounded bg-[#ffffff] w-full sm:w-[250px] outline-none"
                        />
                        <button className="bg-[#5e0523] text-white px-6 py-3 rounded font-medium cursor-pointer transition">
                            Start Selling
                        </button>
                    </div>
                </div>

                {/* Right Side - Full background color */}
                <div className="flex-1 ">
                    {/* Background color spans full height & width */}
                    <div className=" bg-[#450000] rounded-tl-full w-full lg:h-full md:h-[450px]">
                        <img
                            src={deliveryMan}
                            alt="Delivery Guy"
                            className="w-full h-full lg:object-cover md:object-contain "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;