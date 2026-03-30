import React from 'react';
import bannerImg from './../../assets/banner.png'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1'>
                        <img
                            src={bannerImg}
                        />
                    </div>
                    <div className='flex-1 space-y-4'>
                        <button className="btn rounded-full bg-[#E1E7FF] text-purple-500">New: AI-Powered Tools Available</button>
                        <h1 className="text-6xl font-bold">Supercharge Your <br /> Digital Workflow</h1>
                        <p className="py-6">
                            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.Explore Products
                        </p>
                        <div className='flex gap-3'>
                            <button className="btn btn-primary rounded-full">Explore Products</button>
                            <button className="btn btn-primary rounded-full">Watch Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;