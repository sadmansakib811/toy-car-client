
import Slider from '../slider/Slider';
import Category from '../../Category/Category';
import './Home.css'
import Marquee from "react-fast-marquee";
import img1 from '../../../assets/avengersbg.jpg'
import img2 from '../../../assets/marvelbg.jpg'
import img3 from '../../../assets/dcbg.jpg'
import img4 from '../../../assets/dragon-ball-z-super-saiyan.jpg'
import img5 from '../../../assets/starwarsbg.jpg'
import OurTeam from '../OurTeam/OurTeam';
const Home = () => {
    return (
       
        <div className='max-w-7xl mx-auto'>
            <Slider></Slider>
            <Category></Category>
            <h1 className=' text-2xl font-bold text-center text-purple-700 mb-5'>Image Gallary</h1>

            <Marquee>
                <div className=' flex mb-5' style={{height:'200px'}}>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                </div>
                
            </Marquee>
            
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;