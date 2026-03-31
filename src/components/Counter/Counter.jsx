import React from 'react';

const Counter = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-8/12 text-center mx-auto'>
            <div>
                <h1 className='text-5xl font-bold text-white mb-3'>50K+</h1>
                <p className='text-xl text-white'>Active Users</p>
            </div>
            <div>
                <h1 className='text-5xl font-bold text-white mb-3'>200+</h1>
                <p className='text-xl text-white'>Premium Tools</p>
            </div>
            <div>
                <h1 className='text-5xl font-bold text-white mb-3'>4.9</h1>
                <p className='text-xl text-white'>Rating</p>
            </div>
        </div>
    );
};

export default Counter;