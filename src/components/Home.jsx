import HeroImage from '../assests/hero.png';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import { Link } from 'react-scroll';
import photo from "../assests/portfolio-images/hhh.jpg"
// import ope from "./WhatsApp Image 2023-11-13 at 19.47.48_d733658d.jpg"
// import opee from "./WhatsApp Image 2023-11-14 at 10.37.39_b0ec89b1.jpg"
const Home = () => {
    return ( 
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl font-bold text-white capitalize sm:text-7xl'>i am a full-stack developer</h2>
                    <p className='text-gray-500 py-4 max-w-md'>I have 4 years of experience building and designing web and mobile applications. Currently i love working with technologies like React, NodeJs, MySQL, MongoDB, Express, Laravel, PHP, Javascript, Bulma, Bootstrap, HTML/CSS.</p>

                    <div>
                        <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={20} className='ml-1' /></span>
                        </Link>
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <img src={photo} alt="heroImage" className='rounded-2xl mx-auto w-1/3 md:w-full'/>
                </div>
               
            </div>
        </div>
     );
}
 
export default Home;