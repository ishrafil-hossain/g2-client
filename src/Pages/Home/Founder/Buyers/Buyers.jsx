import React from 'react';
import buyers from '../../../../assets/images/buyers.png';

const Buyers = () => {
    return (
        <div>
            <div className="hero lg:h-[90vh] bg-white">
                <div className="customContainer">
                    <div className="hero-content flex-col lg:flex-row">
                        <div>
                            <h1 className="text-[#5A39A2] text-2xl lg:text-4xl font-bold text-center lg:text-start">Selling software?</h1>
                            <h1 className="text-black text-2xl lg:text-4xl font-bold text-center lg:text-start">Reach more buyers.</h1>
                            <p className='text-black py-5 lg:text-xl'>Your future customers are researching their next purchase on G2. Make sure they can find you.</p>
                            <div className='text-center lg:text-start'>
                                <button className="btn btn-outline btn-error bg-white font-extrabold text-[#ff492c] border-[#ff492c] rounded-full">Claim Your G2 Profile</button>
                            </div>
                        </div>
                        <img src={buyers} className="w-[611px] rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Buyers;