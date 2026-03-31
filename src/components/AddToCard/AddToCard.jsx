import React from 'react';
import cardImg from './../../assets/products/portfolio.png'

const AddToCard = ({addCard, setCard}) => {
    console.log(addCard)
    return (
        <div className='rounded-2xl p-6 border border-gray-300'>
            <h3 className='font-bold'>Add To Card</h3>
            <div className='flex flex-col gap-3 p-5 border border-amber-200 rounded-2xl mt-5'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-3'>
                        <div>
                            <img src={cardImg} alt="" />
                        </div>
                        <div>
                            <p className='font-bold'>AI Writing Pro</p>
                            <span>$29</span>
                        </div>
                    </div>
                    <div>
                        <button className='btn btn-warning text-white'>Remove</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center mt-3'>
                <p className='text-xl'>Total:</p>
                <p className='text-xl font-bold'>$78</p>
            </div>
            <button className="btn w-full rounded-full text-white mt-5 bg-linear-to-r from-purple-600 to-purple-500">Proceed to Checkout</button>
        </div>
    );
};

export default AddToCard;