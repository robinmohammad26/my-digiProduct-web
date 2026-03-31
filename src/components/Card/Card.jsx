import React from 'react';
import productImg1 from './../../assets/products/design-tool.png'
import { FaChevronCircleRight } from 'react-icons/fa';

const Card = () => {
    return (
        <>
            <div className="bg-base-100 shadow-sm">
            <div className="p-8 border border-amber-200 rounded-md space-y-2">
                <span className="bg-amber-200 px-3 py-1 rounded-full text-amber-600">Most Popular</span>
                <div className='m-5'>
                    <img src={productImg1} alt="" />
                </div>
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold">Premium</h2>
                    <p className='text-[1rem]'>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                    <p className="text-xl font-bold">$29<span className='text-neutral-400 text-sm'>/mo</span></p>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-sx">
                    <li>
                        <span className='flex items-center gap-3'> <FaChevronCircleRight /> High-resolution image generation</span>
                    </li>
                </ul>
                <div className="mt-6">
                    <button className="btn btn-primary btn-block rounded-full">Buy Now</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Card;