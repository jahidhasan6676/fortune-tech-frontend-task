

const Footer = () => {
    return (
        <div className="w-full bg-[#5e0523]">

            <div className="w-11/12 mx-auto text-white py-12 border-b">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* care me */}
                    <div>
                        <h4 className="text-3xl font-semibold mb-6">Care Me</h4>
                        <p className="text-gray-200">Sell your products to crores <br /> of customers on Meesho at <br /> 0% commission</p>
                        <button className=" px-6 py-2 text-[17px] font-medium rounded bg-[#ff8002] text-white transition cursor-pointer mt-4">Start Selling</button>
                    </div>

                    {/* all links */}

                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold  mb-6">Sell on Care Me</h3>
                        <ul className="space-y-3 text-gray-200">
                            <li>Sell Online</li>
                            <li>Pricing & Commission</li>
                            <li>How it works</li>
                            <li>Shipping & Returns</li>
                            <li>Grow Your Business</li>
                            <li>Learning Hub</li>
                        </ul>
                    </div>

                    {/* support */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-6">Sell on Care Me</h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="mailto:Support@caremebd.com"
                                    className="text-gray-200 transition"
                                >
                                    Support@caremebd.com
                                </a>
                            </li>

                            <div className="flex gap-2">
                                <p className="bg-white w-8 h-8 text-[18px] font-extrabold flex justify-center items-center rounded text-[#5e0523] ">F</p>
                                <p className="bg-white w-8 h-8 text-[18px] font-extrabold flex justify-center items-center rounded text-[#5e0523] ">I</p>
                                <p className="bg-white w-8 h-8 text-[18px] font-extrabold flex justify-center items-center rounded text-[#5e0523] ">Y</p>
                            </div>
                        </ul>
                    </div>

                </div>
            </div>
            {/* Footer */}
            <footer className="text-center text-white py-8">
                <p className="">© 2015 Care Me. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Footer;