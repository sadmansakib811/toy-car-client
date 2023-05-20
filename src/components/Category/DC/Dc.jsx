import React, { useEffect, useState } from 'react';
import bg1 from '../../../assets/dcbg.jpg'
const Dc = () => {
    const [dcToys, setDcToys]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/toys/DC')
        .then(res=> res.json())
        .then(data=> setDcToys(data))
    },[])
    return (
        <div className='flex flex-row justify-center mb-5' style={{
            backgroundImage: `url(${bg1})`,
          }}>
           
           {
            dcToys.map(dc=> <div className=' flex' key={dc._id}>
                {/* card */}
                <div className="card w-96 glass text-white m-5 p-5  font-bold ">
                   <figure><img className=' h-96' src={dc.photo} alt="car!"/></figure>
                   <div className="card-body">
                   <h2 className="card-title font-extrabold ">{dc.name}</h2>
                   <div className='flex'>
                   <p>Rating: {dc.rating}</p>
                   <p>Price: {dc.price} TK</p>
                   </div>
                    
                    <div className="card-actions justify-end">
                       <button className="btn btn-primary">Details</button>
                    </div>
                </div>
              </div>
            </div> )
           }
        </div>
    );
};

export default Dc;