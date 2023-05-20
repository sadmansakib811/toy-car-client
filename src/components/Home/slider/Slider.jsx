// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';

import img1 from '../../../assets/ironman.jpg';
import img2 from '../../../assets/batman.jpg';
import img3 from '../../../assets/spider.jpg';

const Slider = () => {
  

  return (
    <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full">
      <img src={img1} className="w-full" style={{height:'700px'}} />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <button className="btn btn-secondary ">Shop Now</button> {/* Added button */}
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full">
      <img src={img2} className="w-full" style={{height:'700px'}}/>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <button className="btn btn-secondary ">Shop Now</button> {/* Added button */}
       
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide3" className="carousel-item relative w-full">
      <img src={img3} className="w-full" style={{height:'700px'}}/>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <button className="btn btn-secondary ">Shop Now</button> {/* Added button */}
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
    </div> 
   
  </div>
    );
};

export default Slider;
