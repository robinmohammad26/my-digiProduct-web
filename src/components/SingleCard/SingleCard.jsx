import React, { useState } from 'react';
import productImg1 from './../../assets/products/design-tool.png'
import { FaChevronCircleRight } from 'react-icons/fa';

const SingleCard = ({product, addCard, setCard}) => {
    const [buyNow, setBuyNow] = useState(false)
    return (
        <div className="bg-base-100 shadow-sm">
            <div className="p-8 border border-amber-200 rounded-md space-y-2">
                <span className="bg-amber-200 px-3 py-1 rounded-full text-amber-600">{product.tag}</span>
                <div className='m-5'>
                    <img src={productImg1} alt="" />
                </div>
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold">{product.name}</h2>
                    <p className='text-[1rem]'>{product.description}</p>
                    <p className="text-xl font-bold">${product.price}<span className='text-neutral-400 text-sm'>/mo</span></p>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-sx">

                    <li>
                        <span className='flex items-center gap-3'> <FaChevronCircleRight /> High-resolution image generation</span>
                    </li>
                </ul>
                <div className="mt-6">
                    <button onClick={()=> setBuyNow(true)} className="btn btn-primary btn-block rounded-full">
                        {buyNow ? 'Successfully Buy' : 'Buy Now'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;