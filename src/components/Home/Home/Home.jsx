import React from 'react';
import Slider from '../slider/Slider';
import Category from '../../Category/Category';

const Home = () => {
    return (
       
        <div className='max-w-7xl mx-auto'>
            <Slider></Slider>
            <Category></Category>
        </div>
    );
};

export default Home;