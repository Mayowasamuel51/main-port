import arrayDestruct from '../assests/portfolio-images/download (1).jpeg';
import installNode from '../assests/portfolio-images/download.jpeg';
import navbar from '../assests/portfolio-images/download (15).jpeg';
import reactParallax from '../assests/portfolio-images/reactParallax.jpg';
import reactSmooth from '../assests/portfolio-images/reactSmooth.jpg';
import reactWeather from '../assests/portfolio-images/aaaa.jpeg';

//  codar , to , kingship , mypromopshere ,

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: arrayDestruct,
            link:'https://www.kingshiptechnologies.com/'
           
        },
        {
            id: 2,
            src: installNode,
            link:'https://codarhq.com/'
        },
        {
            id: 3,
            src: navbar,
            link:'https://www.to-analytics.com/'
         
        },
        {
            id: 4,
            src: reactParallax
        },
        {
            id: 5,
            src: reactSmooth
        },
        {
            id: 6,
            src: reactWeather,
            link:"https://robo-advisor.netlify.app/"
        },
    ]

    return (
        <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white pt-20 md:pt-0'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</h2>
                    <p className='py-6'>check out some of my work here</p>
                </div>



                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {portfolios.map(({ id, src , link}) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                            
                            <div className='flex justify-center items-center my-4'>
                            <a  href={`${link}`} className='font-bold w-1/2 px-6 py-3 duration-200 hover:scale-105'>
                                Vist</a>
                                {/* <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>Github</button> */}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Portfolio;