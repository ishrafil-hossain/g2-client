import React from 'react';
import track from '../../../assets/images/track.png';

const Track = () => {
    return (
        <div>
            <div className="hero lg:h-[90vh] bg-[#062846]">
                <div className="customContainer">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div>
                            <h1 className="text-white text-xl lg:text-4xl font-bold text-center lg:text-start">G2 Track. Instant SaaS Visibility. Better Stack Decisions.</h1>

                            <p className='text-white py-5 lg:text-xl text-center lg:text-start'>One platform to easily manage and optimize your software stack so your company can achieve sustainable growth.</p>
                            <div className='text-center lg:text-start'>
                                <button className="bg-[#ff492c] font-extrabold text-white border-[#ff492c] rounded-full">Learn More</button>
                            </div>
                        </div>
                        <img src={track} className="w-[611px] rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Track;