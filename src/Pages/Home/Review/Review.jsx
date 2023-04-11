import React from 'react';
import review from '../../../assets/images/review.png';

const Review = () => {
    return (
        <div>
            <div className="hero lg:h-[90vh] bg-white">
                <div className="customContainer">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div>
                            <h1 className="text-[#5A39A2] text-2xl lg:text-4xl font-bold text-center lg:text-start">Using software?</h1>
                            <h1 className="text-black text-2xl lg:text-4xl font-bold text-center lg:text-start">Write a review.</h1>
                            <p className='text-black py-5 lg:text-xl text-center lg:text-start'>Help over 5 million monthly Buyers on G2 make the right choice for their business.</p>
                            <div className='text-center lg:text-start'>
                                <button className="btn btn-outline btn-error bg-white font-extrabold text-[#ff492c] border-[#ff492c] rounded-full">Write a Review</button>
                            </div>
                        </div>
                        <img src={review} className="w-[611px] rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;