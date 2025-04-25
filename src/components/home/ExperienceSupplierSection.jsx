import React from 'react';
import { FaCirclePlay } from 'react-icons/fa6';

const ExperienceSupplierSection = () => {
    // Testimonial data array
    const testimonials = [
        {
            name: "Amit and Rajat Jain",
            business: "Smartees, Tiruppur",
            quote: "Our business has grown beyond our imagination, getting upto 10,000 orders consistently during sale days. We are now constantly bringing new products thanks to Meesho's insights.",
            image: "https://i.ibb.co.com/Qygmdb3/two-owner.webp"
        },
        {
            name: "Suman",
            business: "Keshav Fashion, Hisar",
            quote: "Our business has grown beyond our imagination, getting upto 10,000 orders consistently during sale days. We are now constantly bringing new products thanks to Meesho's insights.",
            image: "https://i.ibb.co.com/gM1m5yCM/shopman.jpg"
        },
        {
            name: "Mohit Rathi",
            business: "Meira Jewellery, Ahmedabad",
            quote: "Our business has grown beyond our imagination, getting upto 10,000 orders consistently during sale days. We are now constantly bringing new products thanks to Meesho's insights.",
            image: "https://i.ibb.co.com/9kvnmpNz/jewelary.jpg"
        }
    ];

    return (
        <div className="w-11/12 mx-auto mb-20">
            <h1 className="text-2xl md:text-4xl font-semibold text-center text-[#5e0523] mb-8">
                Experiences suppliers love to talk about
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {/* Map through testimonials */}
                {testimonials.map((testimonial, index) => (
                    <div key={index} className='border border-gray-200 p-3 rounded-md'>
                        <div className='mb-12'>
                            <img src={testimonial?.image} alt="Businessman" className='h-[250px] w-full rounded-sm object-cover' />

                            <p className='absolute z-40 mt-[-12px] ml-[25px] w-[40px] h-[40px] border-4 border-[#ff8002] rounded-full flex items-center justify-center overflow-hidden'><i class="fa-solid fa-circle-play text-[40px] text-[#5e0523] "></i></p>
                        </div>
                        <div className=" mb-3 space-y-3">
                            <h2 className="text-xl font-semibold text-gray-800">{testimonial?.name}</h2>
                            <p className="text-gray-600 font-medium">{testimonial?.business}</p>
                        </div>
                        <p className="text-gray-500">{testimonial.quote}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ExperienceSupplierSection;