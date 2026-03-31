import React from 'react';
import Card from '../Card/Card';

const Products = () => {
    return (
        <>
            <div className='my-15 space-y-3 max-w-[500px] mx-auto'>
                <div className='space-y-5 text-center'>
                    <h2 className='text-5xl font-bold'>Premium Digital Tools</h2>
                    <p className='text-sm'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                </div>
                <div role="tablist" className="my-10 text-center">
                    <a role="tab" className="bg-linear-to-r from-purple-600 to-purple-500 text-white text-xl rounded-full px-5 py-2 cursor-pointer">Products</a>
                    <a role="tab" className="rounded-full px-5 py-2 cursor-pointer">Card (2)</a>
                </div>
            </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <Card></Card>
                </div>
        </>
    );
};

export default Products;