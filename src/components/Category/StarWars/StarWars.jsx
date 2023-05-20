import React, { useEffect, useState } from 'react';
import bg1 from '../../../assets/starwarsbg.jpg'

const StarWars = () => {
    const [starWarToys, setStarWarToys]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/toys/Star%20Wars')
        .then(res=> res.json())
        .then(data=> setStarWarToys(data))
    },[])
    return (
        <div className='flex flex-row justify-center mb-5' style={{
            backgroundImage: `url(${bg1})`,
          }}>
           
           {
            starWarToys.map(starwars=> <div className=' flex' key={starwars._id}>
                {/* card */}
                <div className="card w-96 glass m-5 p-5  font-bold ">
                   <figure><img className=' h-96' src={starwars.photo} alt="car!"/></figure>
                   <div className="card-body">
                   <h2 className="card-title font-extrabold ">{starwars.name}</h2>
                   <div className='flex'>
                   <p>Rating: {starwars.rating}</p>
                   <p>Price: {starwars.price} TK</p>
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

export default StarWars;