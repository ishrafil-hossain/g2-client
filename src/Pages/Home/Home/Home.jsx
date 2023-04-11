import React from 'react';
import Founder from '../Founder/Founder';
import Buyers from '../Buyers/Buyers';
import Track from '../Track/Track';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Review />
            <Founder />
            <Buyers />
            <Track />
        </div>
    );
};

export default Home;