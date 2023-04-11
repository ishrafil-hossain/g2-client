import React from 'react';
import founder from '../../../assets/images/founder.png';

const Founder = () => {
    return (
        <div>
            <div className="hero lg:h-[90vh] bg-[#062846]">
                <div className="customContainer">
                    <div className="hero-content flex-col lg:flex-row">
                        <div>
                            <p className="text-2xl lg:text-4xl font-bold lg:leading-[60px] py-6">"G2 has been a great place for me to both <span className='text-orange-600'>find</span> and <span className='text-orange-600'>review</span> software…it's actually been fun to see my reviews go up, get marked helpful..."</p>
                            <div className=''>
                                <p className='font-bold'>Matthew Gardner</p>
                                <p>Co-founder, RouteThis</p>
                                <p>G2 Reviewer</p>
                            </div>
                        </div>
                        <div>
                            <img src={founder} className="max-w-24 lg:max-w-sm rounded-lg" />
                            <div className='text-center pt-2 lg:hidden'>
                                <p className='font-bold'>Matthew Gardner</p>
                                <p>Co-founder, RouteThis</p>
                                <p>G2 Reviewer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Founder;