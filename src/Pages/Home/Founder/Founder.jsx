import React from 'react';
import founder from '../../../assets/images/founder.png';

const Founder = () => {
    return (
        <div>
            <div className="hero min-h-screen lg:h-[90vh] bg-[#062846]">
                <div className="customContainer">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={founder} className="max-w-sm rounded-lg" />
                        <div>
                            <p className="text-4xl font-bold leading-[60px] py-6">"G2 has been a great place for me to both <span className='text-orange-600'>find</span> and <span className='text-orange-600'>review</span> software…it's actually been fun to see my reviews go up, get marked helpful..."</p>
                            <p className='font-bold'>Matthew Gardner</p>
                            <p>Co-founder, RouteThis</p>
                            <p>G2 Reviewer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Founder;