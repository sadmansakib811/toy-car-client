import React, { useEffect, useState } from 'react';
import bg1 from '../../../assets/starwarsbg.jpg'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const StarWars = () => {
    const [starWarToys, setStarWarToys]=useState([]);
    useEffect(()=>{
        fetch('https://toyland-server-jade.vercel.app/toys/Star%20Wars')
        .then(res=> res.json())
        .then(data=> setStarWarToys(data))
    },[])
    // aos animation useeffect:
    useEffect(() => {
      AOS.init({
        duration: 1000, // Duration of animation (in milliseconds)
        easing: 'ease-in-out', // Type of easing
        once: true, // Whether animation should trigger only once
      });
    }, []);
    return (
        <div data-aos="fade-up" className='flex flex-wrap justify-center mb-5' style={{ backgroundImage: `url(${bg1})` }}>
  {starWarToys.map(starwars => (
    <div className='flex w-1/3 justify-center' key={starwars._id}>
      {/* card */}
      <div className="card w-96 glass m-5 p-5  font-bold">
        <figure><img className='h-96' src={starwars.photo} alt="car!" /></figure>
        <div className="card-body">
          <h2 className="card-title font-extrabold ">{starwars.name}</h2>
          <div className='flex'>
            <p>Rating: {starwars.rating}</p>
            <p>Price: {starwars.price} TK</p>
          </div>

          <div className="card-actions justify-end">
            <Link to={`/toy/${starwars._id}`}><button className="btn btn-primary bg-purple-700">Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
    );
};

export default StarWars;